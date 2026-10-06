"use client";
import React, { useState, useEffect } from "react";
import { Bell, BellCheck } from "lucide-react";
import { urlBase64ToUint8Array } from "@/utils/push";

export default function PushNotificationManager() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.ready.then(async (registration) => {
        const subscription = await registration.pushManager.getSubscription();
        setIsSubscribed(!!subscription);
      });
    }
  }, []);

  const subscribeToPush = async () => {
    setLoading(true);
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        alert("알림 권한이 거부되었습니다.");
        setLoading(false);
        return;
      }

      const registration = await navigator.serviceWorker.ready;
      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

      if (!vapidPublicKey) {
        throw new Error("VAPID Public Key가 설정되지 않았습니다.");
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });

      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscription),
      });

      if (res.ok) {
        setIsSubscribed(true);
        alert("알림 설정 완료!");
      }
    } catch (error) {
      console.error(error);
      alert("알림 등록 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md my-3 px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-2xl flex items-center justify-between">
      <div className="flex items-center space-x-2 text-xs text-slate-300">
        {isSubscribed ? <BellCheck className="w-4 h-4 text-emerald-400" /> : <Bell className="w-4 h-4 text-indigo-400" />}
        <span>{isSubscribed ? "아침 복습 알림 수신 중" : "매일 오전 8시 복습 알림 받기"}</span>
      </div>
      {!isSubscribed && (
        <button
          onClick={subscribeToPush}
          disabled={loading}
          className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-xl transition disabled:opacity-50"
        >
          {loading ? "설정 중..." : "알림 켜기"}
        </button>
      )}
    </div>
  );
}
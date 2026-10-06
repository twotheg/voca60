"use client";

import { useEffect } from "react";

export default function WakeLock() {
  useEffect(() => {
    let wakeLock: any = null;

    const requestWakeLock = async () => {
      try {
        // 브라우저(또는 TWA)가 Wake Lock API를 지원하는지 확인
        if ("wakeLock" in navigator) {
          wakeLock = await (navigator as any).wakeLock.request("screen");
          console.log("화면 꺼짐 방지(Wake Lock) 활성화됨");
        }
      } catch (err) {
        console.error("Wake Lock 에러:", err);
      }
    };

    // 사용자가 다른 앱을 보다가 다시 돌아왔을 때 Wake Lock을 재활성화
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    // 최초 실행 및 이벤트 리스너 등록
    requestWakeLock();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 컴포넌트가 언마운트될 때(앱 종료 시) 정리(Clean-up)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (wakeLock !== null) {
        wakeLock.release().then(() => {
          wakeLock = null;
        });
      }
    };
  }, []);

  // 이 컴포넌트는 백그라운드 기능만 하므로 화면에 아무것도 그리지 않습니다.
  return null;
}

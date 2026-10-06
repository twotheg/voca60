import { NextResponse } from "next/server";
import webpush from "web-push";
import { subscriptions } from "@/utils/store";

// ✅ 핵심: Next.js가 빌드 시점에 이 파일을 미리 실행(prerendering)하는 것을 막아줍니다.
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || "mailto:admin@example.com",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );

  const authHeader = req.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const payload = JSON.stringify({
    title: "☀️ Voca60: 오늘의 수능 어휘 도착!",
    body: "Day 진행 중인 34개 어휘와 헷갈렸던 오답 노트를 복습할 시간입니다.",
    url: "/",
  });

  const sendResults = await Promise.allSettled(
    subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(sub, payload);
      } catch (err: any) {
        if (err.statusCode === 410 || err.statusCode === 404) {
          const index = subscriptions.indexOf(sub);
          if (index !== -1) subscriptions.splice(index, 1);
        }
        throw err;
      }
    })
  );

  const successful = sendResults.filter((r) => r.status === "fulfilled").length;
  const failed = sendResults.filter((r) => r.status === "rejected").length;

  return NextResponse.json({
    message: "Push notifications dispatched",
    successful,
    failed,
    remainingSubscribers: subscriptions.length,
  });
}
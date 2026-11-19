import type { Metadata, Viewport } from "next";
import "./globals.css";
import WakeLock from "../components/WakeLock";
import AdSenseScript from "../components/AdSenseScript";

export const metadata: Metadata = {
  title: "Voca60 수능 마스터",
  description: "수능 및 내신 대비 필수 영어 단어 60일 완성기",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Voca60"
  }
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        {/* 로그인/인증 경로를 제외하고 애드센스 스크립트 로드 */}
        <AdSenseScript />
        {/* 앱 전체에 화면 꺼짐 방지 기능 적용 */}
        <WakeLock />
        {children}
      </body>
    </html>
  );
}

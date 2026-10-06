import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
// 방금 만든 WakeLock 컴포넌트 불러오기 (경로에 맞게 수정: ../components/WakeLock)
import WakeLock from "../components/WakeLock";

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
        
        {/* 구글 애드센스 기본 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4424569297437395"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {/* 앱 전체에 화면 꺼짐 방지 기능 적용 */}
        <WakeLock />
        {children}
      </body>
    </html>
  );
}

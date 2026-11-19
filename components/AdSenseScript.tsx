"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT_ID = "ca-pub-4424569297437395";

// 광고를 띄우지 않을 경로 목록
const EXCLUDED_PATHS = ["/login", "/auth", "/callback", "/settings"];

export default function AdSenseScript() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some((path) => pathname?.startsWith(path));
  if (isExcluded) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

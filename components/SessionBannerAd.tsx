"use client";

import React, { useEffect } from 'react';

export default function SessionBannerAd() {
  useEffect(() => {
    // 광고 단위가 렌더링될 때 adsbygoogle 객체를 통해 광고를 밀어넣습니다(push)
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div style={adStyles.container}>
      {/* 구글 애드센스 디스플레이/배너 광고 태그 */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '320px', height: '50px' }}
        data-ad-client="ca-pub-4424569297437395" 
        data-ad-slot="8537989581"
      />
    </div>
  );
}

const adStyles = {
  container: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50px',
    backgroundColor: '#030712', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    borderTop: '1px solid #1e293b',
  }
};

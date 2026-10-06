import React from 'react';

export default function SessionBannerAd() {
  return (
    <div style={adStyles.container}>
      {/* 구글 애드센스 배너가 들어갈 자리입니다. */}
      {/* 추후 애드센스 승인 후 발급받는 <ins> 태그와 스크립트를 여기에 넣게 됩니다. */}
      <div style={adStyles.placeholder}>
        <span style={adStyles.text}>AD (광고 영역)</span>
      </div>
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
    backgroundColor: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    borderTop: '1px solid #ddd',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
  text: {
    fontSize: '12px',
    color: '#888',
    fontWeight: 'bold' as const,
  },
};
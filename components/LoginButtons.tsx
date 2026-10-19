"use client";

import { createClient } from '../utils/supabase/client';

export default function LoginButtons() {
  const supabase = createClient();

  const handleLogin = async (provider: 'google' | 'kakao') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        // 방금 2단계에서 만든 인증 라우트로 돌아오도록 설정
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("로그인 에러:", error.message);
      alert("로그인 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mt-8">
      <button 
        onClick={() => handleLogin('google')}
        className="flex items-center justify-center w-full bg-white text-gray-800 border border-gray-300 py-3.5 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-colors"
      >
        Google 계정으로 시작하기
      </button>
      
      <button 
        onClick={() => handleLogin('kakao')}
        className="flex items-center justify-center w-full bg-[#FEE500] text-[#000000] py-3.5 rounded-xl font-bold shadow-sm hover:bg-[#e6cf00] transition-colors"
      >
        카카오톡으로 시작하기
      </button>
    </div>
  );
}

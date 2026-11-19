import Link from "next/link";

const SAMPLE_WORDS = [
  { word: "abandon", meaning: "버리다, 포기하다", example: "Never abandon your dream even when it gets tough." },
  { word: "abstract", meaning: "추상적인, 개요", example: "The concept was too abstract for beginners to grasp." },
  { word: "accommodate", meaning: "수용하다, 편의를 도모하다", example: "The hall can accommodate up to 500 students." },
  { word: "accumulate", meaning: "축적하다, 모으다", example: "Daily practice helps you accumulate essential vocabulary." },
  { word: "adequate", meaning: "적절한, 충분한", example: "Make sure you get adequate sleep before the exam." },
  { word: "advocate", meaning: "지지하다, 옹호자", example: "Many educators advocate active recall over rote memorization." },
];

export default function LandingContent() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-16 pt-12 border-t border-slate-800 space-y-12 text-slate-200 text-left">
      {/* 서비스 소개 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">
          Voca60 — 수능·내신 필수 영단어 60일 완성
        </h2>
        <p className="text-sm leading-relaxed text-slate-400">
          Voca60은 중·고등학생의 내신과 대학수학능력시험(수능) 대비를 위해 엄선된 핵심 영단어 2,000개를
          60일 커리큘럼으로 체계적으로 암기할 수 있는 웹 단어장입니다. 단순 눈으로만 보는 암기에서 벗어나,
          영단어를 보고 뜻을 직접 입력하거나 뜻을 보고 영단어 철자를 직접 써보는 능동적 회상(Active Recall) 학습을 지원합니다.
        </p>
      </section>

      {/* 샘플 단어 미리보기 */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-indigo-300">수능 필수 영단어 미리보기</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {SAMPLE_WORDS.map((item) => (
            <div
              key={item.word}
              className="p-4 border border-slate-800 rounded-2xl bg-slate-900/80 shadow-md"
            >
              <div className="font-bold text-base text-indigo-400">{item.word}</div>
              <div className="text-sm font-medium text-slate-100 mt-1">{item.meaning}</div>
              <p className="text-xs text-slate-400 mt-2 italic">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 효과적인 학습 가이드 */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-indigo-300">Voca60 100% 활용하는 3단계 학습법</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
          <li>
            <strong className="text-slate-200">1단계 (뜻 직접 쓰기):</strong> 영단어를 보고 우리말 뜻을 직접 입력하며 정확한 의미를 확인합니다.
          </li>
          <li>
            <strong className="text-slate-200">2단계 (스펠링 테스트):</strong> 한글 뜻을 보고 영단어 철자를 직접 타이핑하여 서술형 시험에 대비합니다.
          </li>
          <li>
            <strong className="text-slate-200">3단계 (오답 집중 복습):</strong> 테스트에서 틀린 단어는 오답 노트에 자동 저장되어 취약 어휘만 빠르게 반복할 수 있습니다.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-indigo-300">자주 묻는 질문 (FAQ)</h3>
        <div className="space-y-3 text-sm text-slate-400">
          <div>
            <p className="font-semibold text-slate-200">Q. 무료로 이용할 수 있나요?</p>
            <p className="mt-1">네, Voca60의 모든 필수 영단어 학습과 주관식 테스트, 오답 노트 기능은 무료로 제공됩니다.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-200">Q. 스마트폰 앱으로도 사용할 수 있나요?</p>
            <p className="mt-1">네, PWA(Progressive Web App)를 지원하여 모바일 브라우저에서 홈 화면에 추가하거나 안드로이드 앱으로 설치해 학습할 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* 필수 하단 푸터 */}
      <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-wrap gap-4 justify-between">
        <span>© {new Date().getFullYear()} Voca60. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-slate-300 hover:underline">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-slate-300 hover:underline">
            이용약관
          </Link>
        </div>
      </footer>
    </div>
  );
}

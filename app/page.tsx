"use client";

import React, { useState, useEffect } from "react";
import { INITIAL_WORDS, WordItem } from "@/data/sampleWords";

interface DayProgress {
  count: number;
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"study" | "test" | "wrong">("study");

  // 학습 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // Day별 학습 횟수 기록 (localStorage 연동)
  const [progressMap, setProgressMap] = useState<Record<number, DayProgress>>({});

  // 주관식 테스트 상태
  const [testMode, setTestMode] = useState<"wordToMeaning" | "meaningToWord" | null>(null);
  const [testIndex, setTestIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [testResult, setTestResult] = useState<"correct" | "incorrect" | null>(null);
  const [wrongWords, setWrongWords] = useState<WordItem[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);

  // 오답 복습 상태
  const [wrongIndex, setWrongIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("voca60_progress");
    if (saved) {
      try {
        setProgressMap(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveProgress = (day: number) => {
    const updated = {
      ...progressMap,
      [day]: { count: (progressMap[day]?.count || 0) + 1 },
    };
    setProgressMap(updated);
    localStorage.setItem("voca60_progress", JSON.stringify(updated));
  };

  const activeWordList = selectedDay 
    ? INITIAL_WORDS.filter((w) => w.day === selectedDay)
    : [];

  const currentWord = activeWordList[currentIndex];

  const playAudio = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    setCurrentIndex(0);
    setActiveTab("study");
    setWrongWords([]);
    setTestCompleted(false);
    setTestMode(null);
    setUserInput("");
    setTestResult(null);
  };

  const handleTabChange = (tab: "study" | "test" | "wrong") => {
    setActiveTab(tab);
    if (tab === "test") {
      setTestMode(null); // 테스트 탭 누르면 모드 선택 화면으로 진입
      setTestIndex(0);
      setUserInput("");
      setTestResult(null);
      setTestCompleted(false);
    } else if (tab === "wrong") {
      setWrongIndex(0);
    }
  };

  // 주관식 정답 제출 체크
  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || testResult !== null || !testMode) return;

    const currentTestWord = activeWordList[testIndex];
    let isCorrect = false;
    const cleanInput = userInput.trim().toLowerCase();

    if (testMode === "wordToMeaning") {
      const targetMeaning = currentTestWord.meaning.toLowerCase();
      isCorrect = targetMeaning.includes(cleanInput) || cleanInput.includes(targetMeaning.replace(/^[a-z]\.\s*/, ""));
    } else {
      const targetWord = currentTestWord.word.toLowerCase();
      isCorrect = cleanInput === targetWord;
    }

    if (isCorrect) {
      setTestResult("correct");
    } else {
      setTestResult("incorrect");
      setWrongWords((prev) => {
        if (!prev.some((w) => w.word === currentTestWord.word)) {
          return [...prev, currentTestWord];
        }
        return prev;
      });
    }

    setTimeout(() => {
      if (testIndex < activeWordList.length - 1) {
        setTestIndex((prev) => prev + 1);
        setUserInput("");
        setTestResult(null);
      } else {
        setTestCompleted(true);
        if (selectedDay) {
          saveProgress(selectedDay);
        }
      }
    }, 1200);
  };

  const getDayButtonStyle = (count: number) => {
    if (!count || count === 0) {
      return "bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-300";
    } else if (count === 1) {
      return "bg-amber-500/20 hover:bg-amber-500/30 border-amber-500/60 text-amber-200 shadow-amber-500/10";
    } else if (count === 2) {
      return "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-500/60 text-emerald-200 shadow-emerald-500/10";
    } else {
      return "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-500/60 text-indigo-200 shadow-indigo-500/10";
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 sm:p-6">
      {/* 상단 타이틀 및 네비게이션 */}
      <header className="w-full max-w-md flex items-center justify-between mb-6 pt-2">
        <div>
          <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Voca60 수능 마스터
          </h1>
          <p className="text-xs text-slate-400">60일 완성 필수 영단어 프로젝트</p>
        </div>
        {selectedDay !== null && (
          <button
            onClick={() => setSelectedDay(null)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition flex items-center gap-1"
          >
            <span>📁</span> Day 목록으로
          </button>
        )}
      </header>

      {/* 1. Day 목록 대시보드 */}
      {selectedDay === null ? (
        <div className="w-full max-w-md space-y-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-indigo-300 flex items-center gap-1.5">
                <span>🗓</span> 60일 학습 커리큘럼 선택
              </h2>
              <span className="text-[10px] text-slate-400">
                🟡 1회 | 🟢 2회 | 🔵 3회 이상 완료
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 max-h-[65vh] overflow-y-auto pr-1">
              {Array.from({ length: 60 }, (_, i) => i + 1).map((day) => {
                const count = progressMap[day]?.count || 0;
                const totalWords = INITIAL_WORDS.filter((w) => w.day === day).length;
                const buttonStyle = getDayButtonStyle(count);

                return (
                  <button
                    key={day}
                    onClick={() => handleSelectDay(day)}
                    className={`flex flex-col items-center justify-center py-3 border rounded-xl transition group shadow-sm relative ${buttonStyle}`}
                  >
                    <span className="text-xs font-bold group-hover:scale-105 transition">Day {day}</span>
                    <span className="text-[10px] opacity-70 mt-0.5">{totalWords}단어</span>
                    {count > 0 && (
                      <span className="absolute top-1 right-1.5 text-[9px] font-mono font-bold bg-slate-950/60 px-1 rounded">
                        {count}회
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* 2. Day 선택된 상태: 학습 / 테스트 / 오답 세션 */
        <div className="w-full max-w-md space-y-4">
          {/* 상단 탭 */}
          <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex items-center justify-between shadow-lg">
            <button
              onClick={() => handleTabChange("study")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === "study"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              📖 학습
            </button>
            <button
              onClick={() => handleTabChange("test")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === "test"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              ✍️ 테스트
            </button>
            <button
              onClick={() => handleTabChange("wrong")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === "wrong"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              🔄 오답 ({wrongWords.length})
            </button>
          </div>

          {/* 탭 1: 학습 세션 */}
          {activeTab === "study" && currentWord && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 px-2.5 py-1 rounded-full font-semibold">
                  Day {selectedDay} 학습
                </span>
                <span className="font-mono font-medium">
                  {currentIndex + 1} / {activeWordList.length}
                </span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                    <span className="text-xs font-bold text-amber-400">
                      {currentWord.pos || "word"}
                    </span>
                    <button
                      onClick={() => playAudio(currentWord.word)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 transition"
                      title="발음듣기"
                    >
                      🔊
                    </button>
                  </div>

                  <div className="text-center py-6">
                    <h2 className="text-3xl font-black tracking-tight text-white mb-1">
                      {currentWord.word}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">{currentWord.phonetic}</p>
                  </div>

                  <div className="bg-slate-950/50 border border-slate-800/60 rounded-2xl p-4 mt-2">
                    <p className="text-sm font-semibold text-slate-200 mb-1">
                      {currentWord.meaning}
                    </p>
                    {currentWord.tip && (
                      <p className="text-xs text-indigo-300/90 mt-2 bg-indigo-950/40 p-2 rounded-lg border border-indigo-900/30">
                        {currentWord.tip}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/50 space-y-1 text-xs">
                    <p className="italic text-slate-300">
                      {currentWord.exampleEn || currentWord.example}
                    </p>
                    <p className="text-slate-400">
                      {currentWord.exampleKo || currentWord.exampleTranslation}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 font-semibold text-xs transition"
                  >
                    이전
                  </button>
                  <button
                    onClick={() => {
                      if (currentIndex < activeWordList.length - 1) {
                        setCurrentIndex((prev) => prev + 1);
                      } else {
                        setActiveTab("test");
                      }
                    }}
                    className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs transition shadow-lg shadow-indigo-600/30"
                  >
                    {currentIndex === activeWordList.length - 1 ? "테스트로 이동 ➡️" : "다음"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 탭 2: 테스트 세션 */}
          {activeTab === "test" && (
            <div className="space-y-4">
              {/* 테스트 모드가 아직 선택되지 않았다면: 모드 선택 화면 표시 */}
              {testMode === null ? (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 text-center">
                  <div className="py-2">
                    <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-3 py-1 rounded-full text-xs font-semibold">
                      Day {selectedDay} 테스트 모드 선택
                    </span>
                    <h2 className="text-lg font-extrabold text-white mt-3">원하시는 테스트 방식을 골라주세요</h2>
                    <p className="text-xs text-slate-400 mt-1">학습한 단어들을 두 가지 방식으로 점검할 수 있습니다.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <button
                      onClick={() => {
                        setTestMode("wordToMeaning");
                        setTestIndex(0);
                        setUserInput("");
                        setTestResult(null);
                        setTestCompleted(false);
                      }}
                      className="p-4 rounded-2xl bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 transition text-left group flex items-center justify-between shadow-md"
                    >
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-white flex items-center gap-1.5">
                          <span>✍️</span> 단어 → 뜻 쓰기 테스트
                        </div>
                        <p className="text-xs text-slate-400 group-hover:text-indigo-200 mt-0.5">
                          영단어를 보고 우리말 뜻을 직접 적어봅니다.
                        </p>
                      </div>
                      <span className="text-indigo-400 group-hover:text-white font-bold">→</span>
                    </button>

                    <button
                      onClick={() => {
                        setTestMode("meaningToWord");
                        setTestIndex(0);
                        setUserInput("");
                        setTestResult(null);
                        setTestCompleted(false);
                      }}
                      className="p-4 rounded-2xl bg-slate-800 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 transition text-left group flex items-center justify-between shadow-md"
                    >
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-white flex items-center gap-1.5">
                          <span>🔤</span> 뜻 → 영어 쓰기 테스트
                        </div>
                        <p className="text-xs text-slate-400 group-hover:text-purple-200 mt-0.5">
                          우리말 뜻을 보고 영단어를 직접 스펠링대로 적어봅니다.
                        </p>
                      </div>
                      <span className="text-purple-400 group-hover:text-white font-bold">→</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* 테스트 모드가 선택된 경우: 실제 주관식 퀴즈 화면 */
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-2.5 py-1 rounded-full font-semibold">
                        {testMode === "wordToMeaning" ? "✍️ 단어→뜻 테스트" : "🔤 뜻→영어 테스트"}
                      </span>
                      <button
                        onClick={() => setTestMode(null)}
                        className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded border border-slate-700 text-slate-300"
                      >
                        모드 변경
                      </button>
                    </div>
                    <span className="font-mono font-medium">
                      {!testCompleted ? `${testIndex + 1} / ${activeWordList.length}` : "완료"}
                    </span>
                  </div>

                  {!testCompleted ? (
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                      <div className="text-center py-8 bg-slate-950/40 rounded-2xl border border-slate-800/60">
                        <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">
                          {testMode === "wordToMeaning" ? "영어 단어 뜻 쓰기" : "뜻 보고 영어 단어 쓰기"}
                        </span>
                        <h2 className="text-3xl font-black text-white mt-2">
                          {testMode === "wordToMeaning" ? activeWordList[testIndex].word : activeWordList[testIndex].meaning}
                        </h2>
                        {testMode === "wordToMeaning" && (
                          <p className="text-xs text-slate-500 font-mono mt-1">{activeWordList[testIndex].phonetic}</p>
                        )}
                      </div>

                      <form onSubmit={handleTestSubmit} className="space-y-4">
                        <input
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder={testMode === "wordToMeaning" ? "뜻을 입력하세요 (예: 이해하다)" : "영단어를 입력하세요"}
                          disabled={testResult !== null}
                          autoFocus
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                        />

                        {testResult !== null && (
                          <div className={`p-3 rounded-xl text-xs font-bold text-center animate-pulse ${
                            testResult === "correct" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                          }`}>
                            {testResult === "correct" ? "✅ 정답입니다!" : `❌ 오답! 정답: ${testMode === "wordToMeaning" ? activeWordList[testIndex].meaning : activeWordList[testIndex].word}`}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={testResult !== null || !userInput.trim()}
                          className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 font-bold text-xs transition shadow-lg shadow-indigo-600/30"
                        >
                          정답 제출
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-center space-y-6">
                      <div className="w-16 h-16 bg-indigo-600/20 border border-indigo-500/40 rounded-full flex items-center justify-center mx-auto text-2xl">
                        🎉
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-white mb-1">테스트 완료! (Day {selectedDay} 누적 반영됨)</h2>
                        <p className="text-xs text-slate-400">틀린 문제 개수</p>
                        <div className="text-3xl font-black text-rose-400 mt-2">
                          {wrongWords.length}개 <span className="text-sm font-normal text-slate-400">/ 총 {activeWordList.length}문항</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {wrongWords.length > 0 && (
                          <button
                            onClick={() => handleTabChange("wrong")}
                            className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold text-xs transition shadow-lg shadow-rose-600/30"
                          >
                            🔄 오답 노트 복습하기 ({wrongWords.length})
                          </button>
                        )}
                        <button
                          onClick={() => setTestMode(null)}
                          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs transition border border-slate-700"
                        >
                          다른 테스트 모드 선택하기
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 탭 3: 오답 복습 세션 */}
          {activeTab === "wrong" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="bg-rose-950/80 text-rose-300 border border-rose-800/60 px-2.5 py-1 rounded-full font-semibold">
                  오답 노트 복습
                </span>
                <span className="font-mono font-medium">
                  {wrongWords.length > 0 ? `${wrongIndex + 1} / ${wrongWords.length}` : "0 / 0"}
                </span>
              </div>

              {wrongWords.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
                  <div className="text-3xl">🎉</div>
                  <h3 className="text-lg font-bold text-white">틀린 단어가 없습니다!</h3>
                  <p className="text-xs text-slate-400">테스트에서 틀린 단어가 여기에 자동으로 기록됩니다.</p>
                  <button
                    onClick={() => handleTabChange("study")}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs transition"
                  >
                    학습 화면으로 돌아가기
                  </button>
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative min-h-[350px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                      <span className="text-xs font-bold text-rose-400">
                        {wrongWords[wrongIndex]?.pos || "word"}
                      </span>
                      <button
                        onClick={() => playAudio(wrongWords[wrongIndex]?.word)}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 transition"
                      >
                        🔊
                      </button>
                    </div>

                    <div className="text-center py-6">
                      <h2 className="text-3xl font-black tracking-tight text-white mb-1">
                        {wrongWords[wrongIndex]?.word}
                      </h2>
                      <p className="text-xs text-slate-400 font-mono">{wrongWords[wrongIndex]?.phonetic}</p>
                    </div>

                    <div className="bg-slate-950/50 border border-slate-800/60 rounded-2xl p-4 mt-2">
                      <p className="text-sm font-semibold text-slate-200">
                        {wrongWords[wrongIndex]?.meaning}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6">
                    <button
                      onClick={() => setWrongIndex((prev) => Math.max(0, prev - 1))}
                      disabled={wrongIndex === 0}
                      className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 font-semibold text-xs transition"
                    >
                      이전
                    </button>
                    <button
                      onClick={() => {
                        if (wrongIndex < wrongWords.length - 1) {
                          setWrongIndex((prev) => prev + 1);
                        } else {
                          handleTabChange("study");
                        }
                      }}
                      className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold text-xs transition shadow-lg shadow-rose-600/30"
                    >
                      {wrongIndex === wrongWords.length - 1 ? "복습 완료 🏁" : "다음"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </main>
  );
}

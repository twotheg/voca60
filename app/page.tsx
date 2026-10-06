"use client";

import React, { useState } from "react";
import { INITIAL_WORDS, WordItem } from "@/data/sampleWords";

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"study" | "test" | "wrong">("study");

  // 학습 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 테스트 상태
  const [testIndex, setTestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [wrongWords, setWrongWords] = useState<WordItem[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // 오답 복습 상태
  const [wrongIndex, setWrongIndex] = useState(0);

  // 현재 선택된 Day의 단어 목록
  const activeWordList = selectedDay 
    ? INITIAL_WORDS.filter((w) => w.day === selectedDay)
    : [];

  const currentWord = activeWordList[currentIndex];

  // 음성 재생 함수
  const playAudio = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // Day 선택 시 학습 시작
  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    setCurrentIndex(0);
    setActiveTab("study");
    setWrongWords([]);
    setTestCompleted(false);
    setTestIndex(0);
  };

  // 탭 전환 시 초기화 작업
  const handleTabChange = (tab: "study" | "test" | "wrong") => {
    setActiveTab(tab);
    if (tab === "test") {
      setTestIndex(0);
      setSelectedAnswer(null);
      setIsCorrectAnswer(null);
      setTestCompleted(false);
      generateOptions(0, activeWordList);
    } else if (tab === "wrong") {
      setWrongIndex(0);
    }
  };

  // 4지선다 보기 생성
  const generateOptions = (tIdx: number, targetList: WordItem[]) => {
    const targetWord = targetList[tIdx];
    if (!targetWord) return;

    const otherWords = INITIAL_WORDS.filter((w) => w.word !== targetWord.word);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [targetWord.meaning, ...shuffledOthers.map((w) => w.meaning)];
    setShuffledOptions(options.sort(() => 0.5 - Math.random()));
    setSelectedAnswer(null);
    setIsCorrectAnswer(null);
  };

  // 테스트 정답 선택
  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);

    const currentTestWord = activeWordList[testIndex];
    const isCorrect = option === currentTestWord.meaning;
    setIsCorrectAnswer(isCorrect);

    if (!isCorrect) {
      // 틀린 단어 목록에 추가 (중복 방지)
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
        generateOptions(testIndex + 1, activeWordList);
      } else {
        setTestCompleted(true);
      }
    }, 1000);
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

      {/* 1. Day가 선택되지 않았을 때: 60일 목록 대시보드 */}
      {selectedDay === null ? (
        <div className="w-full max-w-md space-y-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <h2 className="text-sm font-semibold text-indigo-300 mb-3 flex items-center gap-1.5">
              <span>🗓️️</span> 60일 학습 커리큘럼 선택
            </h2>
            <div className="grid grid-cols-5 gap-2 max-h-[65vh] overflow-y-auto pr-1">
              {Array.from({ length: 60 }, (_, i) => i + 1).map((day) => {
                const count = INITIAL_WORDS.filter((w) => w.day === day).length;
                return (
                  <button
                    key={day}
                    onClick={() => handleSelectDay(day)}
                    className="flex flex-col items-center justify-center py-3 bg-slate-800/80 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 rounded-xl transition group shadow-sm"
                  >
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">Day {day}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-indigo-200 mt-0.5">{count}단어</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* 2. Day가 선택되었을 때: 상단 3개 세션 탭 (학습 / 테스트 / 오답) */
        <div className="w-full max-w-md space-y-4">
          {/* 3개 세션 탭 네비게이션 */}
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
              ❓ 테스트
            </button>
            <button
              onClick={() => handleTabChange("wrong")}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition relative ${
                activeTab === "wrong"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              🔄 오답 ({wrongWords.length})
            </button>
          </div>

          {/* 탭 1: 학습(Study) 세션 */}
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
                        handleTabChange("test"); // 마지막 단어에서 다음 누르면 테스트로 이동
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

          {/* 탭 2: 테스트(Test) 세션 */}
          {activeTab === "test" && activeWordList[testIndex] && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-2.5 py-1 rounded-full font-semibold">
                  Day {selectedDay} 테스트
                </span>
                <span className="font-mono font-medium">
                  {!testCompleted ? `${testIndex + 1} / ${activeWordList.length}` : "완료"}
                </span>
              </div>

              {!testCompleted ? (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                  <div className="text-center py-6 bg-slate-950/40 rounded-2xl border border-slate-800/60">
                    <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Meaning Check</span>
                    <h2 className="text-3xl font-black text-white mt-1">
                      {activeWordList[testIndex].word}
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {shuffledOptions.map((option, idx) => {
                      const isSelected = selectedAnswer === option;
                      const isCorrect = option === activeWordList[testIndex].meaning;

                      let btnStyle = "bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200";
                      if (selectedAnswer !== null) {
                        if (isCorrect) btnStyle = "bg-emerald-600/90 border-emerald-500 text-white font-bold";
                        else if (isSelected) btnStyle = "bg-rose-600/90 border-rose-500 text-white font-bold";
                        else btnStyle = "bg-slate-800/40 border-slate-800 text-slate-500 opacity-50";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option)}
                          disabled={selectedAnswer !== null}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {selectedAnswer !== null && isCorrect && <span>✅</span>}
                          {selectedAnswer !== null && isSelected && !isCorrect && <span>❌</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-center space-y-6">
                  <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/40 rounded-full flex items-center justify-center mx-auto text-2xl">
                    🎯
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white mb-1">테스트 완료!</h2>
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
                      onClick={() => handleTabChange("test")}
                      className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs transition border border-slate-700"
                    >
                      테스트 다시 풀기
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 탭 3: 오답(Wrong) 복습 세션 */}
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
                      className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 font-semibold text-xs transition shadow-lg shadow-rose-600/30"
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

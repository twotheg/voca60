"use client";

import React, { useState, useEffect } from "react";
import { INITIAL_WORDS, WordItem } from "@/data/sampleWords";

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<"list" | "study" | "clear" | "test">("list");
  
  // 학습 관련 상태
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // 테스트 관련 상태
  const [testIndex, setTestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [testScore, setTestScore] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

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
    setIsFlipped(false);
    setCurrentView("study");
  };

  // 다음 단어로 이동
  const handleNext = () => {
    if (currentIndex < activeWordList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      // 마지막 단어 도달 시 Clear 화면으로 이동
      setCurrentView("clear");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  // 테스트 시작 설정
  const startTest = () => {
    setTestIndex(0);
    setTestScore(0);
    setIsTestFinished(false);
    generateOptions(0);
    setCurrentView("test");
  };

  // 보기 4개 생성 (정답 1개 + 오답 3개)
  const generateOptions = (tIndex: number) => {
    const currentTestWord = activeWordList[tIndex];
    if (!currentTestWord) return;

    const otherWords = INITIAL_WORDS.filter((w) => w.word !== currentTestWord.word);
    const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [currentTestWord.meaning, ...shuffledOthers.map((w) => w.meaning)];
    setShuffledOptions(options.sort(() => 0.5 - Math.random()));
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer !== null) return; // 이미 선택했으면 리턴
    setSelectedAnswer(option);

    const currentTestWord = activeWordList[testIndex];
    const isCorrect = option === currentTestWord.meaning;
    if (isCorrect) {
      setTestScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (testIndex < activeWordList.length - 1) {
        setTestIndex(prev => prev + 1);
        generateOptions(testIndex + 1);
      } else {
        setIsTestFinished(true);
      }
    }, 1200);
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
        {currentView !== "list" && (
          <button
            onClick={() => setCurrentView("list")}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
          >
            📚 Day 목록으로
          </button>
        )}
      </header>

      {/* 1. Day 목록 뷰 (60일 커리큘럼 대시보드) */}
      {currentView === "list" && (
        <div className="w-full max-w-md space-y-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <h2 className="text-sm font-semibold text-indigo-300 mb-3 flex items-center gap-1.5">
              <span>🗓️</span> 60일 학습 커리큘럼 선택
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
      )}

      {/* 2. 학습(Study) 뷰 */}
      {currentView === "study" && currentWord && (
        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 px-2.5 py-1 rounded-full font-semibold">
              Day {selectedDay} 학습 중
            </span>
            <span className="font-mono font-medium">
              {currentIndex + 1} / {activeWordList.length}
            </span>
          </div>

          {/* 단어 카드 */}
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

            {/* 하단 이전/다음 버튼 */}
            <div className="flex gap-3 pt-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 font-semibold text-xs transition"
              >
                이전
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs transition shadow-lg shadow-indigo-600/30"
              >
                {currentIndex === activeWordList.length - 1 ? "학습 완료 🎉" : "다음"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Day Clear 뷰 */}
      {currentView === "clear" && (
        <div className="w-full max-w-md text-center py-10 px-4 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl space-y-6">
          <div className="w-20 h-20 bg-indigo-600/20 border border-indigo-500/40 rounded-full flex items-center justify-center mx-auto text-3xl">
            🏆
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">Day {selectedDay} Clear!</h2>
            <p className="text-xs text-slate-400">
              오늘 학습한 단어들을 완벽히 내 것으로 만들 차례입니다. 실력 점검 테스트를 시작해 보세요!
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <button
              onClick={startTest}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm transition shadow-lg shadow-indigo-600/30"
            >
              📝 단어 테스트 시작하기
            </button>
            <button
              onClick={() => setCurrentView("list")}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-slate-300 transition border border-slate-700"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      )}

      {/* 4. 테스트(Test) 뷰 */}
      {currentView === "test" && activeWordList[testIndex] && (
        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-2.5 py-1 rounded-full font-semibold">
              Day {selectedDay} 테스트
            </span>
            <span className="font-mono font-medium">
              {testIndex + 1} / {activeWordList.length}
            </span>
          </div>

          {!isTestFinished ? (
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
                <p className="text-xs text-slate-400">총 {activeWordList.length}문항 중 정답 개수</p>
                <div className="text-3xl font-black text-indigo-400 mt-2">
                  {testScore}점 <span className="text-sm font-normal text-slate-400">/ {activeWordList.length}문항</span>
                </div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={startTest}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs transition border border-slate-700"
                >
                  🔄 테스트 다시 풀기
                </button>
                <button
                  onClick={() => setCurrentView("list")}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs transition shadow-lg shadow-indigo-600/30"
                >
                  📚 Day 목록으로 돌아가기
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

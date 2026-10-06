"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, HelpCircle, RotateCcw, Volume2, Check, X, Eye, ChevronRight, ChevronLeft, Flame, Award } from "lucide-react";
import { INITIAL_WORDS, WordItem } from "@/data/sampleWords";
import PushNotificationManager from "@/components/PushNotificationManager";

type Mode = "study" | "test" | "review";
type TestType = "hide_meaning" | "hide_word";

export default function VocaApp() {
  const [mode, setMode] = useState<Mode>("study");
  const [testType, setTestType] = useState<TestType>("hide_meaning");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const [wrongWordIds, setWrongWordIds] = useState<number[]>([]);
  const [masteredWordIds, setMasteredWordIds] = useState<number[]>([]);
  const [streakDays, setStreakDays] = useState(1);

  useEffect(() => {
    const savedWrong = localStorage.getItem("voca60_wrong_words");
    const savedMaster = localStorage.getItem("voca60_master_words");
    if (savedWrong) setWrongWordIds(JSON.parse(savedWrong));
    if (savedMaster) setMasteredWordIds(JSON.parse(savedMaster));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(reg => console.log("SW Registered", reg.scope))
        .catch(err => console.error("SW Error", err));
    }
  }, []);

  const saveWrongWords = (ids: number[]) => {
    setWrongWordIds(ids);
    localStorage.setItem("voca60_wrong_words", JSON.stringify(ids));
  };
  const saveMasterWords = (ids: number[]) => {
    setMasteredWordIds(ids);
    localStorage.setItem("voca60_master_words", JSON.stringify(ids));
  };

  const playAudio = (text: string, lang = "en-US") => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const activeWordList = mode === "review" ? INITIAL_WORDS.filter(w => wrongWordIds.includes(w.id)) : INITIAL_WORDS;
  const currentWord: WordItem | undefined = activeWordList[currentIndex];

  const handleNext = () => {
    setIsRevealed(false);
    if (currentIndex < activeWordList.length - 1) setCurrentIndex(prev => prev + 1);
    else { alert("끝!"); setCurrentIndex(0); }
  };
  const handlePrev = () => {
    setIsRevealed(false);
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!currentWord) return;
    if (!isCorrect) {
      if (!wrongWordIds.includes(currentWord.id)) saveWrongWords([...wrongWordIds, currentWord.id]);
      saveMasterWords(masteredWordIds.filter(id => id !== currentWord.id));
    } else {
      if (mode === "review") saveWrongWords(wrongWordIds.filter(id => id !== currentWord.id));
      if (!masteredWordIds.includes(currentWord.id)) saveMasterWords([...masteredWordIds, currentWord.id]);
    }
    handleNext();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-4">
      <header className="w-full max-w-md flex items-center justify-between py-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">60</div>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Voca60</span>
        </div>
        <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
          <Flame className="w-4 h-4 fill-amber-400" />
          <span>{streakDays}일 연속 완료</span>
        </div>
      </header>

      <PushNotificationManager />

      <nav className="w-full max-w-md grid grid-cols-3 gap-1 bg-slate-800/70 p-1.5 rounded-2xl mt-4 border border-slate-700/60">
        <button onClick={() => { setMode("study"); setCurrentIndex(0); setIsRevealed(false); }} className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === "study" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30" : "text-slate-400 hover:text-white"}`}><BookOpen className="w-4 h-4" /><span>학습</span></button>
        <button onClick={() => { setMode("test"); setCurrentIndex(0); setIsRevealed(false); }} className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === "test" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30" : "text-slate-400 hover:text-white"}`}><HelpCircle className="w-4 h-4" /><span>테스트</span></button>
        <button onClick={() => { setMode("review"); setCurrentIndex(0); setIsRevealed(false); }} className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${mode === "review" ? "bg-rose-600 text-white shadow-md shadow-rose-600/30" : "text-slate-400 hover:text-white"}`}><RotateCcw className="w-4 h-4" /><span>오답 ({wrongWordIds.length})</span></button>
      </nav>

      <main className="w-full max-w-md flex-1 flex flex-col justify-center my-6">
        {activeWordList.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center">
            <Award className="w-16 h-16 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">복습할 오답 단어가 없습니다!</h3>
            <button onClick={() => setMode("study")} className="px-6 py-2.5 bg-indigo-600 rounded-xl font-bold text-sm text-white mt-4">학습 화면으로 돌아가기</button>
          </div>
        ) : currentWord ? (
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur relative flex flex-col justify-between min-h-[460px]">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
              <span className="text-xs font-bold text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-0.5 rounded-md">Day {currentWord.day} · {currentWord.sourceTag}</span>
              <span className="text-xs text-slate-400 font-mono">{currentIndex + 1} / {activeWordList.length}</span>
            </div>

            {mode === "test" && (
              <div className="flex justify-center my-2">
                <div className="inline-flex bg-slate-900/90 p-1 rounded-xl border border-slate-700 text-xs">
                  <button onClick={() => { setTestType("hide_meaning"); setIsRevealed(false); }} className={`px-3 py-1 rounded-lg font-medium transition ${testType === "hide_meaning" ? "bg-indigo-600 text-white" : "text-slate-400"}`}>뜻 가리기</button>
                  <button onClick={() => { setTestType("hide_word"); setIsRevealed(false); }} className={`px-3 py-1 rounded-lg font-medium transition ${testType === "hide_word" ? "bg-indigo-600 text-white" : "text-slate-400"}`}>단어 가리기</button>
                </div>
              </div>
            )}

            <div className="my-auto py-4 text-center">
              {mode === "test" && testType === "hide_word" && !isRevealed ? (
                <div className="text-2xl font-black text-slate-500 tracking-wider font-mono">[ {currentWord.word[0]} _ _ _ _ _ ]</div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <h2 className="text-3xl font-black tracking-tight text-white">{currentWord.word}</h2>
                  <button onClick={() => playAudio(currentWord.word)} className="p-2 text-indigo-400 hover:text-white hover:bg-indigo-600/30 rounded-full transition"><Volume2 className="w-5 h-5" /></button>
                </div>
              )}
              <p className="text-slate-400 text-xs mt-1 font-serif">{currentWord.phonetic}</p>

              <div className="mt-6 pt-5 border-t border-slate-700/60 text-left">
                {mode === "test" && testType === "hide_meaning" && !isRevealed ? (
                  <button onClick={() => setIsRevealed(true)} className="w-full py-8 bg-slate-900/60 border border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition group">
                    <Eye className="w-5 h-5 mb-1 group-hover:scale-110 transition" />
                    <span className="text-xs font-semibold">탭하여 뜻 확인하기</span>
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <span className="inline-block text-xs font-bold text-amber-400 mr-2">{currentWord.pos}</span>
                      <span className="text-base font-semibold text-slate-100">{currentWord.meaningPrimary}</span>
                    </div>
                    {currentWord.meaningSecondary && <p className="text-xs text-indigo-300 font-medium bg-indigo-950/40 p-2 rounded-lg">💡 {currentWord.meaningSecondary}</p>}
                    <div className="pt-2 text-xs leading-relaxed text-slate-300">
                      <p className="italic text-slate-200">"{currentWord.exampleEn}"</p>
                      <p className="text-slate-400 mt-1">{currentWord.exampleKo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60">
              {mode === "study" ? (
                <div className="flex items-center justify-between">
                  <button onClick={handlePrev} disabled={currentIndex === 0} className="p-3 rounded-xl bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-600 transition"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => playAudio(currentWord.exampleEn)} className="text-xs font-semibold text-slate-400 hover:text-white flex items-center space-x-1"><Volume2 className="w-4 h-4" /><span>예문 듣기</span></button>
                  <button onClick={handleNext} className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition"><ChevronRight className="w-5 h-5" /></button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => handleAnswer(false)} className="flex items-center justify-center space-x-2 py-3 bg-rose-600/20 text-rose-300 border border-rose-600/30 rounded-xl font-bold text-sm hover:bg-rose-600 transition"><X className="w-4 h-4" /><span>헷갈려요</span></button>
                  <button onClick={() => handleAnswer(true)} className="flex items-center justify-center space-x-2 py-3 bg-emerald-600/20 text-emerald-300 border border-emerald-600/30 rounded-xl font-bold text-sm hover:bg-emerald-600 transition"><Check className="w-4 h-4" /><span>알아요</span></button>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

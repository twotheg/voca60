export interface WordItem {
  id: number;
  day: number;
  word: string;
  phonetic: string;
  pos: string;
  meaningPrimary: string;
  meaningSecondary?: string;
  exampleEn: string;
  exampleKo: string;
  sourceTag: string;
}

export const INITIAL_WORDS: WordItem[] = [
  {
    id: 1, day: 1, word: "comprehend", phonetic: "/ˌkɑːmprɪˈhend/", pos: "v.",
    meaningPrimary: "이해하다, 파악하다", meaningSecondary: "포함하다, 포괄하다 (수능 빈출 2순위)",
    exampleEn: "The students could not comprehend the full implications of the theory.",
    exampleKo: "학생들은 그 이론의 완전한 함의를 제대로 이해하지 못했다.", sourceTag: "수능 기출"
  },
  {
    id: 2, day: 1, word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", pos: "adj.",
    meaningPrimary: "애매모호한, 두 가지 이상의 뜻으로 풀이되는", meaningSecondary: "분명하지 않은",
    exampleEn: "The ending of the novel was deliberately left ambiguous.",
    exampleKo: "그 소설의 결말은 의도적으로 모호하게 남겨졌다.", sourceTag: "평가원 모의"
  },
  {
    id: 3, day: 1, word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", pos: "adj.",
    meaningPrimary: "불가피한, 피할 수 없는", meaningSecondary: "필연적인",
    exampleEn: "Technological change is an inevitable part of modern life.",
    exampleKo: "기술의 변화는 현대 삶의 불가피한 일부이다.", sourceTag: "교육청 학평"
  },
  {
    id: 4, day: 1, word: "simultaneously", phonetic: "/ˌsaɪmlˈteɪniəsli/", pos: "adv.",
    meaningPrimary: "동시에, 일제히", meaningSecondary: "",
    exampleEn: "The two events happened almost simultaneously.",
    exampleKo: "두 사건은 거의 동시에 일어났다.", sourceTag: "교과서 공통"
  }
];
export interface WordItem {
  id: number;
  day: number;
  word: string;
  phonetic: string;
  meaning: string;
  tip?: string;
  example: string;
  exampleTranslation: string;
}

export const INITIAL_WORDS: WordItem[] = [
  {
    id: 1, day: 1, word: "comprehend", phonetic: "/ˌkɑːmprɪˈhend/", meaning: "v. 이해하다, 파악하다",
    tip: "💡 포함하다, 포괄하다 (수능 빈출 2순위)",
    example: "The students could not comprehend the full implications of the theory.",
    exampleTranslation: "학생들은 그 이론의 완전한 함의를 제대로 이해하지 못했다."
  },
  {
    id: 2, day: 1, word: "reluctant", phonetic: "/rɪˈlʌktənt/", meaning: "a. 꺼리는, 마지못해 하는",
    example: "She was reluctant to admit she was wrong.",
    exampleTranslation: "그녀는 자신이 틀렸다는 것을 인정하기를 꺼렸다."
  },
  {
    id: 3, day: 1, word: "vulnerable", phonetic: "/ˈvʌlnərəbl/", meaning: "a. 취약한, 연약한",
    tip: "💡 전치사 to와 함께 자주 쓰임 (vulnerable to ~에 취약한)",
    example: "Old people are particularly vulnerable to the flu.",
    exampleTranslation: "노인들은 특히 독감에 취약하다."
  },
  {
    id: 4, day: 1, word: "crucial", phonetic: "/ˈkruːʃl/", meaning: "a. 중대한, 결정적인",
    example: "Vitamins are crucial for maintaining good health.",
    exampleTranslation: "비타민은 건강을 유지하는 데 중대하다."
  },
  {
    id: 5, day: 1, word: "obscure", phonetic: "/əbˈskjʊr/", meaning: "a. 모호한, 무명의 / v. 모호하게 하다",
    example: "The origins of the tradition have become obscure over time.",
    exampleTranslation: "그 전통의 기원은 시간이 지나면서 모호해졌다."
  },
  {
    id: 6, day: 1, word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", meaning: "v. 줄어들다, 약해지다",
    example: "The world's natural resources are rapidly diminishing.",
    exampleTranslation: "세계의 천연자원이 빠르게 줄어들고 있다."
  },
  {
    id: 7, day: 1, word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "a. 풍부한, 많은",
    tip: "💡 명사형: abundance (풍부)",
    example: "The country has an abundant supply of fossil fuels.",
    exampleTranslation: "그 국가는 화석 연료 공급이 풍부하다."
  },
  {
    id: 8, day: 1, word: "integrate", phonetic: "/ˈɪntɪɡreɪt/", meaning: "v. 통합하다, 융합하다",
    example: "The new system will integrate with existing software.",
    exampleTranslation: "새 시스템은 기존 소프트웨어와 통합될 것이다."
  },
  {
    id: 9, day: 1, word: "prominent", phonetic: "/ˈprɑːmɪnənt/", meaning: "a. 저명한, 두드러진",
    example: "He played a prominent part in the campaign.",
    exampleTranslation: "그는 그 캠페인에서 두드러진 역할을 했다."
  },
  {
    id: 10, day: 1, word: "simultaneous", phonetic: "/ˌsaɪmlˈteɪniəs/", meaning: "a. 동시의, 일제히 일어나는",
    example: "There were several simultaneous attacks by the rebels.",
    exampleTranslation: "반군에 의한 몇 차례의 동시 공격이 있었다."
  },
  {
    id: 11, day: 1, word: "profound", phonetic: "/prəˈfaʊnd/", meaning: "a. 심오한, 깊은",
    example: "The discovery had a profound effect on modern medicine.",
    exampleTranslation: "그 발견은 현대 의학에 심오한 영향을 미쳤다."
  },
  {
    id: 12, day: 1, word: "derive", phonetic: "/dɪˈraɪv/", meaning: "v. 끌어내다, 유래하다",
    tip: "💡 derive A from B (B로부터 A를 끌어내다)",
    example: "Many words in English are derived from Latin.",
    exampleTranslation: "영어의 많은 단어들이 라틴어에서 유래했다."
  },
  {
    id: 13, day: 1, word: "deprive", phonetic: "/dɪˈpraɪv/", meaning: "v. 빼앗다, 박탈하다",
    tip: "💡 deprive A of B (A에게서 B를 빼앗다)",
    example: "They were deprived of a normal childhood by the war.",
    exampleTranslation: "그들은 전쟁으로 인해 평범한 어린 시절을 빼앗겼다."
  },
  {
    id: 14, day: 1, word: "foster", phonetic: "/ˈfɑːstər/", meaning: "v. 조성하다, 기르다",
    example: "The school aims to foster an interest in classical music.",
    exampleTranslation: "그 학교는 고전 음악에 대한 흥미를 기르는 것을 목표로 한다."
  },
  {
    id: 15, day: 1, word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "a. 불가피한, 필연적인",
    example: "It was inevitable that there would be job losses.",
    exampleTranslation: "일자리 감소는 불가피했다."
  },
  {
    id: 16, day: 1, word: "fascinate", phonetic: "/ˈfæsɪneɪt/", meaning: "v. 마음을 사로잡다, 매혹하다",
    example: "The children were fascinated by the toys in the window.",
    exampleTranslation: "아이들은 쇼윈도에 있는 장난감들에 마음을 사로잡혔다."
  },
  {
    id: 17, day: 1, word: "compensate", phonetic: "/ˈkɑːmpenseɪt/", meaning: "v. 보상하다, 보완하다",
    example: "Nothing can compensate for the loss of a loved one.",
    exampleTranslation: "그 무엇도 사랑하는 사람을 잃은 것을 보상할 수 없다."
  },
  {
    id: 18, day: 1, word: "vital", phonetic: "/ˈvaɪtl/", meaning: "a. 필수적인, 생명 유지와 관련된",
    example: "Reading is a vital skill for learning.",
    exampleTranslation: "읽기는 학습을 위한 필수적인 기술이다."
  },
  {
    id: 19, day: 1, word: "implement", phonetic: "/ˈɪmplɪment/", meaning: "v. 실행하다, 이행하다 / n. 도구",
    example: "The government failed to implement the new policy.",
    exampleTranslation: "정부는 새로운 정책을 실행하는 데 실패했다."
  },
  {
    id: 20, day: 1, word: "substitute", phonetic: "/ˈsʌbstɪtuːt/", meaning: "v. 대체하다 / n. 대리인, 대용품",
    tip: "💡 substitute A for B (B를 A로 대체하다)",
    example: "You can substitute oil for butter in this recipe.",
    exampleTranslation: "이 조리법에서는 버터 대신 기름을 대체하여 사용할 수 있다."
  },
{
    id: 21, day: 1, word: "evaluate", phonetic: "/ɪˈvæljueɪt/", meaning: "v. 평가하다",
    example: "It is important to evaluate the results of the experiment.",
    exampleTranslation: "실험 결과를 평가하는 것은 중요하다."
  },
  {
    id: 22, day: 1, word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", meaning: "v. 예상하다, 기대하다",
    example: "We anticipate that sales will rise next year.",
    exampleTranslation: "우리는 내년에 매출이 오를 것으로 예상한다."
  },
  {
    id: 23, day: 1, word: "distinguish", phonetic: "/dɪˈstɪŋɡwɪʃ/", meaning: "v. 구별하다, 식별하다",
    tip: "💡 distinguish A from B (A와 B를 구별하다)",
    example: "It is sometimes difficult to distinguish truth from fiction.",
    exampleTranslation: "때로는 진실과 허구를 구별하기 어렵다."
  },
  {
    id: 24, day: 1, word: "attribute", phonetic: "/əˈtrɪbjuːt/", meaning: "v. ~의 탓으로 돌리다 / n. 속성",
    tip: "💡 attribute A to B (A를 B의 탓/덕으로 돌리다)",
    example: "She attributes her success to hard work and a little luck.",
    exampleTranslation: "그녀는 자신의 성공을 노력과 약간의 운 덕분으로 돌린다."
  },
  {
    id: 25, day: 1, word: "perceive", phonetic: "/pərˈsiːv/", meaning: "v. 인지하다, 인식하다",
    example: "Dogs perceive high-frequency sounds that humans cannot hear.",
    exampleTranslation: "개는 인간이 들을 수 없는 고주파 소리를 인지한다."
  },
  {
    id: 26, day: 1, word: "sustain", phonetic: "/səˈsteɪn/", meaning: "v. 유지하다, 지탱하다",
    example: "The runner was unable to sustain his fast pace.",
    exampleTranslation: "그 달리기 선수는 빠른 속도를 유지할 수 없었다."
  },
  {
    id: 27, day: 1, word: "evolve", phonetic: "/ɪˈvɑːlv/", meaning: "v. 진화하다, 발달하다",
    example: "Languages evolve over time as cultures change.",
    exampleTranslation: "언어는 문화가 변함에 따라 시간이 지나면서 진화한다."
  },
  {
    id: 28, day: 1, word: "generate", phonetic: "/ˈdʒenəreɪt/", meaning: "v. 발생시키다, 만들어 내다",
    example: "Wind turbines generate electricity without producing pollution.",
    exampleTranslation: "풍력 터빈은 오염을 일으키지 않고 전기를 발생시킨다."
  },
  {
    id: 29, day: 1, word: "isolate", phonetic: "/ˈaɪsəleɪt/", meaning: "v. 고립시키다, 분리하다",
    example: "The infected patients were isolated to prevent the spread of the virus.",
    exampleTranslation: "바이러스 확산을 막기 위해 감염된 환자들은 격리되었다."
  },
  {
    id: 30, day: 1, word: "potential", phonetic: "/pəˈtenʃl/", meaning: "a. 잠재적인 / n. 잠재력",
    example: "The project has the potential to create thousands of jobs.",
    exampleTranslation: "그 프로젝트는 수천 개의 일자리를 창출할 잠재력이 있다."
  },
  {
    id: 31, day: 1, word: "adequate", phonetic: "/ˈædɪkwət/", meaning: "a. 적절한, 충분한",
    example: "Make sure you have an adequate supply of water for the hike.",
    exampleTranslation: "하이킹을 위해 충분한 물을 준비해 두어라."
  },
  {
    id: 32, day: 1, word: "intense", phonetic: "/ɪnˈtens/", meaning: "a. 극심한, 강렬한",
    example: "The athlete experienced intense pain in his knee.",
    exampleTranslation: "그 운동선수는 무릎에 극심한 통증을 느꼈다."
  },
  {
    id: 33, day: 1, word: "massive", phonetic: "/ˈmæsɪv/", meaning: "a. 거대한, 엄청난",
    example: "The explosion caused massive damage to the building.",
    exampleTranslation: "그 폭발은 건물에 거대한 피해를 입혔다."
  },
  {
    id: 34, day: 1, word: "abstract", phonetic: "/ˈæbstrækt/", meaning: "a. 추상적인 / n. 요약",
    example: "Truth and beauty are abstract concepts.",
    exampleTranslation: "진리와 아름다움은 추상적인 개념이다."
  },
  {
    id: 35, day: 2, word: "acknowledge", phonetic: "/əkˈnɑːlɪdʒ/", meaning: "v. 인정하다",
    example: "He refused to acknowledge his mistakes.",
    exampleTranslation: "그는 자신의 실수를 인정하기를 거부했다."
  },
  {
    id: 36, day: 2, word: "cognitive", phonetic: "/ˈkɑːɡnətɪv/", meaning: "a. 인지의, 인식의",
    example: "As children grow older, their cognitive abilities develop.",
    exampleTranslation: "아이들이 자라면서 인지 능력이 발달한다."
  },
  {
    id: 37, day: 2, word: "modify", phonetic: "/ˈmɑːdɪfaɪ/", meaning: "v. 수정하다, 변경하다",
    example: "We had to modify the original design to save costs.",
    exampleTranslation: "우리는 비용을 절감하기 위해 원래의 디자인을 수정해야 했다."
  },
  {
    id: 38, day: 2, word: "overcome", phonetic: "/ˌoʊvərˈkʌm/", meaning: "v. 극복하다",
    example: "With support from his family, he was able to overcome his addiction.",
    exampleTranslation: "가족의 지원 덕분에 그는 중독을 극복할 수 있었다."
  },
  {
    id: 39, day: 2, word: "hypothesis", phonetic: "/haɪˈpɑːθəsɪs/", meaning: "n. 가설",
    example: "The scientists conducted experiments to test their hypothesis.",
    exampleTranslation: "과학자들은 자신들의 가설을 검증하기 위해 실험을 수행했다."
  },
  {
    id: 40, day: 2, word: "phenomenon", phonetic: "/fəˈnɑːmɪnən/", meaning: "n. 현상 (복수형: phenomena)",
    example: "Gravity is a natural phenomenon that we experience every day.",
    exampleTranslation: "중력은 우리가 매일 경험하는 자연 현상이다."
  },
  {
    id: 41, day: 2, word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", meaning: "a. 근본적인, 핵심적인",
    example: "Freedom of speech is a fundamental human right.",
    exampleTranslation: "언론의 자유는 근본적인 인권이다."
  },
  {
    id: 42, day: 2, word: "complex", phonetic: "/kəmˈpleks/", meaning: "a. 복잡한 / n. 복합 건물, 콤플렉스",
    example: "The human brain is a highly complex organ.",
    exampleTranslation: "인간의 뇌는 고도로 복잡한 기관이다."
  },
  {
    id: 43, day: 2, word: "alternative", phonetic: "/ɔːlˈtɜːrnətɪv/", meaning: "n. 대안 / a. 대체의",
    example: "Solar power is a viable alternative to fossil fuels.",
    exampleTranslation: "태양열 에너지는 화석 연료의 실행 가능한 대안이다."
  },
  {
    id: 44, day: 2, word: "subjective", phonetic: "/səbˈdʒektɪv/", meaning: "a. 주관적인",
    example: "Art evaluation is highly subjective.",
    exampleTranslation: "예술 평가는 매우 주관적이다."
  },
  {
    id: 45, day: 2, word: "objective", phonetic: "/əbˈdʒektɪv/", meaning: "a. 객관적인 / n. 목표",
    example: "Scientists must remain objective when analyzing data.",
    exampleTranslation: "과학자들은 데이터를 분석할 때 객관성을 유지해야 한다."
  },
  {
    id: 46, day: 2, word: "temporary", phonetic: "/ˈtempəreri/", meaning: "a. 일시적인, 임시의",
    example: "These measures are only temporary and will be reviewed next month.",
    exampleTranslation: "이 조치들은 일시적일 뿐이며 다음 달에 재검토될 것이다."
  },
  {
    id: 47, day: 2, word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "a. 궁극적인, 최후의",
    example: "Our ultimate goal is to launch the app by the end of the year.",
    exampleTranslation: "우리의 궁극적인 목표는 연말까지 앱을 출시하는 것이다."
  },
  {
    id: 48, day: 2, word: "initial", phonetic: "/ɪˈnɪʃl/", meaning: "a. 처음의, 초기의",
    example: "My initial reaction was to refuse the offer.",
    exampleTranslation: "나의 초기 반응은 그 제안을 거절하는 것이었다."
  },
  {
    id: 49, day: 2, word: "appropriate", phonetic: "/əˈproʊpriət/", meaning: "a. 적절한, 알맞은",
    example: "Jeans are not appropriate for a formal wedding.",
    exampleTranslation: "청바지는 격식을 차린 결혼식에 적절하지 않다."
  },
  {
    id: 50, day: 2, word: "facilitate", phonetic: "/fəˈsɪlɪteɪt/", meaning: "v. 촉진하다, 용이하게 하다",
    example: "The new airport will facilitate the development of tourism.",
    exampleTranslation: "새 공항은 관광업의 발전을 촉진할 것이다."
  },
  {
    id: 51, day: 2, word: "regulate", phonetic: "/ˈreɡjuleɪt/", meaning: "v. 규제하다, 조절하다",
    example: "The government strictly regulates the sale of weapons.",
    exampleTranslation: "정부는 무기 판매를 엄격하게 규제한다."
  },
  {
    id: 52, day: 2, word: "constrain", phonetic: "/kənˈstreɪn/", meaning: "v. 강제하다, 억제하다",
    example: "Financial factors may constrain the company's growth.",
    exampleTranslation: "재정적 요인들이 회사의 성장을 억제할 수 있다."
  },
  {
    id: 53, day: 2, word: "trigger", phonetic: "/ˈtrɪɡər/", meaning: "v. 촉발하다, 유발하다 / n. 방아쇠",
    example: "Certain foods can trigger an allergic reaction.",
    exampleTranslation: "특정 음식은 알레르기 반응을 촉발할 수 있다."
  },
  {
    id: 54, day: 2, word: "consume", phonetic: "/kənˈsuːm/", meaning: "v. 소비하다, 소모하다",
    example: "These light bulbs consume less electricity.",
    exampleTranslation: "이 전구들은 전기를 덜 소비한다."
  },
  {
    id: 55, day: 2, word: "restrict", phonetic: "/rɪˈstrɪkt/", meaning: "v. 제한하다, 한정하다",
    example: "The school restricts access to certain websites.",
    exampleTranslation: "학교는 특정 웹사이트에 대한 접근을 제한한다."
  },
  {
    id: 56, day: 2, word: "expand", phonetic: "/ɪkˈspænd/", meaning: "v. 확장하다, 팽창하다",
    example: "Water expands when it freezes.",
    exampleTranslation: "물은 얼 때 팽창한다."
  },
  {
    id: 57, day: 2, word: "predict", phonetic: "/prɪˈdɪkt/", meaning: "v. 예측하다, 예견하다",
    example: "It is difficult to predict the weather accurately.",
    exampleTranslation: "날씨를 정확하게 예측하는 것은 어렵다."
  },
  {
    id: 58, day: 2, word: "demonstrate", phonetic: "/ˈdemənstreɪt/", meaning: "v. 증명하다, 보여주다",
    example: "The study demonstrates the link between stress and heart disease.",
    exampleTranslation: "그 연구는 스트레스와 심장병 사이의 연관성을 증명한다."
  },
  {
    id: 59, day: 2, word: "illustrate", phonetic: "/ˈɪləstreɪt/", meaning: "v. 설명하다, 삽화를 넣다",
    example: "Let me give you an example to illustrate my point.",
    exampleTranslation: "내 요점을 설명하기 위해 예를 하나 들어 보겠다."
  },
  {
    id: 60, day: 2, word: "imply", phonetic: "/ɪmˈplaɪ/", meaning: "v. 암시하다, 내포하다",
    example: "His silence seemed to imply agreement.",
    exampleTranslation: "그의 침묵은 동의를 암시하는 것 같았다."
  },
  {
    id: 61, day: 2, word: "infer", phonetic: "/ɪnˈfɜːr/", meaning: "v. 추론하다",
    example: "From the evidence, we can infer that the suspect was present.",
    exampleTranslation: "증거로부터 우리는 용의자가 현장에 있었다고 추론할 수 있다."
  },
  {
    id: 62, day: 2, word: "assess", phonetic: "/əˈses/", meaning: "v. 평가하다, 사정하다",
    example: "They sent an expert to assess the damage to the house.",
    exampleTranslation: "그들은 집의 피해를 평가하기 위해 전문가를 보냈다."
  },
  {
    id: 63, day: 2, word: "emphasize", phonetic: "/ˈemfəsaɪz/", meaning: "v. 강조하다",
    example: "The teacher emphasized the importance of regular practice.",
    exampleTranslation: "선생님은 규칙적인 연습의 중요성을 강조했다."
  },
  {
    id: 64, day: 2, word: "confirm", phonetic: "/kənˈfɜːrm/", meaning: "v. 확정하다, 확인하다",
    example: "Please write to confirm your reservation.",
    exampleTranslation: "예약을 확정하려면 서면으로 연락해 주십시오."
  },
  {
    id: 65, day: 2, word: "decline", phonetic: "/dɪˈklaɪn/", meaning: "v. 감소하다, 거절하다 / n. 쇠퇴",
    example: "The number of wild tigers has declined rapidly.",
    exampleTranslation: "야생 호랑이의 수가 급격히 감소했다."
  },
  {
    id: 66, day: 2, word: "flourish", phonetic: "/ˈflɜːrɪʃ/", meaning: "v. 번창하다, 잘 자라다",
    example: "Most plants will flourish in rich, well-drained soil.",
    exampleTranslation: "대부분의 식물은 배수가 잘되는 비옥한 토양에서 잘 자란다."
  },
  {
    id: 67, day: 2, word: "precise", phonetic: "/prɪˈsaɪs/", meaning: "a. 정확한, 정밀한",
    example: "We need precise measurements to build this machine.",
    exampleTranslation: "이 기계를 만들기 위해서는 정밀한 측정값이 필요하다."
  },
  {
    id: 68, day: 2, word: "explicit", phonetic: "/ɪkˈsplɪsɪt/", meaning: "a. 명백한, 뚜렷한",
    example: "She gave me explicit directions on how to get there.",
    exampleTranslation: "그녀는 그곳에 가는 방법에 대해 명백한 지시를 해주었다."
  },
{
    id: 69, day: 3, word: "emerge", phonetic: "/ɪˈmɜːrdʒ/", meaning: "v. 나타나다, 출현하다",
    example: "New evidence has emerged that contradicts his story.",
    exampleTranslation: "그의 이야기와 모순되는 새로운 증거가 나타났다."
  },
  {
    id: 70, day: 3, word: "margin", phonetic: "/ˈmɑːrdʒɪn/", meaning: "n. 여백, 차이, 마진(수익)",
    tip: "💡 by a narrow margin (간발의 차이로)",
    example: "He won the election by a narrow margin.",
    exampleTranslation: "그는 간발의 차이로 선거에서 이겼다."
  },
  {
    id: 71, day: 3, word: "scatter", phonetic: "/ˈskætər/", meaning: "v. 흩뿌리다, 흩어지다",
    example: "The wind scattered the leaves all over the yard.",
    exampleTranslation: "바람이 나뭇잎들을 마당 곳곳에 흩뿌렸다."
  },
  {
    id: 72, day: 3, word: "distribute", phonetic: "/dɪˈstrɪbjuːt/", meaning: "v. 분배하다, 나누어 주다",
    example: "The organization distributed food and water to the refugees.",
    exampleTranslation: "그 단체는 난민들에게 음식과 물을 나누어 주었다."
  },
  {
    id: 73, day: 3, word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", meaning: "v. 축적하다, 모으다",
    example: "Dust tends to accumulate under the bed.",
    exampleTranslation: "먼지는 침대 밑에 쌓이는 경향이 있다."
  },
  {
    id: 74, day: 3, word: "stimulate", phonetic: "/ˈstɪmjuleɪt/", meaning: "v. 자극하다, 격려하다",
    example: "Reading books can stimulate a child's imagination.",
    exampleTranslation: "책을 읽는 것은 아이의 상상력을 자극할 수 있다."
  },
  {
    id: 75, day: 3, word: "conscious", phonetic: "/ˈkɑːnʃəs/", meaning: "a. 의식하는, 자각하는",
    example: "She was entirely conscious of the risks involved.",
    exampleTranslation: "그녀는 수반되는 위험을 완전히 자각하고 있었다."
  },
  {
    id: 76, day: 3, word: "conscience", phonetic: "/ˈkɑːnʃəns/", meaning: "n. 양심",
    example: "He had a guilty conscience after lying to his friend.",
    exampleTranslation: "그는 친구에게 거짓말을 한 후 양심의 가책을 느꼈다."
  },
  {
    id: 77, day: 3, word: "consequence", phonetic: "/ˈkɑːnsəkwens/", meaning: "n. 결과, 중요성",
    example: "Global warming is a direct consequence of carbon emissions.",
    exampleTranslation: "지구 온난화는 탄소 배출의 직접적인 결과이다."
  },
  {
    id: 78, day: 3, word: "subsequent", phonetic: "/ˈsʌbsɪkwənt/", meaning: "a. 그 다음의, 차후의",
    example: "The mistakes were corrected in subsequent editions of the book.",
    exampleTranslation: "그 오류들은 책의 차후 판본에서 수정되었다."
  },
  {
    id: 79, day: 3, word: "manipulate", phonetic: "/məˈnɪpjuleɪt/", meaning: "v. 조종하다, 다루다",
    example: "The software allows you to manipulate images easily.",
    exampleTranslation: "이 소프트웨어를 사용하면 이미지를 쉽게 다룰 수 있다."
  },
  {
    id: 80, day: 3, word: "cooperate", phonetic: "/koʊˈɑːpəreɪt/", meaning: "v. 협력하다, 협조하다",
    example: "The two companies agreed to cooperate on the new project.",
    exampleTranslation: "두 회사는 새 프로젝트에 협력하기로 동의했다."
  },
  {
    id: 81, day: 3, word: "coordinate", phonetic: "/koʊˈɔːrdɪneɪt/", meaning: "v. 조정하다, 조직화하다",
    example: "We need someone to coordinate the rescue efforts.",
    exampleTranslation: "구조 작업을 조직화할 누군가가 필요하다."
  },
  {
    id: 82, day: 3, word: "proportion", phonetic: "/prəˈpɔːrʃn/", meaning: "n. 비율, 부분, 균형",
    example: "A large proportion of the budget is spent on education.",
    exampleTranslation: "예산의 큰 비율이 교육에 쓰인다."
  },
  {
    id: 83, day: 3, word: "property", phonetic: "/ˈprɑːpərti/", meaning: "n. 재산, 부동산, (물질의) 특성",
    example: "The chemical has properties similar to those of plastic.",
    exampleTranslation: "그 화학물질은 플라스틱과 유사한 특성을 가지고 있다."
  },
  {
    id: 84, day: 3, word: "estimate", phonetic: "/ˈestɪmeɪt/", meaning: "v. 추정하다, 평가하다 / n. 견적",
    example: "It is hard to estimate the total cost of the project.",
    exampleTranslation: "프로젝트의 총비용을 추정하기는 어렵다."
  },
  {
    id: 85, day: 3, word: "underestimate", phonetic: "/ˌʌndərˈestɪmeɪt/", meaning: "v. 과소평가하다",
    example: "Never underestimate the power of a dedicated team.",
    exampleTranslation: "헌신적인 팀의 힘을 결코 과소평가하지 마라."
  },
  {
    id: 86, day: 3, word: "proceed", phonetic: "/proʊˈsiːd/", meaning: "v. 진행하다, 나아가다",
    example: "The meeting will proceed as planned despite the absence of the CEO.",
    exampleTranslation: "CEO의 부재에도 불구하고 회의는 계획대로 진행될 것이다."
  },
  {
    id: 87, day: 3, word: "precede", phonetic: "/prɪˈsiːd/", meaning: "v. 선행하다, ~에 앞서다",
    example: "A silent prayer preceded the beginning of the ceremony.",
    exampleTranslation: "의식이 시작되기 전에 묵념이 선행되었다."
  },
  {
    id: 88, day: 3, word: "exceed", phonetic: "/ɪkˈsiːd/", meaning: "v. 넘다, 초과하다",
    example: "The final cost will not exceed $5,000.",
    exampleTranslation: "최종 비용은 5,000달러를 초과하지 않을 것이다."
  },
  {
    id: 89, day: 3, word: "access", phonetic: "/ˈækses/", meaning: "n. 접근, 출입 / v. 접근하다",
    example: "Students have free access to the library resources.",
    exampleTranslation: "학생들은 도서관 자료에 무료로 접근할 수 있다."
  },
  {
    id: 90, day: 3, word: "excess", phonetic: "/ɪkˈses/", meaning: "n. 초과, 과도 / a. 초과한",
    example: "Cut off any excess fat from the meat before cooking.",
    exampleTranslation: "요리하기 전에 고기에서 초과된 지방을 모두 잘라내라."
  },
  {
    id: 91, day: 3, word: "aggressive", phonetic: "/əˈɡresɪv/", meaning: "a. 공격적인, 매우 적극적인",
    example: "Some animals become aggressive if they feel threatened.",
    exampleTranslation: "어떤 동물들은 위협을 느끼면 공격적이 된다."
  },
  {
    id: 92, day: 3, word: "conservative", phonetic: "/kənˈsɜːrvətɪv/", meaning: "a. 보수적인, 전통적인",
    example: "Older people tend to have more conservative views.",
    exampleTranslation: "나이 든 사람들은 더 보수적인 견해를 갖는 경향이 있다."
  },
  {
    id: 93, day: 3, word: "preserve", phonetic: "/prɪˈzɜːrv/", meaning: "v. 보존하다, 지키다",
    example: "We must take action to preserve our cultural heritage.",
    exampleTranslation: "우리는 문화유산을 보존하기 위해 조치를 취해야 한다."
  },
  {
    id: 94, day: 3, word: "observe", phonetic: "/əbˈzɜːrv/", meaning: "v. 관찰하다, (법 등을) 준수하다",
    example: "Scientists use telescopes to observe distant stars.",
    exampleTranslation: "과학자들은 먼 별들을 관찰하기 위해 망원경을 사용한다."
  },
  {
    id: 95, day: 3, word: "reserve", phonetic: "/rɪˈzɜːrv/", meaning: "v. 예약하다, 남겨두다 / n. 비축(물)",
    example: "I would like to reserve a table for two tonight.",
    exampleTranslation: "오늘 밤 2인용 테이블을 예약하고 싶습니다."
  },
  {
    id: 96, day: 3, word: "deserve", phonetic: "/dɪˈzɜːrv/", meaning: "v. ~할 가치가 있다, ~을 받을 만하다",
    example: "After all that hard work, you deserve a vacation.",
    exampleTranslation: "그 모든 힘든 일을 한 후에, 너는 휴가를 받을 만하다."
  },
  {
    id: 97, day: 3, word: "maintain", phonetic: "/meɪnˈteɪn/", meaning: "v. 유지하다, 주장하다",
    example: "It is important to maintain a healthy lifestyle.",
    exampleTranslation: "건강한 생활 방식을 유지하는 것은 중요하다."
  },
  {
    id: 98, day: 3, word: "retain", phonetic: "/rɪˈteɪn/", meaning: "v. 보유하다, 간직하다",
    tip: "💡 maintain이 '현상을 유지'하는 것이라면, retain은 '잃지 않고 갖고 있는' 느낌",
    example: "These plants are highly effective at retaining moisture.",
    exampleTranslation: "이 식물들은 수분을 보유하는 데 매우 효과적이다."
  },
  {
    id: 99, day: 3, word: "obtain", phonetic: "/əbˈteɪn/", meaning: "v. 얻다, 획득하다",
    example: "You need to obtain a visa before entering the country.",
    exampleTranslation: "그 나라에 입국하기 전에 비자를 획득해야 한다."
  },
  {
    id: 100, day: 3, word: "contain", phonetic: "/kənˈteɪn/", meaning: "v. 포함하다, 억누르다",
    example: "Does this drink contain any artificial flavors?",
    exampleTranslation: "이 음료에는 인공 향료가 포함되어 있습니까?"
  },
  {
    id: 101, day: 3, word: "attract", phonetic: "/əˈtrækt/", meaning: "v. 끌다, 유인하다",
    example: "The beautiful beaches attract millions of tourists every year.",
    exampleTranslation: "그 아름다운 해변들은 매년 수백만 명의 관광객을 끌어들인다."
  },
  {
    id: 102, day: 3, word: "distract", phonetic: "/dɪˈstrækt/", meaning: "v. (주의를) 딴 데로 돌리다, 산만하게 하다",
    example: "Don't let the noise distract you from your work.",
    exampleTranslation: "소음이 네 일에서 주의를 딴 데로 돌리게 하지 마라."
  },
  {
    id: 103, day: 4, word: "extract", phonetic: "/ɪkˈstrækt/", meaning: "v. 추출하다, 뽑아내다 / n. 추출물",
    example: "They use a special machine to extract the oil from the seeds.",
    exampleTranslation: "그들은 씨앗에서 기름을 추출하기 위해 특수 기계를 사용한다."
  },
  {
    id: 104, day: 4, word: "contract", phonetic: "/ˈkɑːntrækt/", meaning: "n. 계약 / v. 수축하다, 병에 걸리다",
    example: "Metal tends to contract when the temperature drops.",
    exampleTranslation: "금속은 온도가 떨어지면 수축하는 경향이 있다."
  },
  {
    id: 105, day: 4, word: "trait", phonetic: "/treɪt/", meaning: "n. 특성, 특징",
    example: "Honesty is an important personality trait.",
    exampleTranslation: "정직은 중요한 성격적 특성이다."
  },
  {
    id: 106, day: 4, word: "portray", phonetic: "/pɔːrˈtreɪ/", meaning: "v. 묘사하다, 그리다",
    example: "The novel portrays the struggles of a working-class family.",
    exampleTranslation: "그 소설은 노동자 계층 가족의 고군분투를 묘사한다."
  },
  {
    id: 107, day: 4, word: "betray", phonetic: "/bɪˈtreɪ/", meaning: "v. 배신하다, 누설하다",
    example: "He would rather die than betray his friends.",
    exampleTranslation: "그는 친구들을 배신하느니 차라리 죽을 것이다."
  },
  {
    id: 108, day: 4, word: "transition", phonetic: "/trænˈzɪʃn/", meaning: "n. 전환, 이행",
    example: "The country is undergoing a transition to a democratic government.",
    exampleTranslation: "그 나라는 민주 정부로의 전환을 겪고 있다."
  },
  {
    id: 109, day: 4, word: "translate", phonetic: "/trænzˈleɪt/", meaning: "v. 번역하다, 통역하다",
    example: "Her books have been translated into more than 20 languages.",
    exampleTranslation: "그녀의 책들은 20개 이상의 언어로 번역되었다."
  },
  {
    id: 110, day: 4, word: "transform", phonetic: "/trænsˈfɔːrm/", meaning: "v. 변형시키다, 완전히 바꿔 놓다",
    example: "The internet has completely transformed the way we work.",
    exampleTranslation: "인터넷은 우리가 일하는 방식을 완전히 바꿔 놓았다."
  },
  {
    id: 111, day: 4, word: "transfer", phonetic: "/trænsˈfɜːr/", meaning: "v. 옮기다, 갈아타다",
    example: "I need to transfer some money into my savings account.",
    exampleTranslation: "나는 내 저축 계좌로 돈을 약간 이체해야 한다."
  },
  {
    id: 112, day: 4, word: "transmit", phonetic: "/trænsˈmɪt/", meaning: "v. 전송하다, (병을) 전염시키다",
    example: "The disease is transmitted by mosquitoes.",
    exampleTranslation: "그 질병은 모기에 의해 전염된다."
  },
  {
    id: 113, day: 4, word: "transplant", phonetic: "/trænsˈplænt/", meaning: "v. 이식하다 / n. 이식",
    example: "He had a successful heart transplant operation last year.",
    exampleTranslation: "그는 작년에 성공적인 심장 이식 수술을 받았다."
  },
  {
    id: 114, day: 4, word: "transparent", phonetic: "/trænsˈpærənt/", meaning: "a. 투명한, 명백한",
    example: "The company aims to make its hiring process more transparent.",
    exampleTranslation: "그 회사는 채용 과정을 더 투명하게 만드는 것을 목표로 한다."
  },
  {
    id: 115, day: 4, word: "apparent", phonetic: "/əˈpærənt/", meaning: "a. 명백한, 겉보기의",
    example: "It was apparent that she was not enjoying the party.",
    exampleTranslation: "그녀가 파티를 즐기지 않고 있다는 것이 명백했다."
  },
  {
    id: 116, day: 4, word: "clarify", phonetic: "/ˈklærəfaɪ/", meaning: "v. 명확하게 하다, 분명히 말하다",
    example: "Could you clarify what you mean by that?",
    exampleTranslation: "그게 무슨 뜻인지 명확하게 말씀해 주시겠습니까?"
  },
  {
    id: 117, day: 4, word: "declare", phonetic: "/dɪˈkler/", meaning: "v. 선언하다, 단언하다, 신고하다",
    example: "The government has declared a state of emergency.",
    exampleTranslation: "정부는 국가 비상사태를 선언했다."
  },
  {
    id: 118, day: 4, word: "deliberate", phonetic: "/dɪˈlɪbərət/", meaning: "a. 고의적인, 신중한 / v. 숙고하다",
    example: "The police believe the fire was a deliberate act of sabotage.",
    exampleTranslation: "경찰은 그 화재가 고의적인 파괴 행위라고 믿는다."
  },
  {
    id: 119, day: 4, word: "eliminate", phonetic: "/ɪˈlɪmɪneɪt/", meaning: "v. 제거하다, 없애다",
    example: "We must eliminate all errors before publishing the report.",
    exampleTranslation: "우리는 보고서를 발행하기 전에 모든 오류를 제거해야 한다."
  },
  {
    id: 120, day: 4, word: "illuminate", phonetic: "/ɪˈluːmɪneɪt/", meaning: "v. 비추다, 밝히다, (문제를) 명확히 하다",
    example: "The streets were illuminated by bright lights.",
    exampleTranslation: "거리는 밝은 불빛으로 비춰졌다."
  },
  {
    id: 121, day: 4, word: "valid", phonetic: "/ˈvælɪd/", meaning: "a. 타당한, 유효한",
    example: "You must have a valid passport to travel abroad.",
    exampleTranslation: "해외로 여행하려면 유효한 여권이 있어야 한다."
  },
  {
    id: 122, day: 4, word: "equivalent", phonetic: "/ɪˈkwɪvələnt/", meaning: "a. 동등한, 맞먹는 / n. 등가물",
    example: "Eight kilometers is roughly equivalent to five miles.",
    exampleTranslation: "8킬로미터는 대략 5마일과 동등하다."
  },
  {
    id: 123, day: 4, word: "prevalent", phonetic: "/ˈprevələnt/", meaning: "a. 널리 퍼진, 일반적인",
    example: "Flu is most prevalent during the winter months.",
    exampleTranslation: "독감은 겨울철에 가장 널리 퍼져 있다."
  },
  {
    id: 124, day: 4, word: "intuition", phonetic: "/ˌɪntuˈɪʃn/", meaning: "n. 직관, 직감",
    example: "She knew by intuition that he was telling the truth.",
    exampleTranslation: "그녀는 그가 진실을 말하고 있다는 것을 직감으로 알았다."
  },
  {
    id: 125, day: 4, word: "tuition", phonetic: "/tuˈɪʃn/", meaning: "n. 수업료, 등록금",
    example: "Many students have to take out loans to pay their tuition.",
    exampleTranslation: "많은 학생들이 등록금을 내기 위해 대출을 받아야 한다."
  },
  {
    id: 126, day: 4, word: "acquire", phonetic: "/əˈkwaɪər/", meaning: "v. 습득하다, 획득하다",
    example: "Children acquire language at an amazing speed.",
    exampleTranslation: "아이들은 놀라운 속도로 언어를 습득한다."
  },
  {
    id: 127, day: 4, word: "inquire", phonetic: "/ɪnˈkwaɪər/", meaning: "v. 묻다, 조사하다",
    example: "I called to inquire about the schedule for the upcoming meeting.",
    exampleTranslation: "나는 다가오는 회의 일정에 대해 묻기 위해 전화했다."
  },
  {
    id: 128, day: 4, word: "require", phonetic: "/rɪˈkwaɪər/", meaning: "v. 필요로 하다, 요구하다",
    example: "This game requires a high level of concentration.",
    exampleTranslation: "이 게임은 높은 수준의 집중력을 필요로 한다."
  },
  {
    id: 129, day: 4, word: "exquisite", phonetic: "/ɪkˈskwɪzɪt/", meaning: "a. 매우 아름다운, 정교한",
    example: "She bought an exquisite antique vase at the auction.",
    exampleTranslation: "그녀는 경매에서 매우 아름다운 골동품 꽃병을 샀다."
  },
  {
    id: 130, day: 4, word: "sequence", phonetic: "/ˈsiːkwəns/", meaning: "n. 순서, 연속",
    example: "The events should be presented in chronological sequence.",
    exampleTranslation: "그 사건들은 연대기적 순서로 제시되어야 한다."
  },
  {
    id: 131, day: 4, word: "frequent", phonetic: "/ˈfriːkwənt/", meaning: "a. 잦은, 빈번한",
    example: "He is a frequent visitor to the art museum.",
    exampleTranslation: "그는 그 미술관의 잦은 방문객이다."
  },
  {
    id: 132, day: 4, word: "severe", phonetic: "/sɪˈvɪr/", meaning: "a. 심각한, 엄격한",
    example: "The storm caused severe damage to the coastal towns.",
    exampleTranslation: "그 폭풍은 해안 마을들에 심각한 피해를 입혔다."
  },
  {
    id: 133, day: 4, word: "persevere", phonetic: "/ˌpɜːrsəˈvɪr/", meaning: "v. 인내하며 계속하다",
    example: "Despite many obstacles, she persevered and finished her degree.",
    exampleTranslation: "많은 장애물에도 불구하고 그녀는 인내하여 학위를 마쳤다."
  },
  {
    id: 134, day: 4, word: "concise", phonetic: "/kənˈsaɪs/", meaning: "a. 간결한, 축약된",
    example: "Please make your report as clear and concise as possible.",
    exampleTranslation: "보고서를 가능한 한 분명하고 간결하게 작성해 주십시오."
  },
  {
    id: 135, day: 4, word: "decisive", phonetic: "/dɪˈsaɪsɪv/", meaning: "a. 결정적인, 결단력 있는",
    example: "The general's strategy proved to be decisive in winning the war.",
    exampleTranslation: "장군의 전략은 전쟁을 이기는 데 결정적인 것으로 입증되었다."
  },
  {
    id: 136, day: 4, word: "resolve", phonetic: "/rɪˈzɑːlv/", meaning: "v. 해결하다, 다짐하다",
    example: "We hope to resolve the issue as quickly as possible.",
    exampleTranslation: "우리는 그 문제를 가능한 한 빨리 해결하기를 바란다."
  },
{
    id: 137, day: 5, word: "dissolve", phonetic: "/dɪˈzɑːlv/", meaning: "v. 녹이다, 용해되다",
    example: "Sugar dissolves easily in warm water.",
    exampleTranslation: "설탕은 따뜻한 물에 쉽게 녹는다."
  },
  {
    id: 138, day: 5, word: "absolute", phonetic: "/ˈæbsəluːt/", meaning: "a. 절대적인, 완전한",
    example: "I have absolute confidence in her abilities.",
    exampleTranslation: "나는 그녀의 능력에 대해 절대적인 확신을 가지고 있다."
  },
  {
    id: 139, day: 5, word: "relative", phonetic: "/ˈrelətɪv/", meaning: "a. 상대적인 / n. 친척",
    example: "Beauty is a relative concept.",
    exampleTranslation: "아름다움은 상대적인 개념이다."
  },
  {
    id: 140, day: 5, word: "relevant", phonetic: "/ˈreləvənt/", meaning: "a. 관련 있는, 적절한",
    example: "Please provide all relevant documents for the application.",
    exampleTranslation: "지원서와 관련된 모든 서류를 제출해 주십시오."
  },
  {
    id: 141, day: 5, word: "relieve", phonetic: "/rɪˈliːv/", meaning: "v. 없애 주다, 안도하게 하다",
    example: "This medication will help relieve the pain.",
    exampleTranslation: "이 약은 통증을 없애는 데 도움이 될 것이다."
  },
  {
    id: 142, day: 5, word: "brief", phonetic: "/briːf/", meaning: "a. 짧은, 간결한",
    example: "We had a brief meeting before the presentation.",
    exampleTranslation: "우리는 발표 전에 짧은 회의를 가졌다."
  },
  {
    id: 143, day: 5, word: "grief", phonetic: "/ɡriːf/", meaning: "n. 큰 슬픔, 비통",
    example: "He could not hide his grief at the funeral.",
    exampleTranslation: "그는 장례식에서 큰 슬픔을 감출 수 없었다."
  },
  {
    id: 144, day: 5, word: "trace", phonetic: "/treɪs/", meaning: "v. 추적하다 / n. 자취, 흔적",
    example: "The police are trying to trace the stolen vehicle.",
    exampleTranslation: "경찰은 도난당한 차량을 추적하려고 노력 중이다."
  },
  {
    id: 145, day: 5, word: "track", phonetic: "/træk/", meaning: "n. 길, 자취 / v. 추적하다",
    example: "The hunter followed the animal's tracks in the snow.",
    exampleTranslation: "사냥꾼은 눈 위에 난 동물의 자취를 따라갔다."
  },
  {
    id: 146, day: 5, word: "animate", phonetic: "/ˈænɪmeɪt/", meaning: "v. 생기를 불어넣다 / a. 살아 있는",
    example: "A smile suddenly animated her face.",
    exampleTranslation: "미소가 갑자기 그녀의 얼굴에 생기를 불어넣었다."
  },
  {
    id: 147, day: 5, word: "revive", phonetic: "/rɪˈvaɪv/", meaning: "v. 소생시키다, 회복하다",
    example: "The government is trying to revive the local economy.",
    exampleTranslation: "정부는 지역 경제를 회복시키기 위해 노력하고 있다."
  },
  {
    id: 148, day: 5, word: "survive", phonetic: "/sərˈvaɪv/", meaning: "v. 살아남다, 생존하다",
    example: "Only a few people survived the plane crash.",
    exampleTranslation: "소수의 사람들만이 비행기 추락 사고에서 살아남았다."
  },
  {
    id: 149, day: 5, word: "vivid", phonetic: "/ˈvɪvɪd/", meaning: "a. 생생한, 선명한",
    example: "I have a vivid memory of my first day at school.",
    exampleTranslation: "나는 학교 첫날에 대한 생생한 기억을 가지고 있다."
  },
  {
    id: 150, day: 5, word: "essential", phonetic: "/ɪˈsenʃl/", meaning: "a. 필수적인, 본질적인",
    example: "Water is essential for all living things.",
    exampleTranslation: "물은 모든 생명체에 필수적이다."
  },
  {
    id: 151, day: 5, word: "substantial", phonetic: "/səbˈstænʃl/", meaning: "a. 상당한, 실질적인",
    example: "They made a substantial investment in the new technology.",
    exampleTranslation: "그들은 신기술에 상당한 투자를 했다."
  },
  {
    id: 152, day: 5, word: "beneficial", phonetic: "/ˌbenɪˈfɪʃl/", meaning: "a. 유익한, 이로운",
    example: "Regular exercise is beneficial to your health.",
    exampleTranslation: "규칙적인 운동은 건강에 유익하다."
  },
  {
    id: 153, day: 5, word: "commercial", phonetic: "/kəˈmɜːrʃl/", meaning: "a. 상업적인 / n. 광고",
    example: "The product was a huge commercial success.",
    exampleTranslation: "그 제품은 거대한 상업적 성공을 거두었다."
  },
  {
    id: 154, day: 5, word: "financial", phonetic: "/faɪˈnænʃl/", meaning: "a. 재정적인, 금융의",
    example: "The company is facing severe financial difficulties.",
    exampleTranslation: "그 회사는 심각한 재정적 어려움에 직면해 있다."
  },
  {
    id: 155, day: 5, word: "artificial", phonetic: "/ˌɑːrtɪˈfɪʃl/", meaning: "a. 인공의, 인조의",
    example: "This food contains no artificial colors or flavors.",
    exampleTranslation: "이 식품에는 인공 색소나 향료가 포함되어 있지 않다."
  },
  {
    id: 156, day: 5, word: "superficial", phonetic: "/ˌsuːpərˈfɪʃl/", meaning: "a. 표면적인, 피상적인",
    example: "He only has a superficial knowledge of the subject.",
    exampleTranslation: "그는 그 주제에 대해 피상적인 지식만 가지고 있다."
  },
  {
    id: 157, day: 5, word: "deficient", phonetic: "/dɪˈfɪʃnt/", meaning: "a. 부족한, 결함이 있는",
    example: "A diet deficient in vitamin D can cause bone problems.",
    exampleTranslation: "비타민 D가 부족한 식단은 뼈 문제를 일으킬 수 있다."
  },
  {
    id: 158, day: 5, word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "a. 충분한",
    example: "We have sufficient evidence to prove his guilt.",
    exampleTranslation: "우리는 그의 유죄를 증명할 충분한 증거를 가지고 있다."
  },
  {
    id: 159, day: 5, word: "efficient", phonetic: "/ɪˈfɪʃnt/", meaning: "a. 능률적인, 효율적인",
    example: "We need a more efficient way to heat the building.",
    exampleTranslation: "우리는 건물을 난방할 더 효율적인 방법이 필요하다."
  },
  {
    id: 160, day: 5, word: "proficient", phonetic: "/prəˈfɪʃnt/", meaning: "a. 능숙한, 숙달된",
    example: "She is highly proficient in speaking English.",
    exampleTranslation: "그녀는 영어 말하기에 매우 능숙하다."
  },
  {
    id: 161, day: 5, word: "magnificent", phonetic: "/mæɡˈnɪfɪsnt/", meaning: "a. 참으로 아름다운, 훌륭한",
    example: "The view from the top of the mountain was magnificent.",
    exampleTranslation: "산 정상에서 바라본 경치는 참으로 아름다웠다."
  },
  {
    id: 162, day: 5, word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "a. 중요한, 의미 있는",
    example: "There has been a significant increase in online sales.",
    exampleTranslation: "온라인 판매에 있어 중요한 증가가 있었다."
  },
  {
    id: 163, day: 5, word: "eloquent", phonetic: "/ˈeləkwənt/", meaning: "a. 유창한, 설득력 있는",
    example: "He gave an eloquent speech that moved the audience.",
    exampleTranslation: "그는 청중을 감동시킨 유창한 연설을 했다."
  },
  {
    id: 164, day: 5, word: "constant", phonetic: "/ˈkɑːnstənt/", meaning: "a. 끊임없는, 일정한",
    example: "The machine requires a constant supply of electricity.",
    exampleTranslation: "그 기계는 끊임없는 전력 공급을 필요로 한다."
  },
  {
    id: 165, day: 5, word: "instant", phonetic: "/ˈɪnstənt/", meaning: "a. 즉각적인 / n. 순간",
    example: "The new song was an instant hit on the internet.",
    exampleTranslation: "그 신곡은 인터넷에서 즉각적인 히트를 쳤다."
  },
  {
    id: 166, day: 5, word: "distant", phonetic: "/ˈdɪstənt/", meaning: "a. 먼, 떨어져 있는",
    example: "We could hear the faint sound of distant thunder.",
    exampleTranslation: "우리는 멀리서 들려오는 희미한 천둥소리를 들을 수 있었다."
  },
  {
    id: 167, day: 5, word: "substance", phonetic: "/ˈsʌbstəns/", meaning: "n. 물질, 본질",
    example: "Water is the most common substance on Earth.",
    exampleTranslation: "물은 지구상에서 가장 흔한 물질이다."
  },
  {
    id: 168, day: 5, word: "instance", phonetic: "/ˈɪnstəns/", meaning: "n. 사례, 경우",
    tip: "💡 for instance (예를 들어)",
    example: "There have been several instances of violence in the area.",
    exampleTranslation: "그 지역에서 여러 폭력 사례가 있었다."
  },
  {
    id: 169, day: 5, word: "circumstance", phonetic: "/ˈsɜːrkəmstæns/", meaning: "n. 상황, 환경",
    example: "I can't imagine a circumstance in which I would do that.",
    exampleTranslation: "나는 내가 그런 일을 할 상황을 상상할 수 없다."
  },
  {
    id: 170, day: 5, word: "obstacle", phonetic: "/ˈɑːbstəkl/", meaning: "n. 장애(물), 방해(물)",
    example: "Fear of failure is a major obstacle to success.",
    exampleTranslation: "실패에 대한 두려움은 성공에 이르는 주요한 장애물이다."
  },
  {
    id: 171, day: 6, word: "absorb", phonetic: "/əbˈzɔːrb/", meaning: "v. 흡수하다, 받아들이다",
    example: "Plants absorb carbon dioxide from the air.",
    exampleTranslation: "식물은 공기 중의 이산화탄소를 흡수한다."
  },
  {
    id: 172, day: 6, word: "absurd", phonetic: "/əbˈsɜːrd/", meaning: "a. 터무니없는, 황당한",
    example: "It is an absurd idea that cats can fly.",
    exampleTranslation: "고양이가 날 수 있다는 것은 터무니없는 생각이다."
  },
  {
    id: 173, day: 6, word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 버리다, 포기하다",
    example: "They had to abandon their car because of the heavy snow.",
    exampleTranslation: "그들은 폭설 때문에 차를 버려야 했다."
  },
  {
    id: 174, day: 6, word: "abolish", phonetic: "/əˈbɑːlɪʃ/", meaning: "v. (법률·제도를) 폐지하다",
    example: "Some people argue that the death penalty should be abolished.",
    exampleTranslation: "어떤 사람들은 사형 제도가 폐지되어야 한다고 주장한다."
  },
  {
    id: 175, day: 6, word: "abound", phonetic: "/əˈbaʊnd/", meaning: "v. 풍부하다, 많이 있다",
    example: "Rumors abound about the company's financial problems.",
    exampleTranslation: "회사의 재정 문제에 대한 소문이 파다하다."
  },
  {
    id: 176, day: 6, word: "abuse", phonetic: "/əˈbjuːs/", meaning: "n. 남용, 학대 / v. 남용하다",
    example: "Drug abuse is a serious problem in many societies.",
    exampleTranslation: "약물 남용은 많은 사회에서 심각한 문제이다."
  },
  {
    id: 177, day: 6, word: "accelerate", phonetic: "/əkˈseləreɪt/", meaning: "v. 가속하다, 촉진하다",
    example: "The government plans to accelerate economic growth.",
    exampleTranslation: "정부는 경제 성장을 가속할 계획이다."
  },
  {
    id: 178, day: 6, word: "accessible", phonetic: "/əkˈsesəbl/", meaning: "a. 접근할 수 있는, 이해하기 쉬운",
    example: "The museum is completely accessible to wheelchair users.",
    exampleTranslation: "그 박물관은 휠체어 사용자가 완벽하게 접근할 수 있다."
  },
  {
    id: 179, day: 6, word: "accidental", phonetic: "/ˌæksɪˈdentl/", meaning: "a. 우연한, 돌발적인",
    example: "The discovery of the new material was entirely accidental.",
    exampleTranslation: "그 신소재의 발견은 전적으로 우연한 것이었다."
  },
  {
    id: 180, day: 6, word: "accommodate", phonetic: "/əˈkɑːmədeɪt/", meaning: "v. 수용하다, 편의를 도모하다",
    example: "The hotel can accommodate up to 500 guests.",
    exampleTranslation: "그 호텔은 최대 500명의 손님을 수용할 수 있다."
  },
  {
    id: 181, day: 6, word: "accompany", phonetic: "/əˈkʌmpəni/", meaning: "v. 동반하다, 동행하다",
    example: "Children under 12 must be accompanied by an adult.",
    exampleTranslation: "12세 미만의 어린이는 어른과 동행해야 한다."
  },
  {
    id: 182, day: 6, word: "accomplish", phonetic: "/əˈkɑːmplɪʃ/", meaning: "v. 완수하다, 성취하다",
    example: "You can accomplish anything if you work hard enough.",
    exampleTranslation: "충분히 열심히 노력한다면 무엇이든 성취할 수 있다."
  },
  {
    id: 183, day: 6, word: "accord", phonetic: "/əˈkɔːrd/", meaning: "n. 합의 / v. 일치하다, 부여하다",
    tip: "💡 in accordance with (~에 부합하게, ~에 따라)",
    example: "The project was completed in accord with the original plan.",
    exampleTranslation: "그 프로젝트는 원래 계획과 일치하게 완료되었다."
  },
  {
    id: 184, day: 6, word: "account", phonetic: "/əˈkaʊnt/", meaning: "n. 계좌, 설명 / v. 설명하다",
    tip: "💡 account for (~을 설명하다, ~의 비율을 차지하다)",
    example: "How do you account for the missing money?",
    exampleTranslation: "없어진 돈에 대해 어떻게 설명하시겠습니까?"
  },
  {
    id: 185, day: 6, word: "accurate", phonetic: "/ˈækjərət/", meaning: "a. 정확한, 정밀한",
    example: "We need an accurate description of the suspect.",
    exampleTranslation: "우리는 용의자에 대한 정확한 묘사가 필요하다."
  },
  {
    id: 186, day: 6, word: "accuse", phonetic: "/əˈkjuːz/", meaning: "v. 고발하다, 비난하다",
    example: "He was accused of stealing the documents.",
    exampleTranslation: "그는 문서를 훔친 혐의로 고발당했다."
  },
  {
    id: 187, day: 6, word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "v. 달성하다, 성취하다",
    example: "She finally achieved her dream of becoming a doctor.",
    exampleTranslation: "그녀는 마침내 의사가 되겠다는 꿈을 달성했다."
  },
  {
    id: 188, day: 6, word: "acid", phonetic: "/ˈæsɪd/", meaning: "n. 산 / a. 산성의, 신랄한",
    example: "Lemon juice contains a lot of acid.",
    exampleTranslation: "레몬즙에는 많은 산이 포함되어 있다."
  },
  {
    id: 189, day: 6, word: "acquaint", phonetic: "/əˈkweɪnt/", meaning: "v. 익히 알게 하다, 숙지시키다",
    example: "Take time to acquaint yourself with the new software.",
    exampleTranslation: "시간을 내어 새로운 소프트웨어를 숙지하라."
  },
  {
    id: 190, day: 6, word: "adapt", phonetic: "/əˈdæpt/", meaning: "v. 적응하다, 맞추다, 각색하다",
    example: "Animals must adapt to their changing environment to survive.",
    exampleTranslation: "동물들은 생존하기 위해 변화하는 환경에 적응해야 한다."
  },
  {
    id: 191, day: 6, word: "adopt", phonetic: "/əˈdɑːpt/", meaning: "v. 입양하다, 채택하다",
    example: "The company decided to adopt a new marketing strategy.",
    exampleTranslation: "그 회사는 새로운 마케팅 전략을 채택하기로 결정했다."
  },
  {
    id: 192, day: 6, word: "adjust", phonetic: "/əˈdʒʌst/", meaning: "v. 조정하다, 조절하다, 적응하다",
    example: "You can adjust the height of the chair.",
    exampleTranslation: "의자의 높이를 조절할 수 있습니다."
  },
  {
    id: 193, day: 6, word: "administer", phonetic: "/ədˈmɪnɪstər/", meaning: "v. 관리하다, 운영하다, 집행하다",
    example: "The test will be administered by trained professionals.",
    exampleTranslation: "그 시험은 훈련된 전문가들에 의해 관리될 것이다."
  },
  {
    id: 194, day: 6, word: "admire", phonetic: "/ədˈmaɪər/", meaning: "v. 존경하다, 칭찬하다",
    example: "I truly admire her dedication to helping others.",
    exampleTranslation: "나는 다른 사람들을 돕는 그녀의 헌신을 진심으로 존경한다."
  },
  {
    id: 195, day: 6, word: "admit", phonetic: "/ədˈmɪt/", meaning: "v. 인정하다, 입장을 허락하다",
    example: "Don't be afraid to admit when you are wrong.",
    exampleTranslation: "자신이 틀렸을 때 인정하는 것을 두려워하지 마라."
  },
  {
    id: 196, day: 6, word: "advocate", phonetic: "/ˈædvəkət/", meaning: "v. 지지하다, 옹호하다 / n. 옹호자",
    example: "He strongly advocates reducing carbon emissions.",
    exampleTranslation: "그는 탄소 배출을 줄이는 것을 강력히 지지한다."
  },
  {
    id: 197, day: 6, word: "affect", phonetic: "/əˈfekt/", meaning: "v. 영향을 미치다, 발생하다",
    example: "The new law will affect millions of small businesses.",
    exampleTranslation: "새로운 법은 수백만 개의 소규모 기업에 영향을 미칠 것이다."
  },
  {
    id: 198, day: 6, word: "effect", phonetic: "/ɪˈfekt/", meaning: "n. 영향, 결과, 효과",
    tip: "💡 affect(동사)와 effect(명사)의 품사 차이에 주의하세요.",
    example: "We are studying the effect of temperature on plant growth.",
    exampleTranslation: "우리는 온도가 식물 성장에 미치는 영향을 연구하고 있다."
  },
  {
    id: 199, day: 6, word: "afford", phonetic: "/əˈfɔːrd/", meaning: "v. ~할 여유가 있다",
    example: "We cannot afford to buy a new car this year.",
    exampleTranslation: "우리는 올해 새 차를 살 여유가 없다."
  },
  {
    id: 200, day: 6, word: "agency", phonetic: "/ˈeɪdʒənsi/", meaning: "n. 대리점, 기관",
    example: "She works for an international advertising agency.",
    exampleTranslation: "그녀는 국제 광고 대리점에서 일한다."
  },
  {
    id: 201, day: 6, word: "agony", phonetic: "/ˈæɡəni/", meaning: "n. 극심한 고통, 괴로움",
    example: "He lay on the floor in agony after twisting his ankle.",
    exampleTranslation: "그는 발목을 삔 후 극심한 고통 속에 바닥에 누워 있었다."
  },
  {
    id: 202, day: 6, word: "alien", phonetic: "/ˈeɪliən/", meaning: "a. 외국의, 외계의, 이질적인",
    example: "The concept of failure was alien to him.",
    exampleTranslation: "실패라는 개념은 그에게 이질적이었다."
  },
  {
    id: 203, day: 6, word: "allocate", phonetic: "/ˈæləkeɪt/", meaning: "v. 할당하다, 배분하다",
    example: "The government will allocate more funds to education.",
    exampleTranslation: "정부는 교육에 더 많은 자금을 할당할 것이다."
  },
  {
    id: 204, day: 6, word: "alter", phonetic: "/ˈɔːltər/", meaning: "v. 변하다, 바꾸다",
    example: "Nothing can alter the fact that we made a mistake.",
    exampleTranslation: "우리가 실수를 했다는 사실은 아무것도 바꿀 수 없다."
  },
  {
    id: 205, day: 7, word: "amaze", phonetic: "/əˈmeɪz/", meaning: "v. 놀라게 하다",
    example: "Her brilliant performance never ceases to amaze the audience.",
    exampleTranslation: "그녀의 훌륭한 연기는 관객을 놀라게 하는 것을 결코 멈추지 않는다."
  },
  {
    id: 206, day: 7, word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", meaning: "a. 애매한, 모호한",
    example: "His ambiguous remarks made everyone confused.",
    exampleTranslation: "그의 모호한 발언은 모두를 혼란스럽게 만들었다."
  },
  {
    id: 207, day: 7, word: "amend", phonetic: "/əˈmend/", meaning: "v. (법 등을) 개정하다, 수정하다",
    example: "The constitution was amended to give women the right to vote.",
    exampleTranslation: "여성에게 투표권을 주기 위해 헌법이 개정되었다."
  },
  {
    id: 208, day: 7, word: "ample", phonetic: "/ˈæmpl/", meaning: "a. 충분한, 풍부한",
    example: "There is ample evidence to support the theory.",
    exampleTranslation: "그 이론을 뒷받침할 충분한 증거가 있다."
  },
  {
    id: 209, day: 7, word: "amuse", phonetic: "/əˈmjuːz/", meaning: "v. 즐겁게 하다, 웃기다",
    example: "The clown tried to amuse the crying child.",
    exampleTranslation: "광대는 우는 아이를 즐겁게 해주려고 노력했다."
  },
  {
    id: 210, day: 7, word: "analyze", phonetic: "/ˈænəlaɪz/", meaning: "v. 분석하다",
    example: "Researchers are analyzing the data to find a pattern.",
    exampleTranslation: "연구원들은 패턴을 찾기 위해 데이터를 분석하고 있다."
  },
  {
    id: 211, day: 7, word: "ancestor", phonetic: "/ˈænsestər/", meaning: "n. 조상, 선조",
    example: "My ancestors came from Ireland in the 19th century.",
    exampleTranslation: "나의 조상들은 19세기에 아일랜드에서 왔다."
  },
  {
    id: 212, day: 7, word: "anchor", phonetic: "/ˈæŋkər/", meaning: "n. 닻, 앵커 / v. 닻을 내리다, 단단히 기반을 두다",
    example: "The ship dropped anchor in the bay.",
    exampleTranslation: "그 배는 만에 닻을 내렸다."
  },
  {
    id: 213, day: 7, word: "ancient", phonetic: "/ˈeɪnʃənt/", meaning: "a. 고대의, 아주 오래된",
    example: "We visited the ruins of an ancient Roman city.",
    exampleTranslation: "우리는 고대 로마 도시의 유적을 방문했다."
  },
  {
    id: 214, day: 7, word: "anguish", phonetic: "/ˈæŋɡwɪʃ/", meaning: "n. 극심한 고통, 괴로움",
    example: "The parents waited in anguish for news of their missing child.",
    exampleTranslation: "부모는 실종된 아이의 소식을 기다리며 극심한 고통 속에 있었다."
  },
  {
    id: 215, day: 7, word: "annoy", phonetic: "/əˈnɔɪ/", meaning: "v. 짜증나게 하다, 귀찮게 하다",
    example: "It really annoys me when people interrupt me while I'm speaking.",
    exampleTranslation: "내가 말하는 중에 사람들이 끼어들면 정말 짜증 난다."
  },
  {
    id: 216, day: 7, word: "annual", phonetic: "/ˈænjuəl/", meaning: "a. 매년의, 연간의",
    example: "The company's annual revenue exceeded 10 million dollars.",
    exampleTranslation: "그 회사의 연간 수익은 천만 달러를 초과했다."
  },
  {
    id: 217, day: 7, word: "anonymous", phonetic: "/əˈnɑːnɪməs/", meaning: "a. 익명의",
    example: "The author of the poem chose to remain anonymous.",
    exampleTranslation: "그 시의 작가는 익명으로 남기를 선택했다."
  },
  {
    id: 218, day: 7, word: "antique", phonetic: "/ænˈtiːk/", meaning: "n. 골동품 / a. 골동품인",
    example: "She collects antique furniture from the Victorian era.",
    exampleTranslation: "그녀는 빅토리아 시대의 골동품 가구를 수집한다."
  },
  {
    id: 219, day: 7, word: "anxiety", phonetic: "/æŋˈzaɪəti/", meaning: "n. 불안, 걱정, 열망",
    example: "Waiting for the exam results caused her a lot of anxiety.",
    exampleTranslation: "시험 결과를 기다리는 것은 그녀에게 많은 불안을 야기했다."
  },
  {
    id: 220, day: 7, word: "apologize", phonetic: "/əˈpɑːlədʒaɪz/", meaning: "v. 사과하다",
    example: "I sincerely apologize for the delay in replying to your email.",
    exampleTranslation: "이메일 답장이 늦어진 점 진심으로 사과드립니다."
  },
  {
    id: 221, day: 7, word: "appeal", phonetic: "/əˈpiːl/", meaning: "v. 호소하다, 매력적이다 / n. 매력",
    example: "The charity appealed to the public for donations.",
    exampleTranslation: "그 자선 단체는 대중에게 기부를 호소했다."
  },
  {
    id: 222, day: 7, word: "applaud", phonetic: "/əˈplɔːd/", meaning: "v. 박수갈채를 보내다, 칭찬하다",
    example: "The audience stood up and applauded the performers.",
    exampleTranslation: "관객들은 일어나서 공연자들에게 박수갈채를 보냈다."
  },
  {
    id: 223, day: 7, word: "apply", phonetic: "/əˈplaɪ/", meaning: "v. 지원하다, 적용하다, 바르다",
    tip: "💡 apply for (~에 지원하다), apply A to B (A를 B에 적용하다)",
    example: "He plans to apply for a job at a local bank.",
    exampleTranslation: "그는 지역 은행의 일자리에 지원할 계획이다."
  },
  {
    id: 224, day: 7, word: "appreciate", phonetic: "/əˈpriːʃieɪt/", meaning: "v. 진가를 알아보다, 고마워하다, 감상하다",
    example: "We deeply appreciate your help and support.",
    exampleTranslation: "우리는 당신의 도움과 지원에 깊이 고마워합니다."
  },
  {
    id: 225, day: 7, word: "approach", phonetic: "/əˈproʊtʃ/", meaning: "v. 다가가다, 접근하다 / n. 접근법",
    example: "Winter is approaching quickly this year.",
    exampleTranslation: "올해는 겨울이 빠르게 다가오고 있다."
  },
  {
    id: 226, day: 7, word: "approve", phonetic: "/əˈpruːv/", meaning: "v. 찬성하다, 승인하다",
    example: "The city council approved the plan to build a new park.",
    exampleTranslation: "시의회는 새 공원을 조성하는 계획을 승인했다."
  },
  {
    id: 227, day: 7, word: "approximate", phonetic: "/əˈprɑːksɪmət/", meaning: "a. 대략의, 거의 정확한",
    example: "The approximate cost of the repairs will be $200.",
    exampleTranslation: "수리의 대략적인 비용은 200달러가 될 것이다."
  },
  {
    id: 228, day: 7, word: "apt", phonetic: "/æpt/", meaning: "a. ~하는 경향이 있는, 적절한",
    tip: "💡 be apt to V (~하기 쉽다, ~하는 경향이 있다)",
    example: "People are apt to make mistakes when they are tired.",
    exampleTranslation: "사람들은 피곤할 때 실수하는 경향이 있다."
  },
  {
    id: 229, day: 7, word: "arbitrary", phonetic: "/ˈɑːrbɪtreri/", meaning: "a. 임의적인, 독단적인",
    example: "The choice of players for the team seemed completely arbitrary.",
    exampleTranslation: "팀을 위한 선수 선택은 완전히 임의적인 것처럼 보였다."
  },
  {
    id: 230, day: 7, word: "architecture", phonetic: "/ˈɑːrkɪtektʃər/", meaning: "n. 건축, 건축 양식",
    example: "He decided to study architecture at university.",
    exampleTranslation: "그는 대학에서 건축을 공부하기로 결정했다."
  },
  {
    id: 231, day: 7, word: "arise", phonetic: "/əˈraɪz/", meaning: "v. 생기다, 발생하다",
    example: "New problems may arise during the project.",
    exampleTranslation: "프로젝트 진행 중에 새로운 문제들이 발생할 수 있다."
  },
  {
    id: 232, day: 7, word: "arouse", phonetic: "/əˈraʊz/", meaning: "v. (감정 등을) 불러일으키다, 자극하다",
    example: "His strange behavior aroused the suspicion of the police.",
    exampleTranslation: "그의 이상한 행동은 경찰의 의심을 불러일으켰다."
  },
  {
    id: 233, day: 7, word: "arrange", phonetic: "/əˈreɪndʒ/", meaning: "v. 배열하다, 준비하다",
    example: "I will arrange a meeting with the manager for tomorrow.",
    exampleTranslation: "내일 매니저와의 회의를 준비하겠습니다."
  },
  {
    id: 234, day: 7, word: "arrest", phonetic: "/əˈrest/", meaning: "v. 체포하다",
    example: "The police arrested the suspect at the airport.",
    exampleTranslation: "경찰은 공항에서 용의자를 체포했다."
  },
  {
    id: 235, day: 7, word: "arrogant", phonetic: "/ˈærəɡənt/", meaning: "a. 오만한, 거만한",
    example: "His arrogant attitude made him unpopular among his colleagues.",
    exampleTranslation: "그의 오만한 태도는 동료들 사이에서 그를 인기 없게 만들었다."
  },
  {
    id: 236, day: 7, word: "article", phonetic: "/ˈɑːrtɪkl/", meaning: "n. (신문 등의) 기사, 물품",
    example: "Did you read the article about climate change in today's paper?",
    exampleTranslation: "오늘 신문에 난 기후 변화에 대한 기사를 읽었습니까?"
  },
  {
    id: 237, day: 7, word: "aspect", phonetic: "/ˈæspekt/", meaning: "n. 측면, 양상",
    example: "We must consider every aspect of the problem before deciding.",
    exampleTranslation: "우리는 결정하기 전에 문제의 모든 측면을 고려해야 한다."
  },
  {
    id: 238, day: 7, word: "aspire", phonetic: "/əˈspaɪər/", meaning: "v. 열망하다, 염원하다",
    example: "Many young people aspire to be professional athletes.",
    exampleTranslation: "많은 젊은이들이 프로 운동선수가 되기를 열망한다."
  },
  {
    id: 239, day: 8, word: "assemble", phonetic: "/əˈsembl/", meaning: "v. 모으다, 조립하다",
    example: "The students assembled in the hall for a special announcement.",
    exampleTranslation: "학생들은 특별 발표를 위해 강당에 모였다."
  },
  {
    id: 240, day: 8, word: "assert", phonetic: "/əˈsɜːrt/", meaning: "v. 주장하다, 확고히 하다",
    example: "She continued to assert her innocence despite the evidence.",
    exampleTranslation: "그녀는 증거에도 불구하고 계속해서 자신의 결백을 주장했다."
  },
  {
    id: 241, day: 8, word: "assign", phonetic: "/əˈsaɪn/", meaning: "v. 할당하다, 배정하다",
    example: "The teacher assigned a different topic to each group.",
    exampleTranslation: "선생님은 각 그룹에 다른 주제를 할당했다."
  },
  {
    id: 242, day: 8, word: "assist", phonetic: "/əˈsɪst/", meaning: "v. 돕다, 원조하다",
    example: "Two nurses were present to assist the doctor during the surgery.",
    exampleTranslation: "수술 중 의사를 돕기 위해 두 명의 간호사가 참석했다."
  },
  {
    id: 243, day: 8, word: "associate", phonetic: "/əˈsoʊʃieɪt/", meaning: "v. 연관 짓다, 교제하다",
    tip: "💡 associate A with B (A와 B를 연관 짓다)",
    example: "People often associate the color red with passion.",
    exampleTranslation: "사람들은 흔히 빨간색을 열정과 연관 짓는다."
  },
  {
    id: 244, day: 8, word: "assume", phonetic: "/əˈsuːm/", meaning: "v. 가정하다, (책임 등을) 떠맡다",
    example: "I assume that you have already read the instructions.",
    exampleTranslation: "나는 네가 이미 지시사항을 읽었다고 가정한다."
  },
  {
    id: 245, day: 8, word: "assure", phonetic: "/əˈʃʊr/", meaning: "v. 장담하다, 보장하다",
    example: "I can assure you that the product is completely safe.",
    exampleTranslation: "이 제품이 완전히 안전하다고 장담할 수 있습니다."
  },
  {
    id: 246, day: 8, word: "astonish", phonetic: "/əˈstɑːnɪʃ/", meaning: "v. 깜짝 놀라게 하다",
    example: "Her depth of knowledge never fails to astonish me.",
    exampleTranslation: "그녀의 깊은 지식은 항상 나를 깜짝 놀라게 한다."
  },
  {
    id: 247, day: 8, word: "attach", phonetic: "/əˈtætʃ/", meaning: "v. 붙이다, 첨부하다",
    example: "Please attach a recent photograph to your application form.",
    exampleTranslation: "지원서에 최근 사진을 첨부해 주십시오."
  },
  {
    id: 248, day: 8, word: "attain", phonetic: "/əˈteɪn/", meaning: "v. 달성하다, 이루다",
    example: "It took him years to attain the level of skill he desired.",
    exampleTranslation: "그가 원하는 기술 수준을 달성하는 데 몇 년이 걸렸다."
  },
  {
    id: 249, day: 8, word: "attempt", phonetic: "/əˈtempt/", meaning: "v. 시도하다 / n. 시도",
    example: "The prisoner made a desperate attempt to escape.",
    exampleTranslation: "그 죄수는 탈출하기 위해 필사적인 시도를 했다."
  },
  {
    id: 250, day: 8, word: "attend", phonetic: "/əˈtend/", meaning: "v. 참석하다, 주의를 기울이다",
    tip: "💡 attend to (~에 주의를 기울이다, 처리하다)",
    example: "All employees are required to attend the training session.",
    exampleTranslation: "모든 직원은 교육 세션에 참석해야 한다."
  },
  {
    id: 251, day: 8, word: "attitude", phonetic: "/ˈætɪtuːd/", meaning: "n. 태도, 자세",
    example: "Having a positive attitude can change your life.",
    exampleTranslation: "긍정적인 태도를 갖는 것은 당신의 삶을 바꿀 수 있다."
  },
  {
    id: 252, day: 8, word: "attorney", phonetic: "/əˈtɜːrni/", meaning: "n. 변호사, 대리인",
    example: "He hired a skilled attorney to defend him in court.",
    exampleTranslation: "그는 법정에서 자신을 변호하기 위해 숙련된 변호사를 고용했다."
  },
  {
    id: 253, day: 8, word: "audience", phonetic: "/ˈɔːdiəns/", meaning: "n. 청중, 관객",
    example: "The audience burst into laughter at his joke.",
    exampleTranslation: "청중은 그의 농담에 폭소를 터뜨렸다."
  },
  {
    id: 254, day: 8, word: "authentic", phonetic: "/ɔːˈθentɪk/", meaning: "a. 진짜의, 진품의, 진정성 있는",
    example: "The restaurant is famous for its authentic Italian cuisine.",
    exampleTranslation: "그 식당은 정통 이탈리아 요리로 유명하다."
  },
  {
    id: 255, day: 8, word: "author", phonetic: "/ˈɔːθər/", meaning: "n. 저자, 작가",
    example: "Who is the author of this famous novel?",
    exampleTranslation: "이 유명한 소설의 저자는 누구입니까?"
  },
  {
    id: 256, day: 8, word: "authority", phonetic: "/əˈθɔːrəti/", meaning: "n. 권위, 권한, 인가, 당국",
    example: "Only the manager has the authority to approve this request.",
    exampleTranslation: "오직 매니저만이 이 요청을 승인할 권한을 가지고 있다."
  },
  {
    id: 257, day: 8, word: "automatic", phonetic: "/ˌɔːtəˈmætɪk/", meaning: "a. 자동의, 무의식적인",
    example: "Breathing is an automatic function of the body.",
    exampleTranslation: "호흡은 신체의 무의식적인 기능이다."
  },
  {
    id: 258, day: 8, word: "available", phonetic: "/əˈveɪləbl/", meaning: "a. 이용 가능한, 시간이 있는",
    example: "Are there any tickets available for tonight's concert?",
    exampleTranslation: "오늘 밤 콘서트에 이용 가능한 표가 있습니까?"
  },
  {
    id: 259, day: 8, word: "average", phonetic: "/ˈævərɪdʒ/", meaning: "a. 평균의, 보통의 / n. 평균",
    example: "The average temperature in July is 28 degrees Celsius.",
    exampleTranslation: "7월의 평균 기온은 섭씨 28도이다."
  },
  {
    id: 260, day: 8, word: "avoid", phonetic: "/əˈvɔɪd/", meaning: "v. 피하다, 예방하다",
    example: "We took a different route to avoid the heavy traffic.",
    exampleTranslation: "우리는 심한 교통 체증을 피하기 위해 다른 경로를 택했다."
  },
  {
    id: 261, day: 8, word: "awake", phonetic: "/əˈweɪk/", meaning: "a. 깨어 있는 / v. 깨다, 깨우다",
    example: "The loud noise kept me awake all night.",
    exampleTranslation: "큰 소음 때문에 나는 밤새 깨어 있었다."
  },
  {
    id: 262, day: 8, word: "aware", phonetic: "/əˈwer/", meaning: "a. 알고 있는, 의식하는",
    tip: "💡 be aware of (~을 알고 있다)",
    example: "Are you fully aware of the consequences of your actions?",
    exampleTranslation: "당신은 당신의 행동의 결과에 대해 완전히 의식하고 있습니까?"
  },
  {
    id: 263, day: 8, word: "awful", phonetic: "/ˈɔːfl/", meaning: "a. 끔찍한, 지독한",
    example: "The weather was so awful that we stayed indoors all day.",
    exampleTranslation: "날씨가 너무 끔찍해서 우리는 하루 종일 실내에 머물렀다."
  },
  {
    id: 264, day: 8, word: "awkward", phonetic: "/ˈɔːkwərd/", meaning: "a. 어색한, 서투른",
    example: "There was an awkward silence after he asked the question.",
    exampleTranslation: "그가 질문을 한 후 어색한 침묵이 흘렀다."
  },
  {
    id: 265, day: 8, word: "ban", phonetic: "/bæn/", meaning: "v. 금지하다 / n. 금지",
    example: "The government decided to ban smoking in all public places.",
    exampleTranslation: "정부는 모든 공공장소에서 흡연을 금지하기로 결정했다."
  },
  {
    id: 266, day: 8, word: "bankrupt", phonetic: "/ˈbæŋkrʌpt/", meaning: "a. 파산한",
    example: "The company went bankrupt after years of poor management.",
    exampleTranslation: "그 회사는 수년간의 부실 경영 끝에 파산했다."
  },
  {
    id: 267, day: 8, word: "barely", phonetic: "/ˈberli/", meaning: "ad. 간신히, 거의 ~아니게",
    example: "He spoke so softly that I could barely hear him.",
    exampleTranslation: "그는 너무 작게 말해서 나는 그의 말을 거의 들을 수 없었다."
  },
  {
    id: 268, day: 8, word: "bargain", phonetic: "/ˈbɑːrɡən/", meaning: "n. 싸게 산 물건, 흥정 / v. 흥정하다",
    example: "At 10 dollars, this shirt is a real bargain.",
    exampleTranslation: "10달러라면 이 셔츠는 정말 싸게 산 것이다."
  },
  {
    id: 269, day: 8, word: "barrier", phonetic: "/ˈbæriər/", meaning: "n. 장벽, 장애물",
    example: "Language can be a major barrier to communication.",
    exampleTranslation: "언어는 의사소통에 주요한 장벽이 될 수 있다."
  },
  {
    id: 270, day: 8, word: "behave", phonetic: "/bɪˈheɪv/", meaning: "v. 행동하다, 예의 바르게 처신하다",
    example: "The children were told to behave themselves at the restaurant.",
    exampleTranslation: "아이들은 식당에서 예의 바르게 행동하라는 말을 들었다."
  },
  {
    id: 271, day: 8, word: "behalf", phonetic: "/bɪˈhæf/", meaning: "n. 이익, 원조, 대표",
    tip: "💡 on behalf of (~을 대신하여, 대표하여)",
    example: "I am accepting this award on behalf of my entire team.",
    exampleTranslation: "저는 우리 팀 전체를 대표하여 이 상을 받습니다."
  },
  {
    id: 272, day: 8, word: "belong", phonetic: "/bɪˈlɔːŋ/", meaning: "v. 소속되다, 속하다",
    example: "The beautiful islands belong to Greece.",
    exampleTranslation: "그 아름다운 섬들은 그리스에 속해 있다."
  },
{
    id: 273, day: 9, word: "bias", phonetic: "/ˈbaɪəs/", meaning: "n. 편견, 편향",
    example: "The news report was heavily influenced by political bias.",
    exampleTranslation: "그 뉴스 보도는 정치적 편견에 크게 영향을 받았다."
  },
  {
    id: 274, day: 9, word: "bilingual", phonetic: "/ˌbaɪˈlɪŋɡwəl/", meaning: "a. 두 개 언어를 할 줄 아는",
    example: "Growing up in Canada, she became bilingual in English and French.",
    exampleTranslation: "캐나다에서 자라면서 그녀는 영어와 불어 두 개 언어를 할 줄 알게 되었다."
  },
  {
    id: 275, day: 9, word: "biological", phonetic: "/ˌbaɪəˈlɑːdʒɪkl/", meaning: "a. 생물학적인",
    example: "Eating and sleeping are basic biological needs.",
    exampleTranslation: "먹고 자는 것은 기본적인 생물학적 욕구이다."
  },
  {
    id: 276, day: 9, word: "blame", phonetic: "/bleɪm/", meaning: "v. 비난하다, ~의 탓으로 돌리다",
    example: "Don't blame me for your own mistakes.",
    exampleTranslation: "너 자신의 실수를 내 탓으로 돌리지 마라."
  },
  {
    id: 277, day: 9, word: "blend", phonetic: "/blend/", meaning: "v. 섞다, 혼합하다 / n. 혼합물",
    example: "Blend the sugar and butter until the mixture is smooth.",
    exampleTranslation: "혼합물이 부드러워질 때까지 설탕과 버터를 섞으세요."
  },
  {
    id: 278, day: 9, word: "block", phonetic: "/blɑːk/", meaning: "v. 막다, 차단하다 / n. 구역, 블록",
    example: "A fallen tree blocked the road entirely.",
    exampleTranslation: "쓰러진 나무가 길을 완전히 막았다."
  },
  {
    id: 279, day: 9, word: "blossom", phonetic: "/ˈblɑːsəm/", meaning: "n. 꽃 / v. 꽃이 피다, 발달하다",
    example: "The cherry blossoms look beautiful in the spring.",
    exampleTranslation: "봄에는 벚꽃이 아름다워 보인다."
  },
  {
    id: 280, day: 9, word: "boast", phonetic: "/boʊst/", meaning: "v. 자랑하다, 뽐내다",
    example: "He likes to boast about his achievements.",
    exampleTranslation: "그는 자신의 성취에 대해 자랑하기를 좋아한다."
  },
  {
    id: 281, day: 9, word: "bold", phonetic: "/boʊld/", meaning: "a. 대담한, 용감한, 굵은",
    example: "It was a bold decision to start his own business.",
    exampleTranslation: "자신의 사업을 시작한 것은 대담한 결정이었다."
  },
  {
    id: 282, day: 9, word: "bond", phonetic: "/bɑːnd/", meaning: "n. 유대, 결속, 채권",
    example: "The shared experience created a strong bond between them.",
    exampleTranslation: "공유된 경험이 그들 사이에 강한 유대를 형성했다."
  },
  {
    id: 283, day: 9, word: "border", phonetic: "/ˈbɔːrdər/", meaning: "n. 국경, 경계",
    example: "We had to show our passports at the border.",
    exampleTranslation: "우리는 국경에서 여권을 보여주어야 했다."
  },
  {
    id: 284, day: 9, word: "bore", phonetic: "/bɔːr/", meaning: "v. 지루하게 하다 / n. 지루한 사람(것)",
    example: "The long lecture bored the students to death.",
    exampleTranslation: "그 긴 강의는 학생들을 지루해 죽게 만들었다."
  },
  {
    id: 285, day: 9, word: "bother", phonetic: "/ˈbɑːðər/", meaning: "v. 괴롭히다, 신경 쓰이게 하다",
    example: "Please don't bother me while I'm studying.",
    exampleTranslation: "내가 공부하는 동안 나를 괴롭히지 마라."
  },
  {
    id: 286, day: 9, word: "bound", phonetic: "/baʊnd/", meaning: "a. ~할 것 같은, 얽매인",
    tip: "💡 be bound to V (반드시 ~하다, ~할 가능성이 높다)",
    example: "If you keep practicing, you are bound to improve.",
    exampleTranslation: "계속 연습한다면, 너는 반드시 향상될 것이다."
  },
  {
    id: 287, day: 9, word: "boundary", phonetic: "/ˈbaʊndri/", meaning: "n. 경계(선), 한계",
    example: "The river forms the natural boundary between the two countries.",
    exampleTranslation: "그 강은 두 나라 사이의 자연적인 경계를 이룬다."
  },
  {
    id: 288, day: 9, word: "branch", phonetic: "/bræntʃ/", meaning: "n. 나뭇가지, 지점, 분야",
    example: "The bank is opening a new branch in our city.",
    exampleTranslation: "그 은행은 우리 도시에 새로운 지점을 열고 있다."
  },
  {
    id: 289, day: 9, word: "brave", phonetic: "/breɪv/", meaning: "a. 용감한",
    example: "It was brave of you to speak the truth.",
    exampleTranslation: "진실을 말한 것은 너의 용감한 행동이었다."
  },
  {
    id: 290, day: 9, word: "breakthrough", phonetic: "/ˈbreɪkθruː/", meaning: "n. 돌파구, 큰 발전",
    example: "Scientists have made a major breakthrough in cancer treatment.",
    exampleTranslation: "과학자들이 암 치료에 있어 주요한 돌파구를 마련했다."
  },
  {
    id: 291, day: 9, word: "breed", phonetic: "/briːd/", meaning: "v. 번식하다, 사육하다 / n. 품종",
    example: "Mosquitoes breed in stagnant water.",
    exampleTranslation: "모기는 고인 물에서 번식한다."
  },
  {
    id: 292, day: 9, word: "brilliant", phonetic: "/ˈbrɪliənt/", meaning: "a. 훌륭한, 눈부신, 명석한",
    example: "She has a brilliant mind for mathematics.",
    exampleTranslation: "그녀는 수학에 명석한 두뇌를 가지고 있다."
  },
  {
    id: 293, day: 9, word: "broadcast", phonetic: "/ˈbrɔːdkæst/", meaning: "v. 방송하다 / n. 방송",
    example: "The speech will be broadcast live on national television.",
    exampleTranslation: "그 연설은 전국 텔레비전에 생중계로 방송될 것이다."
  },
  {
    id: 294, day: 9, word: "budget", phonetic: "/ˈbʌdʒɪt/", meaning: "n. 예산",
    example: "We need to stay within our travel budget.",
    exampleTranslation: "우리는 여행 예산 내에 머물러야 한다."
  },
  {
    id: 295, day: 9, word: "burden", phonetic: "/ˈbɜːrdn/", meaning: "n. 짐, 부담 / v. 부담을 지우다",
    example: "I don't want to be a burden to my family.",
    exampleTranslation: "나는 내 가족에게 부담이 되고 싶지 않다."
  },
  {
    id: 296, day: 9, word: "calculate", phonetic: "/ˈkælkjuleɪt/", meaning: "v. 계산하다, 추정하다",
    example: "You need to calculate the total cost before buying.",
    exampleTranslation: "당신은 구매하기 전에 총비용을 계산해야 합니다."
  },
  {
    id: 297, day: 9, word: "calm", phonetic: "/kɑːm/", meaning: "a. 침착한, 차분한 / v. 진정시키다",
    example: "Please try to remain calm during the emergency.",
    exampleTranslation: "비상 상황 동안 차분함을 유지하려고 노력해 주세요."
  },
  {
    id: 298, day: 9, word: "campaign", phonetic: "/kæmˈpeɪn/", meaning: "n. 캠페인, 선거 운동",
    example: "The government launched a new campaign to reduce plastic waste.",
    exampleTranslation: "정부는 플라스틱 쓰레기를 줄이기 위한 새로운 캠페인을 시작했다."
  },
  {
    id: 299, day: 9, word: "cancel", phonetic: "/ˈkænsl/", meaning: "v. 취소하다",
    example: "The flight was canceled due to heavy fog.",
    exampleTranslation: "짙은 안개로 인해 비행이 취소되었다."
  },
  {
    id: 300, day: 9, word: "candidate", phonetic: "/ˈkændɪdət/", meaning: "n. 후보자, 지원자",
    example: "She is the best candidate for the job.",
    exampleTranslation: "그녀는 그 일자리를 위한 최고의 후보자이다."
  },
  {
    id: 301, day: 9, word: "capable", phonetic: "/ˈkeɪpəbl/", meaning: "a. 유능한, ~할 수 있는",
    tip: "💡 be capable of (~할 능력이 있다)",
    example: "He is fully capable of handling the project on his own.",
    exampleTranslation: "그는 혼자서 그 프로젝트를 처리할 능력이 충분히 있다."
  },
  {
    id: 302, day: 9, word: "capacity", phonetic: "/kəˈpæsəti/", meaning: "n. 용량, 수용력, 능력",
    example: "The stadium has a seating capacity of 50,000.",
    exampleTranslation: "그 경기장은 5만 명의 좌석 수용력을 가지고 있다."
  },
  {
    id: 303, day: 9, word: "capital", phonetic: "/ˈkæpɪtl/", meaning: "n. 수도, 자본, 대문자 / a. 사형의",
    example: "Seoul is the capital city of South Korea.",
    exampleTranslation: "서울은 대한민국의 수도이다."
  },
  {
    id: 304, day: 9, word: "capture", phonetic: "/ˈkæptʃər/", meaning: "v. 포착하다, 사로잡다 / n. 포획",
    example: "The photographer managed to capture the beautiful sunset.",
    exampleTranslation: "사진작가는 아름다운 일몰을 포착하는 데 성공했다."
  },
  {
    id: 305, day: 9, word: "career", phonetic: "/kəˈrɪr/", meaning: "n. 직업, 경력",
    example: "She hopes to pursue a career in medicine.",
    exampleTranslation: "그녀는 의학 분야에서의 직업을 추구하기를 희망한다."
  },
  {
    id: 306, day: 9, word: "category", phonetic: "/ˈkætəɡɔːri/", meaning: "n. 범주, 부문",
    example: "These items fall into the category of office supplies.",
    exampleTranslation: "이 물품들은 사무용품 범주에 속한다."
  },
  {
    id: 307, day: 10, word: "cause", phonetic: "/kɔːz/", meaning: "n. 원인, 대의명분 / v. 야기하다",
    example: "Smoking is a major cause of lung cancer.",
    exampleTranslation: "흡연은 폐암의 주요 원인이다."
  },
  {
    id: 308, day: 10, word: "caution", phonetic: "/ˈkɔːʃn/", meaning: "n. 조심, 주의 / v. 경고하다",
    example: "Proceed with caution when driving on icy roads.",
    exampleTranslation: "빙판길에서 운전할 때는 주의해서 진행하라."
  },
  {
    id: 309, day: 10, word: "cease", phonetic: "/siːs/", meaning: "v. 그만두다, 중지하다",
    example: "The rain finally ceased later in the afternoon.",
    exampleTranslation: "비는 오후 늦게 마침내 그쳤다."
  },
  {
    id: 310, day: 10, word: "celebrate", phonetic: "/ˈselɪbreɪt/", meaning: "v. 기념하다, 축하하다",
    example: "We had a party to celebrate his 50th birthday.",
    exampleTranslation: "우리는 그의 50번째 생일을 축하하기 위해 파티를 열었다."
  },
  {
    id: 311, day: 10, word: "cell", phonetic: "/sel/", meaning: "n. 세포, 감방, (엑셀의) 칸",
    example: "The human body is made up of billions of cells.",
    exampleTranslation: "인간의 몸은 수십억 개의 세포로 이루어져 있다."
  },
  {
    id: 312, day: 10, word: "central", phonetic: "/ˈsentrəl/", meaning: "a. 중심의, 중앙의",
    example: "The library is located in the central part of the city.",
    exampleTranslation: "도서관은 도시의 중심부에 위치해 있다."
  },
  {
    id: 313, day: 10, word: "century", phonetic: "/ˈsentʃəri/", meaning: "n. 100년, 1세기",
    example: "We are living in the 21st century.",
    exampleTranslation: "우리는 21세기에 살고 있다."
  },
  {
    id: 314, day: 10, word: "ceremony", phonetic: "/ˈserəmoʊni/", meaning: "n. 의식, 식",
    example: "The wedding ceremony will take place in the garden.",
    exampleTranslation: "결혼식은 정원에서 열릴 것이다."
  },
  {
    id: 315, day: 10, word: "certain", phonetic: "/ˈsɜːrtn/", meaning: "a. 확실한, 어떤",
    example: "I am certain that we will win the game.",
    exampleTranslation: "나는 우리가 경기에서 이길 것이라고 확신한다."
  },
  {
    id: 316, day: 10, word: "challenge", phonetic: "/ˈtʃælɪndʒ/", meaning: "n. 도전, 난제 / v. 도전하다",
    example: "Learning a new language is always a great challenge.",
    exampleTranslation: "새로운 언어를 배우는 것은 항상 큰 도전이다."
  },
  {
    id: 317, day: 10, word: "characteristic", phonetic: "/ˌkærəktəˈrɪstɪk/", meaning: "n. 특징, 특성 / a. 특유의",
    example: "Patience is a necessary characteristic for a teacher.",
    exampleTranslation: "인내심은 교사에게 필수적인 특징이다."
  },
  {
    id: 318, day: 10, word: "charge", phonetic: "/tʃɑːrdʒ/", meaning: "v. 청구하다, 기소하다, 충전하다 / n. 요금, 책임",
    tip: "💡 in charge of (~을 책임지고 있는)",
    example: "How much do you charge for delivery?",
    exampleTranslation: "배달 요금은 얼마를 청구하나요?"
  },
  {
    id: 319, day: 10, word: "charity", phonetic: "/ˈtʃærəti/", meaning: "n. 자선 (단체)",
    example: "She donated a large sum of money to a local charity.",
    exampleTranslation: "그녀는 지역 자선 단체에 많은 돈을 기부했다."
  },
  {
    id: 320, day: 10, word: "charm", phonetic: "/tʃɑːrm/", meaning: "n. 매력 / v. 매혹하다",
    example: "The small town has a lot of rural charm.",
    exampleTranslation: "그 작은 마을은 시골의 매력을 많이 가지고 있다."
  },
  {
    id: 321, day: 10, word: "chase", phonetic: "/tʃeɪs/", meaning: "v. 뒤쫓다, 추적하다 / n. 추적",
    example: "The dog was chasing a rabbit across the field.",
    exampleTranslation: "개가 들판을 가로질러 토끼를 뒤쫓고 있었다."
  },
  {
    id: 322, day: 10, word: "chemical", phonetic: "/ˈkemɪkl/", meaning: "a. 화학의, 화학적인 / n. 화학 물질",
    example: "The brain releases certain chemicals when we exercise.",
    exampleTranslation: "우리가 운동할 때 뇌는 특정 화학 물질을 방출한다."
  },
  {
    id: 323, day: 10, word: "cherish", phonetic: "/ˈtʃerɪʃ/", meaning: "v. 소중히 여기다, 간직하다",
    example: "I will always cherish the memories of our trip together.",
    exampleTranslation: "나는 우리가 함께한 여행의 기억을 항상 소중히 간직할 것이다."
  },
  {
    id: 324, day: 10, word: "chief", phonetic: "/tʃiːf/", meaning: "a. 주된, 최고위자인 / n. 우두머리",
    example: "The chief reason for the delay was the bad weather.",
    exampleTranslation: "지연의 주된 이유는 나쁜 날씨였다."
  },
  {
    id: 325, day: 10, word: "childhood", phonetic: "/ˈtʃaɪldhʊd/", meaning: "n. 어린 시절",
    example: "He spent most of his childhood in a small village.",
    exampleTranslation: "그는 어린 시절의 대부분을 작은 마을에서 보냈다."
  },
  {
    id: 326, day: 10, word: "chill", phonetic: "/tʃɪl/", meaning: "n. 냉기, 오한 / v. 춥게 만들다",
    example: "There is a sudden chill in the air this morning.",
    exampleTranslation: "오늘 아침 공기에 갑작스러운 냉기가 있다."
  },
  {
    id: 327, day: 10, word: "circuit", phonetic: "/ˈsɜːrkɪt/", meaning: "n. 순환, 회로",
    example: "The electricity flows through a complex circuit.",
    exampleTranslation: "전기는 복잡한 회로를 통해 흐른다."
  },
  {
    id: 328, day: 10, word: "circulate", phonetic: "/ˈsɜːrkjəleɪt/", meaning: "v. 순환하다, 유포되다",
    example: "Blood circulates throughout the human body.",
    exampleTranslation: "혈액은 인체 전체를 순환한다."
  },
  {
    id: 329, day: 10, word: "civil", phonetic: "/ˈsɪvl/", meaning: "a. 시민의, 민간의",
    example: "Every citizen has civil rights that must be protected.",
    exampleTranslation: "모든 시민은 보호받아야 할 시민권을 가지고 있다."
  },
  {
    id: 330, day: 10, word: "claim", phonetic: "/kleɪm/", meaning: "v. 주장하다, 요구하다 / n. 주장",
    example: "He claimed that he had seen a UFO last night.",
    exampleTranslation: "그는 어젯밤에 UFO를 보았다고 주장했다."
  },
  {
    id: 331, day: 10, word: "classic", phonetic: "/ˈklæsɪk/", meaning: "a. 고전적인, 전형적인 / n. 고전",
    example: "This building is a classic example of Gothic architecture.",
    exampleTranslation: "이 건물은 고딕 건축의 고전적인 예이다."
  },
  {
    id: 332, day: 10, word: "classify", phonetic: "/ˈklæsɪfaɪ/", meaning: "v. 분류하다",
    example: "Biologists classify animals into different groups.",
    exampleTranslation: "생물학자들은 동물을 다양한 그룹으로 분류한다."
  },
  {
    id: 333, day: 10, word: "climate", phonetic: "/ˈklaɪmət/", meaning: "n. 기후",
    example: "Tropical climates are usually hot and humid.",
    exampleTranslation: "열대 기후는 보통 덥고 습하다."
  },
  {
    id: 334, day: 10, word: "clue", phonetic: "/kluː/", meaning: "n. 단서, 실마리",
    example: "The police have found a vital clue to solve the case.",
    exampleTranslation: "경찰은 사건을 해결할 중요한 단서를 찾았다."
  },
  {
    id: 335, day: 10, word: "collapse", phonetic: "/kəˈlæps/", meaning: "v. 무너지다, 붕괴하다 / n. 붕괴",
    example: "The roof collapsed under the weight of the heavy snow.",
    exampleTranslation: "폭설의 무게를 이기지 못하고 지붕이 무너졌다."
  },
  {
    id: 336, day: 10, word: "colleague", phonetic: "/ˈkɑːliːɡ/", meaning: "n. 동료",
    example: "I discussed the project with my colleagues at work.",
    exampleTranslation: "나는 직장 동료들과 그 프로젝트에 대해 논의했다."
  },
  {
    id: 337, day: 10, word: "collect", phonetic: "/kəˈlekt/", meaning: "v. 모으다, 수집하다",
    example: "She likes to collect rare stamps from around the world.",
    exampleTranslation: "그녀는 전 세계의 희귀한 우표를 수집하는 것을 좋아한다."
  },
  {
    id: 338, day: 10, word: "colony", phonetic: "/ˈkɑːləni/", meaning: "n. 식민지, (동식물의) 군집",
    example: "Ants live in large colonies with a complex social structure.",
    exampleTranslation: "개미는 복잡한 사회 구조를 가진 거대한 군집을 이루어 산다."
  },
  {
    id: 339, day: 10, word: "column", phonetic: "/ˈkɑːləm/", meaning: "n. 기둥, (신문 등의) 칼럼, 세로 단",
    example: "The ancient temple is supported by tall marble columns.",
    exampleTranslation: "그 고대 신전은 높은 대리석 기둥들에 의해 지탱된다."
  },
  {
    id: 340, day: 10, word: "combat", phonetic: "/ˈkɑːmbæt/", meaning: "n. 전투 / v. 방지하다, 싸우다",
    example: "We must take action to combat climate change.",
    exampleTranslation: "우리는 기후 변화를 방지하기 위해 조치를 취해야 한다."
  },
{
    id: 341, day: 11, word: "combine", phonetic: "/kəmˈbaɪn/", meaning: "v. 결합하다, 갖추다",
    example: "Hydrogen and oxygen combine to form water.",
    exampleTranslation: "수소와 산소가 결합하여 물을 형성한다."
  },
  {
    id: 342, day: 11, word: "command", phonetic: "/kəˈmænd/", meaning: "v. 명령하다, 지휘하다 / n. 명령",
    example: "The officer commanded his men to shoot.",
    exampleTranslation: "장교는 부하들에게 사격하라고 명령했다."
  },
  {
    id: 343, day: 11, word: "comment", phonetic: "/ˈkɑːment/", meaning: "n. 논평, 언급 / v. 논평하다",
    example: "She refused to make any comment on the situation.",
    exampleTranslation: "그녀는 그 상황에 대해 어떤 언급도 하기를 거부했다."
  },
  {
    id: 344, day: 11, word: "commit", phonetic: "/kəˈmɪt/", meaning: "v. (죄 등을) 저지르다, 전념하다",
    example: "He was sent to prison for a crime he didn't commit.",
    exampleTranslation: "그는 자신이 저지르지 않은 범죄로 감옥에 보내졌다."
  },
  {
    id: 345, day: 11, word: "committee", phonetic: "/kəˈmɪti/", meaning: "n. 위원회",
    example: "The committee has decided to reject the proposal.",
    exampleTranslation: "위원회는 그 제안을 거절하기로 결정했다."
  },
  {
    id: 346, day: 11, word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", meaning: "v. 의사소통하다, 전달하다",
    example: "Dolphins use sound to communicate with each other.",
    exampleTranslation: "돌고래는 서로 의사소통하기 위해 소리를 사용한다."
  },
  {
    id: 347, day: 11, word: "community", phonetic: "/kəˈmjuːnəti/", meaning: "n. 지역 사회, 공동체",
    example: "The festival was organized by the local community.",
    exampleTranslation: "그 축제는 지역 사회에 의해 조직되었다."
  },
  {
    id: 348, day: 11, word: "companion", phonetic: "/kəmˈpæniən/", meaning: "n. 동반자, 동행, 친구",
    example: "His dog was his constant companion during the trip.",
    exampleTranslation: "그의 개는 여행 동안 그의 변함없는 동반자였다."
  },
  {
    id: 349, day: 11, word: "company", phonetic: "/ˈkʌmpəni/", meaning: "n. 회사, 동반, 일행",
    tip: "💡 keep someone company (~의 곁에 있어 주다)",
    example: "I enjoyed her company on the long train journey.",
    exampleTranslation: "나는 긴 기차 여행에서 그녀의 동행이 즐거웠다."
  },
  {
    id: 350, day: 11, word: "compare", phonetic: "/kəmˈper/", meaning: "v. 비교하다, 비유하다",
    tip: "💡 compare A with/to B (A를 B와 비교하다)",
    example: "If you compare the two prices, this one is much cheaper.",
    exampleTranslation: "두 가격을 비교해 보면, 이것이 훨씬 더 싸다."
  },
  {
    id: 351, day: 11, word: "compel", phonetic: "/kəmˈpel/", meaning: "v. 강요하다, ~하게 만들다",
    example: "The heavy rain compelled us to stay indoors.",
    exampleTranslation: "폭우가 우리를 실내에 머물도록 강요했다."
  },
  {
    id: 352, day: 11, word: "compete", phonetic: "/kəmˈpiːt/", meaning: "v. 경쟁하다, 겨루다",
    example: "Several companies are competing for the contract.",
    exampleTranslation: "여러 회사가 그 계약을 위해 경쟁하고 있다."
  },
  {
    id: 353, day: 11, word: "competent", phonetic: "/ˈkɑːmpɪtənt/", meaning: "a. 유능한, 자격이 있는",
    example: "She is a highly competent manager with years of experience.",
    exampleTranslation: "그녀는 수년간의 경험을 가진 매우 유능한 매니저이다."
  },
  {
    id: 354, day: 11, word: "complain", phonetic: "/kəmˈpleɪn/", meaning: "v. 불평하다, 항의하다",
    example: "Customers complained about the poor quality of the food.",
    exampleTranslation: "고객들은 형편없는 음식의 질에 대해 불평했다."
  },
  {
    id: 355, day: 11, word: "complete", phonetic: "/kəmˈpliːt/", meaning: "v. 완료하다 / a. 완전한",
    example: "It took him two years to complete the novel.",
    exampleTranslation: "그가 소설을 완료하는 데 2년이 걸렸다."
  },
  {
    id: 356, day: 11, word: "complicate", phonetic: "/ˈkɑːmplɪkeɪt/", meaning: "v. 복잡하게 만들다",
    example: "Adding more rules will only complicate the situation.",
    exampleTranslation: "더 많은 규칙을 추가하는 것은 상황을 복잡하게 만들 뿐이다."
  },
  {
    id: 357, day: 11, word: "compliment", phonetic: "/ˈkɑːmplɪmənt/", meaning: "n. 칭찬 / v. 칭찬하다",
    example: "He gave her a nice compliment on her new haircut.",
    exampleTranslation: "그는 그녀의 새로운 헤어스타일에 대해 멋진 칭찬을 했다."
  },
  {
    id: 358, day: 11, word: "compose", phonetic: "/kəmˈpoʊz/", meaning: "v. 구성하다, 작곡하다",
    example: "Water is composed of hydrogen and oxygen.",
    exampleTranslation: "물은 수소와 산소로 구성되어 있다."
  },
  {
    id: 359, day: 11, word: "compound", phonetic: "/ˈkɑːmpaʊnd/", meaning: "n. 화합물, 복합체 / a. 복합의",
    example: "Salt is a chemical compound of sodium and chlorine.",
    exampleTranslation: "소금은 나트륨과 염소의 화학적 화합물이다."
  },
  {
    id: 360, day: 11, word: "compromise", phonetic: "/ˈkɑːmprəmaɪz/", meaning: "n. 타협 / v. 타협하다",
    example: "Both sides had to make a compromise to reach an agreement.",
    exampleTranslation: "합의에 도달하기 위해 양측 모두 타협을 해야 했다."
  },
  {
    id: 361, day: 11, word: "conceal", phonetic: "/kənˈsiːl/", meaning: "v. 숨기다, 감추다",
    example: "He tried to conceal his nervousness with a smile.",
    exampleTranslation: "그는 미소로 자신의 초조함을 숨기려고 노력했다."
  },
  {
    id: 362, day: 11, word: "concede", phonetic: "/kənˈsiːd/", meaning: "v. (마지못해) 인정하다, 양보하다",
    example: "After a long debate, he finally conceded that she was right.",
    exampleTranslation: "긴 토론 끝에 그는 마침내 그녀가 옳다는 것을 인정했다."
  },
  {
    id: 363, day: 11, word: "conceive", phonetic: "/kənˈsiːv/", meaning: "v. (마음속으로) 품다, 상상하다",
    example: "It is hard to conceive of a world without the internet.",
    exampleTranslation: "인터넷이 없는 세상을 상상하기는 어렵다."
  },
  {
    id: 364, day: 11, word: "concentrate", phonetic: "/ˈkɑːnsntreɪt/", meaning: "v. 집중하다, 모으다",
    example: "I couldn't concentrate on my work because of the noise.",
    exampleTranslation: "나는 소음 때문에 일에 집중할 수 없었다."
  },
  {
    id: 365, day: 11, word: "concept", phonetic: "/ˈkɑːnsept/", meaning: "n. 개념, 생각",
    example: "The concept of time travel has always fascinated me.",
    exampleTranslation: "시간 여행이라는 개념은 항상 나를 매혹시켰다."
  },
  {
    id: 366, day: 11, word: "concern", phonetic: "/kənˈsɜːrn/", meaning: "n. 우려, 걱정 / v. 걱정시키다",
    example: "There is growing concern about the effects of climate change.",
    exampleTranslation: "기후 변화의 영향에 대한 우려가 커지고 있다."
  },
  {
    id: 367, day: 11, word: "conclude", phonetic: "/kənˈkluːd/", meaning: "v. 결론을 내리다, 끝내다",
    example: "The report concluded that the program had been a success.",
    exampleTranslation: "그 보고서는 그 프로그램이 성공적이었다고 결론을 내렸다."
  },
  {
    id: 368, day: 11, word: "concrete", phonetic: "/ˈkɑːnkriːt/", meaning: "a. 구체적인, 콘크리트로 된",
    example: "We need concrete evidence before taking any legal action.",
    exampleTranslation: "우리는 어떠한 법적 조치를 취하기 전에 구체적인 증거가 필요하다."
  },
  {
    id: 369, day: 11, word: "condemn", phonetic: "/kənˈdem/", meaning: "v. 강력히 비난하다, 선고를 내리다",
    example: "The government condemned the terrorist attack.",
    exampleTranslation: "정부는 그 테러 공격을 강력히 비난했다."
  },
  {
    id: 370, day: 11, word: "condition", phonetic: "/kənˈdɪʃn/", meaning: "n. 조건, 상태, 환경",
    example: "The car is ten years old, but it is still in good condition.",
    exampleTranslation: "그 차는 10년이 되었지만 여전히 좋은 상태이다."
  },
  {
    id: 371, day: 11, word: "conduct", phonetic: "/kənˈdʌkt/", meaning: "v. 수행하다, 지휘하다 / n. 행위",
    example: "They are conducting an experiment to test the new drug.",
    exampleTranslation: "그들은 신약을 테스트하기 위해 실험을 수행하고 있다."
  },
  {
    id: 372, day: 11, word: "confer", phonetic: "/kənˈfɜːr/", meaning: "v. 상의하다, (상·학위를) 수여하다",
    example: "The principal needs to confer with the teachers before making a decision.",
    exampleTranslation: "교장 선생님은 결정을 내리기 전에 교사들과 상의해야 한다."
  },
  {
    id: 373, day: 11, word: "confess", phonetic: "/kənˈfes/", meaning: "v. 자백하다, 고백하다",
    example: "The thief finally confessed to stealing the jewelry.",
    exampleTranslation: "그 도둑은 마침내 보석을 훔쳤다고 자백했다."
  },
  {
    id: 374, day: 11, word: "confident", phonetic: "/ˈkɑːnfɪdənt/", meaning: "a. 자신감 있는, 확신하는",
    example: "She was confident that she would pass the driving test.",
    exampleTranslation: "그녀는 운전면허 시험에 합격할 것이라고 확신했다."
  },
  {
    id: 375, day: 12, word: "confine", phonetic: "/kənˈfaɪn/", meaning: "v. 국한하다, 가두다",
    example: "Please confine your discussion to the topic at hand.",
    exampleTranslation: "토론을 당면한 주제에 국한해 주십시오."
  },
  {
    id: 376, day: 12, word: "conflict", phonetic: "/ˈkɑːnflɪkt/", meaning: "n. 갈등, 충돌 / v. 상충하다",
    example: "There is an ongoing conflict between the two nations.",
    exampleTranslation: "두 국가 사이에 계속되는 갈등이 있다."
  },
  {
    id: 377, day: 12, word: "conform", phonetic: "/kənˈfɔːrm/", meaning: "v. 순응하다, 따르다",
    tip: "💡 conform to/with (~에 순응하다, 따르다)",
    example: "All students must conform to the school dress code.",
    exampleTranslation: "모든 학생들은 학교 복장 규정에 순응해야 한다."
  },
  {
    id: 378, day: 12, word: "confront", phonetic: "/kənˈfrʌnt/", meaning: "v. 직면하다, 맞서다",
    example: "She decided to confront the bully and tell him to stop.",
    exampleTranslation: "그녀는 괴롭히는 아이에게 맞서서 그만두라고 말하기로 결정했다."
  },
  {
    id: 379, day: 12, word: "confuse", phonetic: "/kənˈfjuːz/", meaning: "v. 혼동하다, 혼란스럽게 하다",
    example: "The complicated instructions only confused me further.",
    exampleTranslation: "복잡한 지시사항들은 나를 더 혼란스럽게 할 뿐이었다."
  },
  {
    id: 380, day: 12, word: "congratulate", phonetic: "/kənˈɡrætʃuleɪt/", meaning: "v. 축하하다",
    example: "I would like to congratulate you on your graduation.",
    exampleTranslation: "당신의 졸업을 축하하고 싶습니다."
  },
  {
    id: 381, day: 12, word: "connect", phonetic: "/kəˈnekt/", meaning: "v. 연결하다, 잇다",
    example: "This bridge connects the island to the mainland.",
    exampleTranslation: "이 다리는 섬과 본토를 연결한다."
  },
  {
    id: 382, day: 12, word: "conquer", phonetic: "/ˈkɑːŋkər/", meaning: "v. 정복하다, 이기다",
    example: "The general's army conquered the entire region.",
    exampleTranslation: "장군의 군대는 그 지역 전체를 정복했다."
  },
  {
    id: 383, day: 12, word: "consent", phonetic: "/kənˈsent/", meaning: "n. 동의, 허락 / v. 동의하다",
    example: "You cannot use my photo without my written consent.",
    exampleTranslation: "나의 서면 동의 없이 내 사진을 사용할 수 없다."
  },
  {
    id: 384, day: 12, word: "conserve", phonetic: "/kənˈsɜːrv/", meaning: "v. 보존하다, 보호하다, 아끼다",
    example: "We must conserve energy to protect the environment.",
    exampleTranslation: "우리는 환경을 보호하기 위해 에너지를 보존해야 한다."
  },
  {
    id: 385, day: 12, word: "consider", phonetic: "/kənˈsɪdər/", meaning: "v. 고려하다, 여기다",
    example: "We will consider your request and let you know tomorrow.",
    exampleTranslation: "우리는 당신의 요청을 고려하여 내일 알려드리겠습니다."
  },
  {
    id: 386, day: 12, word: "consist", phonetic: "/kənˈsɪst/", meaning: "v. ~로 구성되다",
    tip: "💡 consist of (~로 이루어지다, 수동태로 쓰지 않음)",
    example: "A basketball team consists of five players.",
    exampleTranslation: "농구팀은 5명의 선수로 구성된다."
  },
  {
    id: 387, day: 12, word: "console", phonetic: "/kənˈsoʊl/", meaning: "v. 위로하다 / n. 제어반, 콘솔",
    example: "Nothing could console her after her dog died.",
    exampleTranslation: "그녀의 개가 죽은 후 무엇도 그녀를 위로할 수 없었다."
  },
  {
    id: 388, day: 12, word: "constitute", phonetic: "/ˈkɑːnstɪtuːt/", meaning: "v. 구성하다, ~이 되다",
    example: "Seven days constitute a week.",
    exampleTranslation: "7일이 일주일을 구성한다."
  },
  {
    id: 389, day: 12, word: "construct", phonetic: "/kənˈstrʌkt/", meaning: "v. 건설하다, 조립하다",
    example: "The Romans constructed a vast network of roads.",
    exampleTranslation: "로마인들은 거대한 도로망을 건설했다."
  },
  {
    id: 390, day: 12, word: "consult", phonetic: "/kənˈsʌlt/", meaning: "v. 상담하다, 참고하다",
    example: "If the symptoms persist, consult your doctor.",
    exampleTranslation: "증상이 지속되면 의사와 상담하십시오."
  },
  {
    id: 391, day: 12, word: "contact", phonetic: "/ˈkɑːntækt/", meaning: "n. 연락, 접촉 / v. 연락하다",
    example: "Please feel free to contact me if you have any questions.",
    exampleTranslation: "질문이 있으시면 언제든지 편하게 연락해 주십시오."
  },
  {
    id: 392, day: 12, word: "contagious", phonetic: "/kənˈteɪdʒəs/", meaning: "a. 전염성의, 감염되는",
    example: "The flu is highly contagious and spreads easily.",
    exampleTranslation: "독감은 매우 전염성이 높으며 쉽게 퍼진다."
  },
  {
    id: 393, day: 12, word: "contemporary", phonetic: "/kənˈtempəreri/", meaning: "a. 동시대의, 현대의",
    example: "The museum features an impressive collection of contemporary art.",
    exampleTranslation: "그 미술관은 인상적인 현대 미술 컬렉션을 자랑한다."
  },
  {
    id: 394, day: 12, word: "contend", phonetic: "/kənˈtend/", meaning: "v. 주장하다, 다투다, 겨루다",
    example: "He contended that he was not at the scene of the crime.",
    exampleTranslation: "그는 자신이 범죄 현장에 없었다고 주장했다."
  },
  {
    id: 395, day: 12, word: "content", phonetic: "/kənˈtent/", meaning: "a. 만족하는 / n. 내용물",
    example: "She seemed quite content with her simple life.",
    exampleTranslation: "그녀는 자신의 소박한 삶에 꽤 만족하는 것 같았다."
  },
  {
    id: 396, day: 12, word: "contest", phonetic: "/ˈkɑːntest/", meaning: "n. 대회, 경쟁 / v. 이의를 제기하다",
    example: "He won first prize in the national speech contest.",
    exampleTranslation: "그는 전국 웅변대회에서 1등 상을 받았다."
  },
  {
    id: 397, day: 12, word: "context", phonetic: "/ˈkɑːntekst/", meaning: "n. 문맥, 맥락, 전후 사정",
    example: "Words can have different meanings depending on their context.",
    exampleTranslation: "단어들은 문맥에 따라 다른 의미를 가질 수 있다."
  },
  {
    id: 398, day: 12, word: "continent", phonetic: "/ˈkɑːntɪnənt/", meaning: "n. 대륙",
    example: "Asia is the largest continent in the world.",
    exampleTranslation: "아시아는 세계에서 가장 큰 대륙이다."
  },
  {
    id: 399, day: 12, word: "continue", phonetic: "/kənˈtɪnjuː/", meaning: "v. 계속하다, 이어지다",
    example: "The rain is expected to continue throughout the night.",
    exampleTranslation: "비가 밤새도록 계속될 것으로 예상된다."
  },
  {
    id: 400, day: 12, word: "contrast", phonetic: "/ˈkɑːntræst/", meaning: "n. 대조, 차이 / v. 대조하다",
    example: "The black walls make a sharp contrast with the white ceiling.",
    exampleTranslation: "검은색 벽은 하얀색 천장과 뚜렷한 대조를 이룬다."
  },
  {
    id: 401, day: 12, word: "contribute", phonetic: "/kənˈtrɪbjuːt/", meaning: "v. 기여하다, 기부하다",
    example: "Everyone is encouraged to contribute to the charity fund.",
    exampleTranslation: "모두가 자선 기금에 기부하도록 장려된다."
  },
  {
    id: 402, day: 12, word: "control", phonetic: "/kənˈtroʊl/", meaning: "v. 통제하다, 억제하다 / n. 통제",
    example: "The fire department finally brought the fire under control.",
    exampleTranslation: "소방서는 마침내 화재를 통제하에 두었다(진압했다)."
  },
  {
    id: 403, day: 12, word: "controversy", phonetic: "/ˈkɑːntrəvɜːrsi/", meaning: "n. 논란, 논쟁",
    example: "The new tax policy caused a lot of controversy.",
    exampleTranslation: "새로운 세금 정책은 많은 논란을 일으켰다."
  },
  {
    id: 404, day: 12, word: "convenient", phonetic: "/kənˈviːniənt/", meaning: "a. 편리한, 접근하기 쉬운",
    example: "The subway is the most convenient way to travel around the city.",
    exampleTranslation: "지하철은 도시를 돌아다니기에 가장 편리한 수단이다."
  },
  {
    id: 405, day: 12, word: "convention", phonetic: "/kənˈvenʃn/", meaning: "n. 관습, 대회, 협약",
    example: "In many countries, shaking hands is a social convention.",
    exampleTranslation: "많은 나라에서 악수하는 것은 사회적 관습이다."
  },
  {
    id: 406, day: 12, word: "converge", phonetic: "/kənˈvɜːrdʒ/", meaning: "v. 모여들다, 집중되다",
    example: "Fans converged on the stadium to see the famous singer.",
    exampleTranslation: "팬들은 유명 가수를 보기 위해 경기장으로 모여들었다."
  },
  {
    id: 407, day: 12, word: "convert", phonetic: "/kənˈvɜːrt/", meaning: "v. 전환하다, 개조하다",
    example: "The old factory was converted into modern apartments.",
    exampleTranslation: "오래된 공장이 현대적인 아파트로 개조되었다."
  },
  {
    id: 408, day: 12, word: "convey", phonetic: "/kənˈveɪ/", meaning: "v. 전달하다, 나르다",
    example: "Please convey my best wishes to your family.",
    exampleTranslation: "당신 가족에게 제 안부를 전달해 주세요."
  },
{
    id: 409, day: 13, word: "convince", phonetic: "/kənˈvɪns/", meaning: "v. 납득시키다, 확신시키다",
    example: "I managed to convince him that the plan was safe.",
    exampleTranslation: "나는 그 계획이 안전하다고 그를 간신히 납득시켰다."
  },
  {
    id: 410, day: 13, word: "core", phonetic: "/kɔːr/", meaning: "n. 핵심, 중심 / a. 핵심적인",
    example: "The core problem is our lack of funds.",
    exampleTranslation: "핵심적인 문제는 우리의 자금 부족이다."
  },
  {
    id: 411, day: 13, word: "corporate", phonetic: "/ˈkɔːrpərət/", meaning: "a. 기업의, 법인의",
    example: "They are changing their corporate image to attract younger customers.",
    exampleTranslation: "그들은 젊은 고객들을 끌어들이기 위해 기업 이미지를 바꾸고 있다."
  },
  {
    id: 412, day: 13, word: "correspond", phonetic: "/ˌkɔːrəˈspɑːnd/", meaning: "v. 일치하다, 서신을 주고받다",
    example: "His actions do not correspond with his words.",
    exampleTranslation: "그의 행동은 그의 말과 일치하지 않는다."
  },
  {
    id: 413, day: 13, word: "corrupt", phonetic: "/kəˈrʌpt/", meaning: "a. 부패한, 타락한 / v. 부패하게 하다",
    example: "The corrupt official was arrested for taking bribes.",
    exampleTranslation: "그 부패한 공무원은 뇌물을 받은 혐의로 체포되었다."
  },
  {
    id: 414, day: 13, word: "cost", phonetic: "/kɔːst/", meaning: "n. 비용, 희생 / v. 비용이 들다",
    tip: "💡 at all costs (무슨 수를 써서라도)",
    example: "We must prevent this from happening at all costs.",
    exampleTranslation: "우리는 무슨 수를 써서라도 이런 일이 일어나는 것을 막아야 한다."
  },
  {
    id: 415, day: 13, word: "council", phonetic: "/ˈkaʊnsl/", meaning: "n. 의회, 위원회",
    example: "The city council voted to build a new library.",
    exampleTranslation: "시의회는 새 도서관을 짓기로 투표했다."
  },
  {
    id: 416, day: 13, word: "counsel", phonetic: "/ˈkaʊnsl/", meaning: "n. 상담, 조언 / v. 상담하다",
    example: "She sought professional counsel for her depression.",
    exampleTranslation: "그녀는 우울증에 대해 전문가의 상담을 구했다."
  },
  {
    id: 417, day: 13, word: "count", phonetic: "/kaʊnt/", meaning: "v. 세다, 중요하다 / n. 계산",
    tip: "💡 count on (~에 의지하다, 믿다)",
    example: "You can always count on me for help.",
    exampleTranslation: "도움이 필요하면 언제든 나를 믿어도 된다."
  },
  {
    id: 418, day: 13, word: "craft", phonetic: "/kræft/", meaning: "n. 공예, 기술, 선박(항공기)",
    example: "He learned the craft of wood carving from his grandfather.",
    exampleTranslation: "그는 할아버지로부터 목각 공예 기술을 배웠다."
  },
  {
    id: 419, day: 13, word: "crash", phonetic: "/kræʃ/", meaning: "v. 충돌하다, 추락하다 / n. 충돌",
    example: "The car crashed into a tree, but nobody was hurt.",
    exampleTranslation: "차가 나무에 충돌했지만 아무도 다치지 않았다."
  },
  {
    id: 420, day: 13, word: "crawl", phonetic: "/krɔːl/", meaning: "v. 기다, 기어가다",
    example: "The baby learned to crawl before she could walk.",
    exampleTranslation: "그 아기는 걷기 전에 기어 다니는 법을 배웠다."
  },
  {
    id: 421, day: 13, word: "create", phonetic: "/kriˈeɪt/", meaning: "v. 창조하다, 만들다",
    example: "The new factory will create hundreds of jobs.",
    exampleTranslation: "새 공장은 수백 개의 일자리를 창출할 것이다."
  },
  {
    id: 422, day: 13, word: "creature", phonetic: "/ˈkriːtʃər/", meaning: "n. 생물, 창조물",
    example: "All living creatures need water to survive.",
    exampleTranslation: "모든 살아있는 생물은 생존하기 위해 물이 필요하다."
  },
  {
    id: 423, day: 13, word: "credit", phonetic: "/ˈkredɪt/", meaning: "n. 신용, 칭찬, 공로",
    tip: "💡 take credit for (~의 공로를 차지하다)",
    example: "She deserves all the credit for the team's success.",
    exampleTranslation: "그녀는 팀의 성공에 대한 모든 공로를 받을 만하다."
  },
  {
    id: 424, day: 13, word: "creep", phonetic: "/kriːp/", meaning: "v. 살금살금 걷다, 기다",
    example: "I tried to creep into the room without waking the baby.",
    exampleTranslation: "나는 아기를 깨우지 않고 방으로 살금살금 들어가려고 했다."
  },
  {
    id: 425, day: 13, word: "crew", phonetic: "/kruː/", meaning: "n. 승무원, 무리",
    example: "The ship's crew worked hard to save the passengers.",
    exampleTranslation: "배의 승무원들은 승객들을 구하기 위해 열심히 일했다."
  },
  {
    id: 426, day: 13, word: "crime", phonetic: "/kraɪm/", meaning: "n. 범죄",
    example: "The city has seen a decrease in violent crime recently.",
    exampleTranslation: "최근 그 도시는 강력 범죄의 감소를 보였다."
  },
  {
    id: 427, day: 13, word: "crisis", phonetic: "/ˈkraɪsɪs/", meaning: "n. 위기",
    example: "The country is facing a severe economic crisis.",
    exampleTranslation: "그 나라는 심각한 경제 위기에 직면해 있다."
  },
  {
    id: 428, day: 13, word: "criterion", phonetic: "/kraɪˈtɪriən/", meaning: "n. 기준, 척도 (복수형: criteria)",
    example: "What is your main criterion for choosing a university?",
    exampleTranslation: "당신이 대학을 선택하는 주요 기준은 무엇입니까?"
  },
  {
    id: 429, day: 13, word: "critic", phonetic: "/ˈkrɪtɪk/", meaning: "n. 비평가, 평론가",
    example: "The movie received high praise from film critics.",
    exampleTranslation: "그 영화는 영화 평론가들로부터 높은 찬사를 받았다."
  },
  {
    id: 430, day: 13, word: "criticize", phonetic: "/ˈkrɪtɪsaɪz/", meaning: "v. 비판하다, 비난하다",
    example: "It is easy to criticize, but harder to offer solutions.",
    exampleTranslation: "비판하기는 쉽지만, 해결책을 제시하기는 더 어렵다."
  },
  {
    id: 431, day: 13, word: "crop", phonetic: "/krɑːp/", meaning: "n. 농작물, 수확량",
    example: "The bad weather completely ruined this year's potato crop.",
    exampleTranslation: "나쁜 날씨가 올해의 감자 농작물을 완전히 망쳤다."
  },
  {
    id: 432, day: 13, word: "crowd", phonetic: "/kraʊd/", meaning: "n. 군중, 무리 / v. 가득 메우다",
    example: "A large crowd gathered in the square to hear the speech.",
    exampleTranslation: "많은 군중이 연설을 듣기 위해 광장에 모였다."
  },
  {
    id: 433, day: 13, word: "cruel", phonetic: "/ˈkruːəl/", meaning: "a. 잔인한, 무자비한",
    example: "It is cruel to keep large animals in small cages.",
    exampleTranslation: "큰 동물들을 작은 우리에 가두는 것은 잔인하다."
  },
  {
    id: 434, day: 13, word: "crush", phonetic: "/krʌʃ/", meaning: "v. 으깨다, 짓눌러 부수다",
    example: "Use a heavy pan to crush the garlic cloves.",
    exampleTranslation: "마늘을 으깨려면 무거운 팬을 사용하세요."
  },
  {
    id: 435, day: 13, word: "cultivate", phonetic: "/ˈkʌltɪveɪt/", meaning: "v. 경작하다, 재배하다, (관계를) 구축하다",
    example: "They cultivate rice and wheat on their farm.",
    exampleTranslation: "그들은 농장에서 쌀과 밀을 재배한다."
  },
  {
    id: 436, day: 13, word: "culture", phonetic: "/ˈkʌltʃər/", meaning: "n. 문화, 배양",
    example: "Music is an important part of human culture.",
    exampleTranslation: "음악은 인간 문화의 중요한 부분이다."
  },
  {
    id: 437, day: 13, word: "cure", phonetic: "/kjʊr/", meaning: "v. 치료하다 / n. 치료법",
    example: "There is still no known cure for the common cold.",
    exampleTranslation: "일반적인 감기에 대해 알려진 치료법은 아직 없다."
  },
  {
    id: 438, day: 13, word: "curious", phonetic: "/ˈkjʊriəs/", meaning: "a. 호기심이 많은, 궁금한",
    example: "Children are naturally curious about the world around them.",
    exampleTranslation: "아이들은 그들 주변 세계에 대해 본능적으로 호기심이 많다."
  },
  {
    id: 439, day: 13, word: "currency", phonetic: "/ˈkɜːrənsi/", meaning: "n. 통화, 화폐, 통용",
    example: "The US dollar is a widely accepted currency around the world.",
    exampleTranslation: "미국 달러는 전 세계적으로 널리 통용되는 화폐이다."
  },
  {
    id: 440, day: 13, word: "current", phonetic: "/ˈkɜːrənt/", meaning: "a. 현재의 / n. 흐름, 해류",
    example: "The strong ocean current pulled the swimmer away from the shore.",
    exampleTranslation: "강한 해류가 수영하는 사람을 해안에서 멀어지게 끌어당겼다."
  },
  {
    id: 441, day: 13, word: "curve", phonetic: "/kɜːrv/", meaning: "n. 곡선, 커브",
    example: "The road ahead has a dangerous curve.",
    exampleTranslation: "앞의 도로에는 위험한 커브가 있다."
  },
  {
    id: 442, day: 13, word: "custom", phonetic: "/ˈkʌstəm/", meaning: "n. 관습, 세관",
    example: "In Japan, it is a custom to bow when greeting someone.",
    exampleTranslation: "일본에서는 누군가에게 인사할 때 절을 하는 것이 관습이다."
  },
  {
    id: 443, day: 14, word: "damage", phonetic: "/ˈdæmɪdʒ/", meaning: "n. 손상, 피해 / v. 손상을 입히다",
    example: "The storm caused extensive damage to the roof.",
    exampleTranslation: "그 폭풍은 지붕에 광범위한 피해를 입혔다."
  },
  {
    id: 444, day: 14, word: "danger", phonetic: "/ˈdeɪndʒər/", meaning: "n. 위험",
    example: "The sign warned people of the hidden danger.",
    exampleTranslation: "그 표지판은 사람들에게 숨겨진 위험을 경고했다."
  },
  {
    id: 445, day: 14, word: "dawn", phonetic: "/dɔːn/", meaning: "n. 새벽, 동틀 녘 / v. 날이 새다",
    example: "We woke up at dawn to watch the sunrise.",
    exampleTranslation: "우리는 일출을 보기 위해 새벽에 일어났다."
  },
  {
    id: 446, day: 14, word: "debate", phonetic: "/dɪˈbeɪt/", meaning: "n. 토론, 논쟁 / v. 토론하다",
    example: "There was a heated debate about the new education policy.",
    exampleTranslation: "새로운 교육 정책에 대한 열띤 논쟁이 있었다."
  },
  {
    id: 447, day: 14, word: "debt", phonetic: "/det/", meaning: "n. 빚, 부채",
    example: "It took them five years to pay off all their debts.",
    exampleTranslation: "그들이 모든 빚을 갚는 데 5년이 걸렸다."
  },
  {
    id: 448, day: 14, word: "decade", phonetic: "/ˈdekeɪd/", meaning: "n. 10년",
    example: "The economy has grown steadily over the last decade.",
    exampleTranslation: "경제가 지난 10년 동안 꾸준히 성장했다."
  },
  {
    id: 449, day: 14, word: "decay", phonetic: "/dɪˈkeɪ/", meaning: "v. 썩다, 부패하다 / n. 부패",
    example: "Sugar can cause tooth decay if you don't brush regularly.",
    exampleTranslation: "규칙적으로 양치질을 하지 않으면 설탕이 충치(치아 부패)를 유발할 수 있다."
  },
  {
    id: 450, day: 14, word: "deceive", phonetic: "/dɪˈsiːv/", meaning: "v. 속이다, 기만하다",
    example: "He tried to deceive his parents about his test scores.",
    exampleTranslation: "그는 자신의 시험 점수에 대해 부모님을 속이려 했다."
  },
  {
    id: 451, day: 14, word: "decent", phonetic: "/ˈdiːsnt/", meaning: "a. 괜찮은, 품위 있는",
    example: "Everyone deserves a decent place to live.",
    exampleTranslation: "모든 사람은 살기 괜찮은 곳을 누릴 자격이 있다."
  },
  {
    id: 452, day: 14, word: "decorate", phonetic: "/ˈdekəreɪt/", meaning: "v. 장식하다, 꾸미다",
    example: "They spent the whole weekend decorating the living room.",
    exampleTranslation: "그들은 거실을 장식하는 데 주말 내내 시간을 보냈다."
  },
  {
    id: 453, day: 14, word: "decrease", phonetic: "/dɪˈkriːs/", meaning: "v. 감소하다 / n. 감소",
    example: "The population of the village has decreased significantly.",
    exampleTranslation: "그 마을의 인구가 눈에 띄게 감소했다."
  },
  {
    id: 454, day: 14, word: "dedicate", phonetic: "/ˈdedɪkeɪt/", meaning: "v. 헌신하다, 바치다",
    example: "She dedicated her entire life to helping the poor.",
    exampleTranslation: "그녀는 평생을 가난한 사람들을 돕는 데 바쳤다."
  },
  {
    id: 455, day: 14, word: "defeat", phonetic: "/dɪˈfiːt/", meaning: "v. 패배시키다 / n. 패배",
    example: "Our team defeated the defending champions.",
    exampleTranslation: "우리 팀이 디펜딩 챔피언을 패배시켰다."
  },
  {
    id: 456, day: 14, word: "defect", phonetic: "/ˈdiːfekt/", meaning: "n. 결함, 단점 / v. 망명하다",
    example: "The car was recalled due to a manufacturing defect.",
    exampleTranslation: "그 차는 제조상의 결함 때문에 리콜되었다."
  },
  {
    id: 457, day: 14, word: "defend", phonetic: "/dɪˈfend/", meaning: "v. 방어하다, 수비하다, 변호하다",
    example: "The soldiers fought bravely to defend their country.",
    exampleTranslation: "군인들은 조국을 방어하기 위해 용감하게 싸웠다."
  },
  {
    id: 458, day: 14, word: "define", phonetic: "/dɪˈfaɪn/", meaning: "v. 정의하다, 규정하다",
    example: "It is difficult to define what true happiness is.",
    exampleTranslation: "진정한 행복이 무엇인지 정의하기란 어렵다."
  },
  {
    id: 459, day: 14, word: "definite", phonetic: "/ˈdefɪnət/", meaning: "a. 확고한, 확실한, 뚜렷한",
    example: "We need a definite answer by tomorrow morning.",
    exampleTranslation: "우리는 내일 아침까지 확고한 대답이 필요하다."
  },
  {
    id: 460, day: 14, word: "delay", phonetic: "/dɪˈleɪ/", meaning: "v. 지연시키다 / n. 지연",
    example: "The flight was delayed due to heavy snowfall.",
    exampleTranslation: "비행기는 폭설로 인해 지연되었다."
  },
  {
    id: 461, day: 14, word: "delete", phonetic: "/dɪˈliːt/", meaning: "v. 삭제하다, 지우다",
    example: "I accidentally deleted an important file from my computer.",
    exampleTranslation: "나는 실수로 내 컴퓨터에서 중요한 파일을 삭제했다."
  },
  {
    id: 462, day: 14, word: "delicate", phonetic: "/ˈdelɪkət/", meaning: "a. 섬세한, 연약한, 다루기 힘든",
    example: "These delicate glasses must be washed by hand.",
    exampleTranslation: "이 섬세한 유리잔들은 손으로 씻어야 한다."
  },
  {
    id: 463, day: 14, word: "deliver", phonetic: "/dɪˈlɪvər/", meaning: "v. 배달하다, (연설을) 하다, 출산하다",
    example: "The mailman delivers letters to our house every morning.",
    exampleTranslation: "우체부는 매일 아침 우리 집에 편지를 배달한다."
  },
  {
    id: 464, day: 14, word: "demand", phonetic: "/dɪˈmænd/", meaning: "v. 요구하다 / n. 수요, 요구",
    example: "The workers are demanding better pay and conditions.",
    exampleTranslation: "노동자들은 더 나은 급여와 조건을 요구하고 있다."
  },
  {
    id: 465, day: 14, word: "democracy", phonetic: "/dɪˈmɑːkrəsi/", meaning: "n. 민주주의",
    example: "Freedom of speech is a fundamental part of democracy.",
    exampleTranslation: "언론의 자유는 민주주의의 근본적인 부분이다."
  },
  {
    id: 466, day: 14, word: "dense", phonetic: "/dens/", meaning: "a. 빽빽한, 밀집한, 짙은",
    example: "The travelers got lost in the dense forest.",
    exampleTranslation: "여행자들은 빽빽한 숲에서 길을 잃었다."
  },
  {
    id: 467, day: 14, word: "deny", phonetic: "/dɪˈnaɪ/", meaning: "v. 부인하다, 거절하다",
    example: "He denied having any involvement in the scandal.",
    exampleTranslation: "그는 그 스캔들에 어떤 연관이 있다는 것을 부인했다."
  },
  {
    id: 468, day: 14, word: "depart", phonetic: "/dɪˈpɑːrt/", meaning: "v. 출발하다, 떠나다",
    example: "The train for Paris departs from platform 5.",
    exampleTranslation: "파리행 기차는 5번 플랫폼에서 출발한다."
  },
  {
    id: 469, day: 14, word: "depend", phonetic: "/dɪˈpend/", meaning: "v. 의존하다, ~에 달려있다",
    tip: "💡 depend on (~에 의존하다)",
    example: "Children depend entirely on their parents for survival.",
    exampleTranslation: "아이들은 생존을 위해 전적으로 부모에게 의존한다."
  },
  {
    id: 470, day: 14, word: "depict", phonetic: "/dɪˈpɪkt/", meaning: "v. 묘사하다, 그리다",
    example: "The painting depicts a peaceful country scene.",
    exampleTranslation: "그 그림은 평화로운 시골 풍경을 묘사한다."
  },
  {
    id: 471, day: 14, word: "deposit", phonetic: "/dɪˈpɑːzɪt/", meaning: "v. 예금하다, 퇴적시키다 / n. 보증금, 예금",
    example: "I need to deposit this check into my bank account.",
    exampleTranslation: "나는 이 수표를 내 은행 계좌에 예금해야 한다."
  },
  {
    id: 472, day: 14, word: "depress", phonetic: "/dɪˈpres/", meaning: "v. 우울하게 하다, 침체시키다",
    example: "The continuous rain is starting to depress me.",
    exampleTranslation: "계속되는 비가 나를 우울하게 만들기 시작했다."
  },
  {
    id: 473, day: 14, word: "depth", phonetic: "/depθ/", meaning: "n. 깊이, 심도",
    example: "The submarine can dive to a depth of 500 meters.",
    exampleTranslation: "그 잠수함은 500미터 깊이까지 잠수할 수 있다."
  },
  {
    id: 474, day: 14, word: "descend", phonetic: "/dɪˈsend/", meaning: "v. 내려가다, 하강하다",
    example: "The airplane began to descend as it approached the airport.",
    exampleTranslation: "비행기는 공항에 접근하면서 하강하기 시작했다."
  },
  {
    id: 475, day: 14, word: "describe", phonetic: "/dɪˈskraɪb/", meaning: "v. 묘사하다, 설명하다",
    example: "Can you describe the man you saw yesterday?",
    exampleTranslation: "어제 본 남자를 묘사해 줄 수 있습니까?"
  },
  {
    id: 476, day: 14, word: "desert", phonetic: "/ˈdezərt/", meaning: "n. 사막 / /dɪˈzɜːrt/ v. 버리다",
    example: "Camels are well adapted to life in the desert.",
    exampleTranslation: "낙타는 사막에서의 삶에 잘 적응되어 있다."
  },
{
    id: 477, day: 15, word: "design", phonetic: "/dɪˈzaɪn/", meaning: "n. 디자인, 설계 / v. 디자인하다",
    example: "The new car has a very sleek and modern design.",
    exampleTranslation: "그 새 차는 매우 매끄럽고 현대적인 디자인을 가지고 있다."
  },
  {
    id: 478, day: 15, word: "desire", phonetic: "/dɪˈzaɪər/", meaning: "n. 욕망, 갈망 / v. 바라다",
    example: "She has a strong desire to travel the world.",
    exampleTranslation: "그녀는 세계를 여행하고 싶은 강한 욕망을 가지고 있다."
  },
  {
    id: 479, day: 15, word: "despair", phonetic: "/dɪˈsper/", meaning: "n. 절망 / v. 절망하다",
    example: "He gave up the search in despair.",
    exampleTranslation: "그는 절망 속에서 수색을 포기했다."
  },
  {
    id: 480, day: 15, word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", meaning: "n. 목적지, 도착지",
    example: "We finally reached our destination after a ten-hour drive.",
    exampleTranslation: "우리는 10시간의 운전 끝에 마침내 목적지에 도착했다."
  },
  {
    id: 481, day: 15, word: "destiny", phonetic: "/ˈdestəni/", meaning: "n. 운명",
    example: "He believed it was his destiny to become a great leader.",
    exampleTranslation: "그는 위대한 지도자가 되는 것이 자신의 운명이라고 믿었다."
  },
  {
    id: 482, day: 15, word: "destroy", phonetic: "/dɪˈstrɔɪ/", meaning: "v. 파괴하다",
    example: "The earthquake destroyed many buildings in the city.",
    exampleTranslation: "지진이 도시의 많은 건물을 파괴했다."
  },
  {
    id: 483, day: 15, word: "detail", phonetic: "/ˈdiːteɪl/", meaning: "n. 세부 사항",
    example: "Please explain the plan in more detail.",
    exampleTranslation: "그 계획을 더 세부적으로 설명해 주세요."
  },
  {
    id: 484, day: 15, word: "detect", phonetic: "/dɪˈtekt/", meaning: "v. 발견하다, 감지하다",
    example: "The alarm is designed to detect smoke.",
    exampleTranslation: "그 경보기는 연기를 감지하도록 설계되었다."
  },
  {
    id: 485, day: 15, word: "determine", phonetic: "/dɪˈtɜːrmɪn/", meaning: "v. 결정하다, 알아내다",
    example: "Your grades will determine which college you can enter.",
    exampleTranslation: "당신의 성적이 어느 대학에 들어갈 수 있을지 결정할 것이다."
  },
  {
    id: 486, day: 15, word: "develop", phonetic: "/dɪˈveləp/", meaning: "v. 발달하다, 개발하다",
    example: "Swimming helps to develop strong muscles.",
    exampleTranslation: "수영은 튼튼한 근육을 발달시키는 데 도움이 된다."
  },
  {
    id: 487, day: 15, word: "device", phonetic: "/dɪˈvaɪs/", meaning: "n. 장치, 기구",
    example: "A smartphone is a very useful communication device.",
    exampleTranslation: "스마트폰은 매우 유용한 통신 장치이다."
  },
  {
    id: 488, day: 15, word: "devote", phonetic: "/dɪˈvoʊt/", meaning: "v. 바치다, 헌신하다",
    tip: "💡 devote A to B (A를 B에 바치다)",
    example: "She decided to devote her life to helping orphans.",
    exampleTranslation: "그녀는 고아들을 돕는 데 평생을 바치기로 결정했다."
  },
  {
    id: 489, day: 15, word: "diagnose", phonetic: "/ˌdaɪəɡˈnoʊs/", meaning: "v. 진단하다",
    example: "The doctor diagnosed him with diabetes.",
    exampleTranslation: "의사는 그에게 당뇨병을 진단했다."
  },
  {
    id: 490, day: 15, word: "dictate", phonetic: "/ˈdɪkteɪt/", meaning: "v. 받아쓰게 하다, 지시하다",
    example: "The boss dictated a letter to his secretary.",
    exampleTranslation: "사장은 비서에게 편지를 받아쓰게 했다."
  },
  {
    id: 491, day: 15, word: "differ", phonetic: "/ˈdɪfər/", meaning: "v. 다르다, 의견을 달리하다",
    example: "French and English differ in many ways.",
    exampleTranslation: "프랑스어와 영어는 여러 면에서 다르다."
  },
  {
    id: 492, day: 15, word: "digest", phonetic: "/daɪˈdʒest/", meaning: "v. 소화하다, 이해하다",
    example: "Some foods take longer to digest than others.",
    exampleTranslation: "어떤 음식들은 다른 음식들보다 소화하는 데 더 오래 걸린다."
  },
  {
    id: 493, day: 15, word: "dignity", phonetic: "/ˈdɪɡnəti/", meaning: "n. 존엄성, 위엄",
    example: "Every human being has the right to live with dignity.",
    exampleTranslation: "모든 인간은 존엄성을 가지고 살 권리가 있다."
  },
  {
    id: 494, day: 15, word: "diligence", phonetic: "/ˈdɪlɪdʒəns/", meaning: "n. 근면, 성실",
    example: "He achieved success through hard work and diligence.",
    exampleTranslation: "그는 노고와 근면을 통해 성공을 거두었다."
  },
  {
    id: 495, day: 15, word: "dimension", phonetic: "/daɪˈmenʃn/", meaning: "n. 차원, 크기, 측면",
    example: "The new discovery added a whole new dimension to our research.",
    exampleTranslation: "새로운 발견은 우리의 연구에 완전히 새로운 차원을 더했다."
  },
  {
    id: 496, day: 15, word: "direct", phonetic: "/dəˈrekt/", meaning: "a. 직접적인 / v. 지휘하다, 안내하다",
    example: "Is there a direct flight from London to Tokyo?",
    exampleTranslation: "런던에서 도쿄로 가는 직항편(직접적인 비행)이 있습니까?"
  },
  {
    id: 497, day: 15, word: "disabled", phonetic: "/dɪsˈeɪbld/", meaning: "a. 장애를 가진",
    example: "The building has a special entrance for disabled people.",
    exampleTranslation: "그 건물에는 장애인들을 위한 특별한 입구가 있다."
  },
  {
    id: 498, day: 15, word: "disadvantage", phonetic: "/ˌdɪsədˈvæntɪdʒ/", meaning: "n. 불리한 점, 약점",
    example: "Not knowing how to speak English is a major disadvantage here.",
    exampleTranslation: "영어를 할 줄 모르는 것은 이곳에서 주요한 약점이다."
  },
  {
    id: 499, day: 15, word: "disappear", phonetic: "/ˌdɪsəˈpɪr/", meaning: "v. 사라지다, 없어지다",
    example: "The sun disappeared behind the clouds.",
    exampleTranslation: "태양이 구름 뒤로 사라졌다."
  },
  {
    id: 500, day: 15, word: "disappoint", phonetic: "/ˌdɪsəˈpɔɪnt/", meaning: "v. 실망시키다",
    example: "I'm sorry to disappoint you, but I can't come to the party.",
    exampleTranslation: "실망시켜서 미안하지만, 나는 파티에 갈 수 없다."
  },
  {
    id: 501, day: 15, word: "disaster", phonetic: "/dɪˈzæstər/", meaning: "n. 재난, 참사",
    example: "The flood was the worst natural disaster in the country's history.",
    exampleTranslation: "그 홍수는 국가 역사상 최악의 자연재해였다."
  },
  {
    id: 502, day: 15, word: "discard", phonetic: "/dɪsˈkɑːrd/", meaning: "v. 버리다, 폐기하다",
    example: "Please discard any food that has passed its expiration date.",
    exampleTranslation: "유통기한이 지난 음식은 모두 폐기해 주십시오."
  },
  {
    id: 503, day: 15, word: "discipline", phonetic: "/ˈdɪsəplɪn/", meaning: "n. 훈련, 규율, 학과",
    example: "Martial arts require a high level of physical discipline.",
    exampleTranslation: "무술은 높은 수준의 신체적 훈련을 요구한다."
  },
  {
    id: 504, day: 15, word: "disclose", phonetic: "/dɪsˈkloʊz/", meaning: "v. 밝히다, 폭로하다",
    example: "The company refused to disclose any details of the agreement.",
    exampleTranslation: "그 회사는 합의의 어떤 세부 사항도 밝히기를 거부했다."
  },
  {
    id: 505, day: 15, word: "discount", phonetic: "/ˈdɪskaʊnt/", meaning: "n. 할인 / v. 할인하다, 무시하다",
    example: "Employees get a 20% discount on all store items.",
    exampleTranslation: "직원들은 상점의 모든 품목에 대해 20% 할인을 받는다."
  },
  {
    id: 506, day: 15, word: "discourage", phonetic: "/dɪsˈkɜːrɪdʒ/", meaning: "v. 낙담시키다, 단념시키다",
    tip: "💡 discourage A from B (A가 B하는 것을 막다/단념시키다)",
    example: "Don't let one failure discourage you from trying again.",
    exampleTranslation: "한 번의 실패가 다시 시도하려는 당신을 낙담시키게 하지 마라."
  },
  {
    id: 507, day: 15, word: "discover", phonetic: "/dɪˈskʌvər/", meaning: "v. 발견하다, 알아내다",
    example: "Scientists recently discovered a new species of frog.",
    exampleTranslation: "과학자들은 최근 새로운 개구리 종을 발견했다."
  },
  {
    id: 508, day: 15, word: "disease", phonetic: "/dɪˈziːz/", meaning: "n. 질병",
    example: "Heart disease is one of the leading causes of death.",
    exampleTranslation: "심장병은 주요 사망 원인 중 하나이다."
  },
  {
    id: 509, day: 15, word: "disgust", phonetic: "/dɪsˈɡʌst/", meaning: "n. 혐오감 / v. 역겹게 만들다",
    example: "He turned away in disgust when he saw the rotten food.",
    exampleTranslation: "그는 썩은 음식을 보았을 때 혐오감에 고개를 돌렸다."
  },
  {
    id: 510, day: 15, word: "dismiss", phonetic: "/dɪsˈmɪs/", meaning: "v. 묵살하다, 해고하다, 해산시키다",
    example: "The judge dismissed the case due to lack of evidence.",
    exampleTranslation: "판사는 증거 부족으로 그 사건을 기각(묵살)했다."
  },
  {
    id: 511, day: 16, word: "disorder", phonetic: "/dɪsˈɔːrdər/", meaning: "n. 무질서, 혼란, 장애(질환)",
    example: "He suffers from a rare genetic disorder.",
    exampleTranslation: "그는 희귀 유전 질환(장애)을 앓고 있다."
  },
  {
    id: 512, day: 16, word: "display", phonetic: "/dɪˈspleɪ/", meaning: "v. 전시하다, 보여주다 / n. 전시",
    example: "The museum will display a collection of ancient coins.",
    exampleTranslation: "박물관은 고대 동전 컬렉션을 전시할 것이다."
  },
  {
    id: 513, day: 16, word: "dispose", phonetic: "/dɪˈspoʊz/", meaning: "v. 처리하다, 배치하다",
    tip: "💡 dispose of (~을 처리하다, 처분하다)",
    example: "You must properly dispose of your medical waste.",
    exampleTranslation: "당신은 의료 폐기물을 적절히 처리해야 합니다."
  },
  {
    id: 514, day: 16, word: "dispute", phonetic: "/dɪˈspjuːt/", meaning: "n. 분쟁, 논쟁 / v. 반박하다",
    example: "The two countries have a long-standing border dispute.",
    exampleTranslation: "그 두 나라는 오래된 국경 분쟁을 겪고 있다."
  },
  {
    id: 515, day: 16, word: "disregard", phonetic: "/ˌdɪsrɪˈɡɑːrd/", meaning: "v. 무시하다 / n. 무시",
    example: "Please disregard the previous email I sent you.",
    exampleTranslation: "제가 전에 보낸 이메일은 무시해 주십시오."
  },
  {
    id: 516, day: 16, word: "disrupt", phonetic: "/dɪsˈrʌpt/", meaning: "v. 방해하다, 지장을 주다",
    example: "Heavy snow disrupted train services across the country.",
    exampleTranslation: "폭설이 전국의 기차 운행에 지장을 주었다."
  },
  {
    id: 517, day: 16, word: "distance", phonetic: "/ˈdɪstəns/", meaning: "n. 거리",
    example: "He lives a short distance from the school.",
    exampleTranslation: "그는 학교에서 가까운 거리에 산다."
  },
  {
    id: 518, day: 16, word: "distinct", phonetic: "/dɪˈstɪŋkt/", meaning: "a. 뚜렷한, 분명한, 별개의",
    example: "There is a distinct difference between the two concepts.",
    exampleTranslation: "두 개념 사이에는 뚜렷한 차이가 있다."
  },
  {
    id: 519, day: 16, word: "distort", phonetic: "/dɪˈstɔːrt/", meaning: "v. 왜곡하다, 비틀다",
    example: "The media often distorts the truth for dramatic effect.",
    exampleTranslation: "언론은 종종 극적인 효과를 위해 진실을 왜곡한다."
  },
  {
    id: 520, day: 16, word: "distress", phonetic: "/dɪˈstres/", meaning: "n. 고통, 괴로움 / v. 괴롭히다",
    example: "The news of the accident caused her great distress.",
    exampleTranslation: "그 사고 소식은 그녀에게 큰 고통을 안겨주었다."
  },
  {
    id: 521, day: 16, word: "district", phonetic: "/ˈdɪstrɪkt/", meaning: "n. 구역, 지역",
    example: "She works as a teacher in a school in the central district.",
    exampleTranslation: "그녀는 중앙 구역에 있는 학교에서 교사로 일한다."
  },
  {
    id: 522, day: 16, word: "disturb", phonetic: "/dɪˈstɜːrb/", meaning: "v. 방해하다, 어지럽히다",
    example: "Please do not disturb the guests while they are sleeping.",
    exampleTranslation: "손님들이 자는 동안 방해하지 마십시오."
  },
  {
    id: 523, day: 16, word: "diverse", phonetic: "/daɪˈvɜːrs/", meaning: "a. 다양한",
    example: "New York is a city with a very diverse population.",
    exampleTranslation: "뉴욕은 인구가 매우 다양한 도시이다."
  },
  {
    id: 524, day: 16, word: "divide", phonetic: "/dɪˈvaɪd/", meaning: "v. 나누다, 갈라지다",
    example: "The teacher divided the class into four groups.",
    exampleTranslation: "선생님은 반을 4개의 그룹으로 나누었다."
  },
  {
    id: 525, day: 16, word: "domestic", phonetic: "/dəˈmestɪk/", meaning: "a. 국내의, 가정의",
    example: "Domestic flights leave from Terminal 1.",
    exampleTranslation: "국내선 비행기는 1번 터미널에서 출발한다."
  },
  {
    id: 526, day: 16, word: "dominate", phonetic: "/ˈdɑːmɪneɪt/", meaning: "v. 지배하다, 우위를 차지하다",
    example: "One team dominated the entire game from start to finish.",
    exampleTranslation: "한 팀이 시작부터 끝까지 전체 경기를 지배했다."
  },
  {
    id: 527, day: 16, word: "donate", phonetic: "/ˈdoʊneɪt/", meaning: "v. 기부하다, 기증하다",
    example: "He donated $10,000 to the local children's hospital.",
    exampleTranslation: "그는 지역 어린이 병원에 만 달러를 기부했다."
  },
  {
    id: 528, day: 16, word: "draft", phonetic: "/dræft/", meaning: "n. 초안, 원고 / v. 초안을 작성하다",
    example: "I need to finish the first draft of my essay by tomorrow.",
    exampleTranslation: "나는 내일까지 내 에세이의 첫 초안을 완성해야 한다."
  },
  {
    id: 529, day: 16, word: "drag", phonetic: "/dræɡ/", meaning: "v. 끌다, 질질 끌다",
    example: "He dragged the heavy box across the floor.",
    exampleTranslation: "그는 바닥을 가로질러 무거운 상자를 끌었다."
  },
  {
    id: 530, day: 16, word: "dramatic", phonetic: "/drəˈmætɪk/", meaning: "a. 극적인, 인상적인",
    example: "There has been a dramatic increase in internet usage.",
    exampleTranslation: "인터넷 사용에 있어 극적인 증가가 있었다."
  },
  {
    id: 531, day: 16, word: "draw", phonetic: "/drɔː/", meaning: "v. 그리다, 끌어당기다, 도출하다",
    example: "It's too early to draw any conclusions from the data.",
    exampleTranslation: "데이터로부터 어떤 결론을 도출하기에는 너무 이르다."
  },
  {
    id: 532, day: 16, word: "dread", phonetic: "/dred/", meaning: "v. 두려워하다, 몹시 무서워하다 / n. 두려움",
    example: "I always dread going to the dentist.",
    exampleTranslation: "나는 치과에 가는 것을 항상 두려워한다."
  },
  {
    id: 533, day: 16, word: "drift", phonetic: "/drɪft/", meaning: "v. 표류하다, 떠내려가다",
    example: "The empty boat drifted out to sea.",
    exampleTranslation: "빈 보트가 바다로 표류해 나갔다."
  },
  {
    id: 534, day: 16, word: "drill", phonetic: "/drɪl/", meaning: "n. 드릴, 훈련 / v. 구멍을 뚫다",
    example: "The school conducts a fire drill every month.",
    exampleTranslation: "학교는 매달 소방 훈련을 실시한다."
  },
  {
    id: 535, day: 16, word: "drive", phonetic: "/draɪv/", meaning: "v. 운전하다, 추진하다 / n. 추진력",
    example: "Ambition was the main force that drove him to success.",
    exampleTranslation: "야망은 그를 성공으로 추진시킨 주요한 원동력이었다."
  },
  {
    id: 536, day: 16, word: "drop", phonetic: "/drɑːp/", meaning: "v. 떨어지다, 떨어뜨리다 / n. 방울",
    example: "The temperature dropped significantly overnight.",
    exampleTranslation: "간밤에 기온이 눈에 띄게 떨어졌다."
  },
  {
    id: 537, day: 16, word: "drown", phonetic: "/draʊn/", meaning: "v. 물에 빠지다, 익사하다",
    example: "He almost drowned when he fell into the river.",
    exampleTranslation: "그는 강에 빠졌을 때 하마터면 익사할 뻔했다."
  },
  {
    id: 538, day: 16, word: "drug", phonetic: "/drʌɡ/", meaning: "n. 약, 마약",
    example: "Scientists are testing a new drug to fight the virus.",
    exampleTranslation: "과학자들은 바이러스와 싸울 신약을 테스트하고 있다."
  },
  {
    id: 539, day: 16, word: "dual", phonetic: "/ˈduːəl/", meaning: "a. 두 개의, 이중의",
    example: "This car has dual controls for safety.",
    exampleTranslation: "이 차는 안전을 위한 이중 제어 장치를 가지고 있다."
  },
  {
    id: 540, day: 16, word: "dull", phonetic: "/dʌl/", meaning: "a. 따분한, 둔한, 무딘",
    example: "The movie was so dull that I fell asleep.",
    exampleTranslation: "영화가 너무 따분해서 나는 잠이 들었다."
  },
  {
    id: 541, day: 16, word: "duty", phonetic: "/ˈduːti/", meaning: "n. 의무, 직무, 관세",
    example: "It is our duty to protect the environment for future generations.",
    exampleTranslation: "미래 세대를 위해 환경을 보호하는 것은 우리의 의무이다."
  },
  {
    id: 542, day: 16, word: "dynamic", phonetic: "/daɪˈnæmɪk/", meaning: "a. 역동적인, 활발한",
    example: "The business operates in a highly dynamic market.",
    exampleTranslation: "그 사업은 매우 역동적인 시장에서 운영된다."
  },
  {
    id: 543, day: 16, word: "eager", phonetic: "/ˈiːɡər/", meaning: "a. 갈망하는, 열렬한",
    example: "The students were eager to learn more about the topic.",
    exampleTranslation: "학생들은 그 주제에 대해 더 배우기를 열망했다."
  },
  {
    id: 544, day: 16, word: "earn", phonetic: "/ɜːrn/", meaning: "v. 벌다, 얻다, 받을 만하다",
    example: "He worked hard to earn the respect of his colleagues.",
    exampleTranslation: "그는 동료들의 존경을 얻기 위해 열심히 일했다."
  },

];

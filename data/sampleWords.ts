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
];

/* ============================================================
   프로젝트 아카이브 데이터
   ------------------------------------------------------------
   이 파일만 수정하면 사이트 내용이 바뀝니다. (레이아웃/기능은 건드리지 않아도 됨)

   각 프로젝트는 아래 형식의 객체 하나입니다:

   {
     company: 'DRILLTIES',       // DRILLTIES / FIG / NBNDR 중 하나 (내부용, 카드에 표시 안 됨)
     companyLabel: 'DRILL TIES', // 이미지 없을 때 회색 박스 안에 표시되는 보조 라벨(현재 화면엔 미표시)
     year: 2023,
     title: '...',
     client: '...',              // "연도 | 클라이언트" 줄에 그대로 표시됨
     category: '...',            // 카드 이미지 위 라벨
     venueEn: '...', locationEn: '...',
     role: '...',
     desc: '...',
     tasks: ['...', '...'],      // Key Contributions. 빈 배열이면 그 블록 자체가 생략됨
     image: 'https://...',       // 있으면 실제 이미지, 없으면 빈 회색 박스
   }

   ------------------------------------------------------------
   2026.08.25 — 2024년 이하(2024~2017) 프로젝트 전면 교체
   사용자가 업로드한 DRILL_TIES_Selected_Works_Final_Text_v10.docx의 선별·확정 텍스트를
   그대로 반영 — 기존 56개 항목을 전부 폐기하고 문서에 있는 40개 항목으로 교체함
   (일부는 기존과 동일 프로젝트의 문구 개정판, 다수는 이번에 새로 선별에서 빠지거나
   새로 포함됨). category는 기존 8종 분류 체계 대신 문서에 적힌 값을 그대로 사용 —
   사용자가 새로 정리한 카테고리 체계.
   2026·2025년 11개 항목은 2026.08.25 앞선 라운드에서 디자인 캔버스 확정본으로 이미
   반영됨 (이번 교체 대상 아님, 그대로 유지).
============================================================ */
const PROJECTS = [

  /* ---------------- DRILL TIES ---------------- */
  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2026,
    title: 'LE SSERAFIM 〈PURE FLOWERS LIVE〉 Presented by Spotify',
    date: '2026.05.21',
    client: 'Spotify Korea · FIG', venue: '서소문성지 역사박물관(서울)',
    category: 'LIVE EXPERIENCE', venueEn: 'Seosomun Shrine History Museum', locationEn: 'Seoul, Korea',
    production: 'FIG',
    role: 'Creative Direction · Technical Planning',
    desc: 'Private Live Performance',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 파트너 커뮤니케이션'],
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2026/06/HEADER-ONLY-2277683620-scaled.jpg', // Spotify Newsroom 공식 프레스킷 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2026,
    title: '겸손은힘들다 LIVE TOUR',
    date: '대전 03.14 · 대구 04.18 · 고양 04.25 · 부산 05.02 · 전주 05.09 · 광주 05.16 외',
    client: '라이브랜드 · 티클모아', venue: '킨텍스 · 엑스코 · 벡스코 · 한국소리문화의전당 등',
    category: 'LIVE CONCERT & TOUR', venueEn: 'KINTEX · EXCO · BEXCO · Korea National Culture and Arts Center, etc.', locationEn: 'Daejeon · Daegu · Goyang · Busan · Jeonju · Gwangju, Korea',
    production: 'Drill ties',
    role: 'Creative Direction · Technical Planning · Project Management',
    desc: '<겸손은힘들다> 전국 투어 토크 콘서트 연출',
    tasks: ['프로그램 및 공연 구성 총괄', '출연진 섭외 및 계약', '출연진 및 파트너 커뮤니케이션', '투어 정산 및 비용 관리'],
    image: 'https://tkfile.yes24.com/upload2/PerfBlog/202601/20260129/20260129-56961.jpg', // YES24 공식 포스터 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2026,
    title: 'K-Dream Stage: All India K-Pop Grand Championship 2026',
    date: '2026.04.20',
    client: 'Korean Cultural Centre India · MAC Communication', venue: 'Yashobhoomi Indoor Stadium(뉴델리)',
    category: 'LIVE EXPERIENCE', venueEn: 'Yashobhoomi Indoor Stadium', locationEn: 'New Delhi, India',
    production: 'MAC Communication',
    role: 'Creative Direction · Project Management',
    desc: '인도 전역의 K-POP 경연을 결산하는 대규모 챔피언십으로, 현지 팬과 한류 콘텐츠를 연결한 문화교류 프로젝트.',
    tasks: ['무대 세팅 및 현장 브랜딩', '경연 진행 및 심사, 시상식 연출 총괄', '출연자 계약·비자 수속, 의전', '행사 정산 및 예산 관리'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2026,
    title: '오미야게+ / Plaisir Pop-up',
    date: '2026.01',
    client: '일본오미야게진흥협회 · 이래컴퍼니', venue: 'IFC Mall',
    category: 'POP-UP', venueEn: 'IFC Mall', locationEn: 'Seoul, Korea',
    production: '이래컴퍼니(Irae Company)',
    role: 'Creative Direction · Technical Planning',
    desc: '일본 오미야게 문화 홍보를 위한 디저트 브랜드 콜라보레이션 팝업',
    tasks: ['팝업 컨셉 및 프로그램 개발', '팝업 공간 디자인 및 운영 계획 수립'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2026,
    title: '故 신영복 선생 서거 10주기 추모식',
    date: '2026.01.15',
    client: '성공회대 × 더불어숲 × 돌베개출판사', venue: '성공회대 성미가엘성당',
    category: 'Memorial', venueEn: 'Sungkonghoe University St. Michael\'s Chapel', locationEn: 'Seoul, Korea',
    production: '성공회대',
    role: 'Technical Direction, Event management',
    desc: '故 신영복 선생 서거 10주기 추모식',
    tasks: ['추모식 진행 총괄', '출연진 및 파트너 커뮤니케이션'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2025,
    title: "'12·3 비상계엄 해제 1주년' 기념행사 「빛의 민주주의, 꺼지지 않는 기억」",
    date: '2025.12.03~12.09 (미디어파사드 12.03 저녁)',
    client: '국회 · 메가온', venue: '국회 중앙잔디광장',
    category: 'Official CeREMONY', venueEn: 'National Assembly Central Lawn Square', locationEn: 'Seoul, Korea',
    production: '티클모아',
    role: 'Creative Direction · Technical Planning · Project Management',
    desc: '역사적 기억을 건축 외벽과 미디어 콘텐츠로 확장한 미디어파사드 프로젝트.',
    tasks: ['미디어파사드 콘텐츠 컨셉 및 제작 총괄', '현장 리허설 및 이벤트 진행 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2025,
    title: 'APEC 2025 KOREA 환영식 및 배우자 프로그램',
    date: '2025.10.31~11.01',
    client: 'APEC 경주 세계정상회의 · ezPMP', venue: '경주 일원(힐튼경주·신라역사관·소노캄 등)',
    category: 'Official CeREMONY', venueEn: 'Hilton Gyeongju · Silla History & Culture Center', locationEn: 'Gyeongju, Korea',
    production: 'ezPMP',
    role: 'Creative Direction · Project Management',
    desc: '공식 환영식 및 배우자 프로그램을 위한 공간 조성 및 운영',
    tasks: ['행사장 공간 디자인 및 가구·집기 조성', '공식 행사 운영 지원'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2025,
    title: '광복 80년 전야제 〈대한이 살았다!〉',
    date: '2025.08.14',
    client: '국회 × 국가보훈부 × 광복회', venue: '국회 중앙잔디광장',
    category: 'Official CeREMONY', venueEn: 'National Assembly Central Lawn Square', locationEn: 'Seoul, Korea',
    production: '티클모아',
    role: 'Creative Direction · Project Management',
    desc: '광복 80년의 메시지를 대중음악, 미디어파사드와 드론쇼로 확장한 대규모 국가 기념 문화행사.',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 관계자, 파트너 커뮤니케이션'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2025,
    title: 'The Powerful',
    date: '2025.06.27~06.29',
    client: 'BTC COMMUNICATION · 티클모아', venue: '인스파이어 아레나(인천 영종도)',
    category: 'LIVE EXPERIENCE', venueEn: 'INSPIRE Arena', locationEn: 'Yeongjongdo, Incheon, Korea',
    production: '티클모아',
    role: 'Creative Planning, Production Support.',
    desc: '음악과 무대, 관객을 대형 아레나 스케일로 연결한 공연 프로젝트.',
    tasks: ['출연진 섭외 및 공연 프로그램 기획'],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2024,
    title: '2024 BAEKHO MINI CONCERT <BAEKHoney DAY> FINAL IN TAIPEI',
    client: 'PLEDIS / HYBE',
    category: 'LIVE CONCERT & TOUR', venueEn: 'Zepp Taipei', locationEn: 'Taipei, Taiwan',
    role: 'Creative Direction · Technical Planning',
    desc: '백호 미니 콘서트 아시아 투어 파이널 공연',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 현지 파트너 커뮤니케이션'],
    image: 'https://news.agentm.tw/wp-content/uploads/384729.png', // 대만 매체 agentm.tw(電影神搜) 공식 포스터 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2023,
    title: '2023 HWANG MIN HYUN MINI CONCERT <UNVEIL> — ASIA TOUR',
    client: 'PLEDIS/HYBE · DRILL TIES',
    category: 'LIVE CONCERT & TOUR', venueEn: 'Kyung Hee University Grand Peace Palace + 6 Asian cities', locationEn: 'Seoul · Taipei · Jakarta · Macau · Bangkok · Manila · Tokyo',
    role: 'Creative Direction · Technical Planning',
    desc: '황민현 미니콘서트 아시아 투어',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 현지 파트너 커뮤니케이션'],
    image: 'https://0.soompi.io/wp-content/uploads/2023/06/26014317/hwang-minhyun-concert-1.jpeg', // Soompi 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2023,
    title: '2023 BAEKHO MINI CONCERT <BAEKHoney DAY> - ASIA TOUR',
    client: 'PLEDIS/HYBE · DRILL TIES',
    category: 'LIVE CONCERT & TOUR', venueEn: 'YES24 Live Hall', locationEn: 'Seoul, Taipei · Bangkok',
    role: 'Creative Direction · Technical Planning',
    desc: '백호 미니콘서트 서울공연 및 아시아 투어',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 현지 파트너 커뮤니케이션'],
    image: 'https://stkfile.yes24.com/upload2/PerfBlog/202304/20230412/20230412-45489_1.jpg', // YES24 공식 포스터 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2021,
    title: '"더 늦기전에" 탄소중립 캠페인 영상',
    client: '탄소중립위원회',
    category: 'PUBLIC CAMPAIGN', venueEn: 'Undisclosed', locationEn: 'Undisclosed',
    role: 'Creative Direction · Technical Support',
    desc: '탄소중립 메시지를 음악과 영상 콘텐츠로 전달한 공공 캠페인',
    tasks: [],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2020,
    title: '6·25전쟁 제70주년 국군 전사자 유해봉환식 \'영웅에게\'',
    client: '국방부 / 국가보훈처',
    category: 'OFFICIAL CEREMONY', venueEn: 'Seoul Air Base', locationEn: 'Seongnam, Korea',
    role: 'Creative Direction',
    desc: '전사자 147위의 귀환을 국가 의전과 추모의 메시지로 구성한 6·25전쟁 70주년 행사',
    tasks: [],
    image: 'https://img.asiatoday.co.kr/file/2020y/06m/24d/2020062401002600900154831.jpg', // 아시아투데이 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2019,
    title: '악뮤 새앨범<항해> 발매 기념 음감회',
    client: 'YG ENTERTAINMENT',
    category: 'LIVE EVENT', venueEn: 'Sebitseom', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '아티스트의 음악을 감상과 토크 경험으로 구성한 음악 프로그램',
    tasks: [],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2019,
    title: '상생형 구미 일자리 투자 협약식',
    client: '구미시',
    category: 'OFFICIAL CEREMONY', venueEn: 'Gumi Convention Center', locationEn: 'Gumi, Korea',
    role: 'Creative Direction, Project Management',
    desc: '산업 투자와 지역 상생의 메시지를 전달한 공식 협약식',
    tasks: [],
    image: 'https://www.segye.com/content/image/2019/07/27/20190727501885.jpg', // 세계일보 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2019,
    title: '대통령 노르웨이 순방 계기 K팝 콘서트 & 한국 음악 콘서트 <VOYAGE TO K-POP>',
    client: '주노르웨이한국문화원',
    category: 'LIVE CONCERT', venueEn: 'Sentrum Scene, Oslo Opera House', locationEn: 'Oslo, Norway',
    role: 'Creative Direction, Project Management',
    desc: '대통령 북유럽 순방 계기 문화 공연 프로그램',
    tasks: [],
    image: 'https://0.soompi.io/wp-content/uploads/2019/06/12202602/monsta-x-2.jpg', // Soompi 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2019,
    title: '정동하 콘서트',
    client: '',
    category: 'LIVE CONCERT', venueEn: 'LG Arts Center', locationEn: 'Korea',
    role: 'Creative Direction',
    desc: '정동하 앨범 발매 기념 단독 콘서트',
    tasks: [],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2018,
    title: '제70주년 국군의 날 기념식',
    client: '국방부',
    category: 'OFFICIAL CEREMONY', venueEn: 'Seoul Air Base / War Memorial of Korea', locationEn: 'Seoul, Korea',
    role: 'Creative Direction',
    desc: '국군 창설 70주년의 상징성과 대중 공연을 결합한 국가 기념행사',
    tasks: [],
    image: 'https://www.korean-culture.org/CONTENTS/editImage/20181002174241902_1.jpg', // 해외문화홍보원(문체부) 공식 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2018,
    title: '조코 위도도 인도네시아 대통령 국빈방한 — 공식환영식·국빈만찬',
    client: '청와대',
    category: 'OFFICIAL CEREMONY', venueEn: 'Cheongwadae (the Blue House)', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '인도네시아 대통령 국빈방한을 위한 공식 환영·만찬 프로그램',
    tasks: [],
    image: 'https://setkab.go.id/wp-content/uploads/2018/09/konpres-1.jpg', // 인도네시아 대통령비서실(setkab.go.id) 공식 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2018,
    title: 'DMZ 피스트레인 뮤직 페스티벌',
    client: '통일부',
    category: 'FESTIVAL', venueEn: 'DMZ / Cheorwon', locationEn: 'Gangwon, Korea',
    role: 'Production & Operation Support',
    desc: 'DMZ의 장소성과 음악을 연결한 평화·문화 페스티벌',
    tasks: [],
    image: 'https://static.wixstatic.com/media/33ab3e_0abc126c7bce48dd935cbf5bfa80ba85~mv2.jpg/v1/fill/w_980,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2018%EC%8A%AC%EB%A1%9C%EA%B1%B4.jpg', // 축제 공식 사이트(dmzpeacetrain.com) 2018 키비주얼 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2018,
    title: '에르도안 터키 대통령 국빈방문 국빈만찬',
    client: '청와대',
    category: 'OFFICIAL CEREMONY', venueEn: 'Cheongwadae (the Blue House)', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '터키 대통령 국빈방문을 위한 국가 공식 환대 프로그램',
    tasks: [],
    image: 'https://img.khan.co.kr/news/2018/05/02/l_2018050201000258800017491.jpg', // 경향신문 기사 og:image, 같은 날 청와대 환영 장면 (외부 링크, 다운로드 권장) — 만찬 장면 단독 이미지는 확인 못함
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2018,
    title: '남북평화 협력기원 남측예술단 평양공연 〈봄이 온다〉',
    client: '청와대 / 통일부',
    category: 'LIVE CONCERT', venueEn: 'East Pyongyang Grand Theatre · Ryugyong Chung Ju-yung Gymnasium', locationEn: 'Pyongyang, North Korea',
    role: 'Creative Direction, Project Management',
    desc: '남북정상회담의 문화적 교류를 상징한 남측예술단 평양 공연',
    tasks: [],
    image: 'https://www.korean-culture.org/CONTENTS/editImage/20180402173214530_1.jpg', // 해외문화홍보원(문체부) 공식 기사 이미지, 한국사진기자협회 크레딧 (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2017,
    title: '트럼프 미국 대통령 초청 국빈만찬',
    client: '청와대',
    category: 'OFFICIAL CEREMONY', venueEn: 'Yeongbingwan State Guest House, Cheongwadae', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '미국 대통령 국빈방한을 위한 국가 공식 환대 만찬',
    tasks: [],
    image: 'https://img1.newsis.com/2017/11/07/NISI20171107_0013541936_web.jpg', // 뉴시스 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2017,
    title: '대통령직속 4차산업혁명위원회 출범식·1차 회의',
    client: '대통령직속 4차산업혁명위원회',
    category: 'OFFICIAL CEREMONY', venueEn: 'S-PLEX Center', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '4차 산업혁명 정책 의제의 출범을 알린 대통령 직속 위원회 공식 행사',
    tasks: [],
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2017,
    title: '합참의장 이·취임식',
    client: '국방부',
    category: 'OFFICIAL CEREMONY', venueEn: 'Ministry of National Defense', locationEn: 'Korea',
    role: 'Creative Direction, Project Management',
    desc: '군 지휘체계의 이양을 공식 의전으로 구성한 합참의장 이·취임식',
    tasks: [],
    image: 'https://img.seoul.co.kr//img/upload/2017/08/21/SSI_20170821093317_O2.jpg', // 서울신문 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'DRILLTIES', companyLabel: 'DRILL TIES', year: 2017,
    title: '인디스땅스 2017',
    client: '경기콘진원',
    category: 'FESTIVAL', venueEn: 'Undisclosed', locationEn: 'Korea',
    role: 'Creative Direction, Project Management',
    desc: '인디 뮤지션 발굴을 위한 오디션 프로그램 운영 및 파이널 콘서트 연출',
    tasks: [],
  },

  /* ---------------- FIG ---------------- */
  {
    company: 'FIG', companyLabel: 'FIG', year: 2025,
    title: '2025 BTS FESTA',
    date: '2025.06.13~06.14',
    client: '빅히트뮤직/HYBE · FIG', venue: '킨텍스 제2전시장 9,10홀',
    category: 'LIVE EXPERIENCE / EXHIBITION', venueEn: 'KINTEX Exhibition Hall 2, Halls 9-10', locationEn: 'Goyang, Korea',
    production: 'FIG',
    role: 'Creative Direction · Project Management',
    desc: 'BTS 데뷔 12주년을 기념한 공식 팬 이벤트. KINTEX 9·10홀을 아카이브, 체험, 라이트쇼 등 다양한 콘텐츠로 구성.',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2025,
    title: 'YouTube FanFest Korea 2025 — Live Show (Presented by U+)',
    date: '06.15',
    client: '유튜브 · FIG', venue: 'KBS아레나',
    category: 'LIVE CONCERT / BRAND EXPERIENCE', venueEn: 'KBS Arena', locationEn: 'Seoul, Korea',
    production: 'FIG',
    role: 'Creative Direction · Project Management',
    desc: '크리에이터·아티스트·팬이 함께 만드는 YouTube FanFest Korea 2025',
    tasks: ['프로그램 및 공연 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 파트너 커뮤니케이션', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/YouTube_Fanfest_2025.png', // YouTube 공식 블로그 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: 'dingo music concert 〈Killing Voice〉',
    client: 'MAKEUS(dingo music) · FIG',
    category: 'LIVE CONCERT / BRAND EXPERIENCE', venueEn: 'Olympic Park Handball Gymnasium', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '디지털 음악 콘텐츠를 대형 라이브 무대와 관객 참여로 확장한 첫번째 라이브 이벤트',
    tasks: ['공연 컨셉 개발 및 기획 총괄', '프로그램 및 공연 구성 총괄', '출연진 섭외 및 공연 프로그램 기획', '현장 리허설 및 쇼 플로우 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션'],
    image: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202407/31/202407311513165603.jpg', // 위키트리 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: '2024 인천펜타포트 락 페스티벌 — HILLSTATE Lounge',
    client: '현대건설 (HILLSTATE) · FIG',
    category: 'BRAND EXPERIENCE', venueEn: 'Incheon Pentaport Rock Festival', locationEn: 'Incheon, Korea',
    role: 'Creative Direction · Project Management',
    desc: '브랜드 아이덴티티를 휴식·체험·VIP 공간으로 확장한 HILLSTATE Lounge 제작 및 운영',
    tasks: ['컨셉 개발 및 기획 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://www1.hdec.kr/FileContents/NewsWideImage/20240812/86032017497899008.jpg', // 현대건설 뉴스룸 공식 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: 'Bombay Sapphire \'STIR CREATIVITY\' Pop-up',
    client: 'Bacardi Korea · FIG',
    category: 'POP-UP / BRAND EXPERIENCE', venueEn: 'LCDC SEOUL', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Technical Planning',
    desc: '브랜드의 크리에이티브 메시지를 아티스트 협업과 바 경험으로 확장한 팝업 캠페인',
    tasks: ['행사장 디자인 및 조성', '운영 계획 및 관계자, 협력사 커뮤니케이션'],
    image: 'https://i3n.news1.kr/system/photos/2024/7/5/6744839/high.jpg', // 뉴스1 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: 'The Beautiful',
    client: 'BTC Communication · 티클모아',
    category: 'LIVE CONCERT', venueEn: 'INSPIRE Arena', locationEn: 'Incheon, Korea',
    role: 'Creative Direction · Project Management',
    desc: '음악과 무대, 관객을 대형 아레나 스케일로 연결한 공연 프로젝트',
    tasks: ['출연진 섭외 및 공연 프로그램 기획'],
    image: 'https://www.ddanzi.com/./files/attach/images/977701/340/884/804/be987c728fc663b80ad9a087a7a6fe2c.PNG', // 딴지일보 기사 og:image, 현장 사진(공식 포스터 아님) (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: 'adidas Equipment: Forever Pioneering the Original — \'The Sound Unseen\'',
    client: 'adidas · FIG',
    category: 'LIVE EXPERIENCE / BRAND EXPERIENCE', venueEn: 'Layer 41', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '아디다스 EQT의 헤리티지를 사운드·AV 퍼포먼스·공간으로 재해석한 브랜드 프로젝트',
    tasks: ['컨셉 개발 및 기획 총괄', '프로그램 및 공연 구성 총괄', '출연진 섭외 및 공연 프로그램 기획', '출연진 및 파트너 커뮤니케이션', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: 'PODO Private Residence Seoul — Interiors by FENDI Casa',
    client: 'PODO Private Residences × FENDI Casa · FIG',
    category: 'VIP EVENT', venueEn: 'The Shilla Seoul', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '아시아 최초 FENDI Casa 하이엔드 레지던스 서울 론칭 기념 VIP 이벤트',
    tasks: ['컨셉 개발 및 기획 총괄', '프로그램 및 공연 구성 총괄', '출연진 섭외 및 공연 프로그램 기획', '출연진 및 파트너 커뮤니케이션', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://cdn.forbeskorea.co.kr/news/photo/202405/20240525_1_339793.jpg', // 포브스코리아 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2024,
    title: '원티드랩 컬처 프로젝트',
    client: '원티드랩 · FIG',
    category: 'CONFERENCE / BRAND EXPERIENCE', venueEn: 'Peaches. D8NE', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '강연과 문화 프로그램을 결합해 브랜드와 커뮤니티의 접점을 만든 컬처 프로젝트',
    tasks: ['컨셉 개발 및 기획 총괄', '프로그램 및 구성 총괄', '출연진 섭외 및 프로그램 기획', '출연진 및 파트너 커뮤니케이션', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://static.wanted.co.kr/events/offroadstation2024/og_image.png', // 원티드랩 공식 행사 페이지(오프로드 스테이션 2024) og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2023,
    title: 'Club ARC with Antenna',
    client: 'LG Arts Center Seoul × Antenna Music · FIG',
    category: 'LIVE EXPERIENCE / BRAND EXPERIENCE', venueEn: 'LG Arts Center Seoul', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: 'LG아트센터와 안테나뮤직의 협업을 전시와 라이브로 구현한 이머시브 공연 시리즈',
    tasks: ['컨셉 개발 및 기획 총괄', '공연 및 전시 프로그램 구성 총괄', '출연진별 컨셉 및 프로그램 기획', '출연진 및 파트너 커뮤니케이션', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://www.lgart.com/Down/Perf/202310/03.%ED%81%B4%EB%9F%BD%EC%95%84%ED%81%AC_%EC%99%93%EC%B8%A0%EC%98%A8_%EB%B0%B0%EB%84%88_1025.png', // LG아트센터 공식 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2023,
    title: 'Hanwha LIFEPLUS × Refik Anadol 《Machine Simulations: Life and Dreams - 희로애락》',
    client: 'Hanwha LIFEPLUS / INNOCEAN · FIG',
    category: 'OFFICIAL CEREMONY / VIP EVENT', venueEn: '63 Building', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: 'Refik Anadol의 미디어아트 작품 오프닝을 기념하는 프리뷰 프로젝트와 VIP 프로그램',
    tasks: ['컨셉 개발 및 기획 총괄', '공연 및 전시 프로그램 구성 총괄', '출연진 및 파트너 커뮤니케이션', '현장 리허설 및 쇼 플로우 총괄', '공간 디자인 및 제작, 설치 총괄', '운영 계획 및 관계자, 협력사 커뮤니케이션', '행사 정산 및 예산 관리'],
    image: 'https://www.koreaittimes.com/news/thumbnail/202310/125512_73641_3348_v150.jpg', // Korea IT Times 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2023,
    title: 'Jose Cuervo \'Sunset Fiesta\'',
    client: 'Jose Cuervo (FJ Korea) · FIG',
    category: 'LIVE CONCERT / BRAND EXPERIENCE', venueEn: 'Sebitseom Gavit Sebitmaru', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Technical Planning',
    desc: '브랜드의 파티 무드를 라이브 공연과 현장 경험으로 구현한 미니콘서트',
    tasks: ['공연 프로그램 구성 총괄', '현장 리허설 및 쇼 플로우 총괄', '출연진 및 파트너 커뮤니케이션'],
    image: 'https://cdn.itbiznews.com/news/photo/202309/111243_107376_1428.jpg', // IT비즈뉴스 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2023,
    title: '제주맥주 곰표 × Netflix 콜라보 캠페인',
    client: '제주맥주 × 대한제분(곰표) × Netflix · FIG',
    category: 'BRAND CAMPAIGN', venueEn: 'Jeju Beer Jeju Brewery', locationEn: 'Jeju, Korea',
    role: 'Creative Direction · Project Management',
    desc: '브랜드와 콘텐츠 IP의 협업을 팝업·포토존·바이럴 경험으로 확장한 캠페인',
    tasks: ['팝업 포토존 운영', '인플루언서 바이럴 기획 및 시딩 진행'],
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2023,
    title: 'dingo 오프라인 BI 리뉴얼',
    client: 'MAKEUS (dingo) · FIG',
    category: 'BRAND DEVELOPMENT', venueEn: 'Undisclosed', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '딩고의 오프라인 IP확장을 위한 BI와 전용 시각 언어를 구축한 브랜드 리뉴얼',
    tasks: ['브랜딩 컨셉 개발', 'BI 개발 및 가이드라인 제작 총괄'],
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2022,
    title: 'CJ NIGHT for FRIEZE SEOUL',
    client: 'CJ · FIG',
    category: 'VIP EVENT', venueEn: 'Leeum Museum of Art', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: 'Frieze Seoul 기간 문화·예술 네트워크를 위한 프라이빗 나이트',
    tasks: [],
    image: 'http://img.tf.co.kr/article/home/2022/09/01/202211141662034358.jpg', // 더팩트(The Fact) 포토기사 (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2022,
    title: '언더시티 프로젝트 2022',
    client: '부평문화재단',
    category: 'FESTIVAL', venueEn: 'Bupyeong Art Center', locationEn: 'Incheon, Korea',
    role: 'Creative Direction · Project Management',
    desc: '로컬 콘텐츠와 공간을 결합한 도시형 페스티벌',
    tasks: [],
    image: 'https://cdn.incheontoday.com/news/photo/202209/221049_225151_562.jpg', // 인천투데이 기사/포스터 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2021,
    title: '2021 P4G 서울 녹색미래 정상회의 개회식',
    client: 'P4G 서울정상회의 준비기획단 · ezPMP',
    category: 'OFFICIAL CEREMONY', venueEn: 'DDP', locationEn: 'Seoul, Korea',
    role: 'Creative Planning · Content Producing',
    desc: '기후 의제를 정상회의의 메시지·영상·하이브리드 운영으로 전달한 국제행사 개회식',
    tasks: [],
    image: 'https://img.khan.co.kr/news/2021/05/30/l_2021053001023373100289621.jpg', // 경향신문 경향포토 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2019,
    title: 'ASEAN Fantasia',
    client: '한-아세안 특별정상회의 · MAC COMMUNICATION',
    category: 'LIVE CONCERT', venueEn: 'Changwon Indoor Gymnasium', locationEn: 'Busan, Korea',
    role: 'Creative Direction, Project Management',
    desc: '한-아세안 특별정상회의의 문화적 결합을 K-팝 콘서트로 전하는 전야 콘서트',
    tasks: [],
    image: 'https://cdn.koreatraveleasy.com/wp-content/uploads/2019/11/08191315/banner-asean-conert-2.jpg', // KoreaTravelEasy 공식 행사 페이지 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2019,
    title: '한-아세안 특별정상회의 공식 만찬 공연 프로그램',
    client: '한-아세안 특별정상회의 · ezPMP',
    category: 'OFFICIAL CEREMONY', venueEn: 'Ananti Hotel', locationEn: 'Busan, Korea',
    role: 'Creative Direction, Content Produce',
    desc: '한-아세안 특별정상회의 정산 만찬 기념 공연',
    tasks: [],
  },

  {
    company: 'FIG', companyLabel: 'FIG', year: 2019,
    title: '판문점선언 1주년 기념 문화공연 〈먼 길〉',
    client: '통일부 · MAC COMMUNICATION',
    category: 'LIVE EVENT / OFFICIAL CEREMONY', venueEn: 'Panmunjom', locationEn: 'Korea',
    role: 'Creative Direction, Content Produce',
    desc: '판문점선언 1주년의 의미를 공연과 기념 프로그램으로 전달한 문화행사',
    tasks: [],
    image: 'https://img.sbs.co.kr/newimg/news/20190427/201307653_1280.jpg', // SBS뉴스 기사 og:image (외부 링크, 다운로드 권장)
  },

  /* ---------------- NBNDR ---------------- */
  {
    company: 'NBNDR', companyLabel: 'NBNDR', year: 2022,
    title: '진급 장성 삼정검 수여식',
    client: '국방부 · NBNDR',
    category: 'OFFICIAL CEREMONY', venueEn: 'Cheongwadae (the Blue House)', locationEn: 'Seoul, Korea',
    role: 'Creative Direction · Project Management',
    desc: '군 의전의 상징성과 절차를 공간 설치와 행사 연출로 구현한 공식 수여식',
    tasks: [],
    image: 'https://image.fnnews.com/resource/media/image/2022/03/31/202203311638428060_l.jpg', // 파이낸셜뉴스 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'NBNDR', companyLabel: 'NBNDR', year: 2020,
    title: '진급 장성 삼정검 수여식',
    client: '국방부 · NBNDR',
    category: 'OFFICIAL CEREMONY', venueEn: 'Cheongwadae (the Blue House)', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: '군 공식 의전 프로그램으로 진행된 진급 장성 삼정검 수여식',
    tasks: [],
    image: 'https://t1.daumcdn.net/news/202006/02/yonhap/20200602151558060payl.jpg', // 연합뉴스(다음뉴스 경유) 기사 이미지 (외부 링크, 다운로드 권장)
  },

  {
    company: 'NBNDR', companyLabel: 'NBNDR', year: 2018,
    title: 'PiKONICDAY',
    client: 'YG ENTERTAINMENT · NBNDR',
    category: 'LIVE EVENT', venueEn: 'Yeouido Hangang Park', locationEn: 'Seoul, Korea',
    role: 'Creative Direction, Project Management',
    desc: 'iKON 퍼블릭 팬 이벤트(체험, 전시, 퍼포먼스 진행)',
    tasks: [],
    image: 'https://yg-life.com/wp-content/uploads/2018/07/91a66859b84bd72d23d66fe5a4fa0c8f-e1532510188328.jpg', // YG라이프(YG공식 프레스사이트) 기사 og:image (외부 링크, 다운로드 권장)
  },

  {
    company: 'NBNDR', companyLabel: 'NBNDR', year: 2018,
    title: 'MAMF 2015~2018',
    client: 'NBNDR',
    category: 'FESTIVAL', venueEn: 'Yongji Cultural Park, Seongsan Art Hall, Changwon Jungang-daero area', locationEn: 'Changwon, Korea',
    role: 'Creative Direction',
    desc: '창원에서 열리는 대한민국 대표 문화다양성 축제',
    tasks: [],
  },

];

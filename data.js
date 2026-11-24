/* ============================================================
   프로젝트 아카이브 데이터
   ------------------------------------------------------------
   이 파일만 수정하면 사이트 내용이 바뀝니다.

   2026-11-22 — "DRILL_TIES 사이트텍스트 수정용" 엑셀 기준 전면 갱신.
   · role / tasks 는 { en: 영문, ko: 국문 } 짝으로 적습니다.
   · desc 는 국문, descEn 은 영문 한 줄 설명입니다 (EN/KR 토글로 하나만 표시).
   · category 는 적힌 그대로 화면에 표시됩니다(대문자 변환만 자동).
============================================================ */
const PROJECTS = [

  {
    company: "FIG", year: 2026,
    title: "Panorama Walk Opening Ceremony",
    client: "INA · FIG",
    category: "Official Ceremony",
    venueEn: "",
    locationEn: "Gwangyang, Korea",
    desc: "구봉산 정상에 조성된 체험형 전망시설 제막 기념 행사",
    descEn: "Opening ceremony for a new observation landmark atop Gubongsan Mountain.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Talent & Partner Communications", ko: "출연진·협력사 커뮤니케이션" },
    ],
    localImage: "images/projects/2026-panorama-walk.jpg",
  },

  {
    company: "DRILLTIES", year: 2026,
    title: "LE SSERAFIM 〈PURE FLOWERS LIVE〉 Presented by Spotify",
    client: "Spotify Korea · FIG",
    category: "Live Event",
    venueEn: "Seosomun Shrine History Museum",
    locationEn: "Seoul, Korea",
    desc: "르세라핌의 두 번째 정규 앨범인 'PUREFLOW' Pt.1 발매를 기념하여 스포티파이 프리미엄 유저를 대상으로 개최한 프라이빗 라이브 이벤트",
    descEn: "A private live event for Spotify Premium users celebrating LE SSERAFIM's 'PUREFLOW' Pt.1.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진·협력사 커뮤니케이션" },
    ],
    date: "2026.05.21",
    production: "FIG",
    image: "https://storage.googleapis.com/pr-newsroom-wp/1/2026/06/HEADER-ONLY-2277683620-scaled.jpg",
  },

  {
    company: "DRILLTIES", year: 2026,
    title: "〈겸손은힘들다〉 Live Tour",
    client: "Live Land Co., Ltd. · Ticklemore",
    category: "Live Concert",
    venueEn: "DCC · KINTEX · EXCO · BEXCO and more",
    locationEn: "6 Cities, Korea",
    desc: "토크 콘서트 기획·연출 및 전국 투어 총괄",
    descEn: "A talk concert, planned and directed, then taken on a nationwide tour.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    date: "2026.03.14 – 05.16",
    production: "Drill ties",
    image: "https://tkfile.yes24.com/upload2/PerfBlog/202601/20260129/20260129-56961.jpg",
    localImage: "images/projects/2026-gyeomson-live-tour-v2.jpg",
  },

  {
    company: "DRILLTIES", year: 2026,
    title: "K-Dream Stage: All India K-Pop Grand Championship 2026",
    client: "Korean Cultural Centre India · MAC Communication",
    category: "Official Ceremony",
    venueEn: "Yashobhoomi Indoor Stadium",
    locationEn: "New Delhi, India",
    desc: "인도 전역의 K-POP 경연을 결산하는 대규모 챔피언십으로, 현지 팬과 한류 콘텐츠를 연결한 문화교류 프로젝트",
    descEn: "India's largest K-pop championship, connecting local fans with Korean culture.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "VIP Protocol & Official Ceremony Management", ko: "VIP 의전 및 공식 행사 운영 총괄" },
      { en: "Local Partner & Talent Communications", ko: "현지 협력사 및 출연진 커뮤니케이션" },
      { en: "International Logistics & Project Management", ko: "해외 일정·물류 및 프로젝트 관리" },
    ],
    date: "2026.04.20",
    production: "MAC Communication",
    image: "https://m.economictimes.com/thumb/msid-130335829%2Cwidth-1200%2Cheight-1200%2Cresizemode-4%2Cimgsize-97078/img_4833-.jpg",
    localImage: "images/projects/2026-k-dream-stage.jpg",
  },

  {
    company: "DRILLTIES", year: 2026,
    title: "OMIYAGE+ 일본 프리미엄 오미야게 팝업 이벤트",
    client: "Japan Omiyage Association · Irae Company",
    category: "POP-UP Event",
    venueEn: "IFC Mall",
    locationEn: "Seoul, Korea",
    desc: "일본 각 지역을 대표하는 디저트 브랜드 4곳이 일본 여행의 오미야게 쇼핑 경험을 현지처럼 즐길 수 있도록 기획한 팝업 이벤트",
    descEn: "A pop-up bringing four regional Japanese dessert brands and the omiyage experience to Seoul.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
    ],
    tasks: [
      { en: "Concept & Program Planning", ko: "콘셉트 및 프로그램 기획" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Brand & Partner Communications", ko: "브랜드 및 협력사 커뮤니케이션" },
    ],
    date: "2026.01",
    production: "이래컴퍼니(Irae Company)",
    image: "https://pimg.mk.co.kr/news/cms/202601/30/news-p.v1.20260130.693a58896e144a038a31987af0cab238_R.jpg",
    localImage: "images/projects/2026-omiyage.jpg",
  },

  {
    company: "DRILLTIES", year: 2026,
    title: "故 신영복 선생 서거 10주기 추모식",
    client: "Sungkonghoe University · Deobureosup · Dolbegae Publishers",
    category: "Memorial Ceremony",
    venueEn: "Sungkonghoe University St. Michael's Chapel",
    locationEn: "Seoul, Korea",
    desc: "故 신영복 선생 서거 10주기 추모식",
    descEn: "Memorial ceremony marking the 10th anniversary of Shin Young-bok's passing.",
    role: [
      { en: "Event Management", ko: "행사 운영" },
    ],
    tasks: [
      { en: "Event Coordination & On-site Operations", ko: "행사 진행 및 현장 운영 총괄" },
    ],
    date: "2026.01.15",
    production: "성공회대",
    localImage: "images/projects/2026-shin-young-bok-memorial.jpg",
  },

  {
    company: "DRILLTIES", year: 2025,
    title: "'12·3 비상계엄 해제 1주년' 기념행사 〈빛의 민주주의, 꺼지지 않는 기억〉",
    client: "National Assembly of the Republic of Korea · MEGAON",
    category: "Official Ceremony",
    venueEn: "National Assembly Central Lawn Square",
    locationEn: "Seoul, Korea",
    desc: "역사적 기억을 건축 외벽과 미디어 콘텐츠로 확장한 미디어파사드 프로젝트",
    descEn: "A media façade project projecting historical memory onto architecture.",
    role: [
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Concept & Program Planning", ko: "콘셉트 및 프로그램 기획" },
      { en: "Media Façade Production & On-site Operations", ko: "미디어 파사드 제작 및 현장 운영 총괄" },
      { en: "Artist & Partner Communications", ko: "아티스트·협력사 커뮤니케이션" },
    ],
    date: "2025.12.03",
    production: "티클모아",
    localImage: "images/projects/2025-december-3-democracy-v2.jpg",
  },

  {
    company: "DRILLTIES", year: 2025,
    title: "APEC 2025 KOREA 공식 환영식",
    client: "APEC 2025 KOREA",
    category: "Official Ceremony",
    venueEn: "Silla History & Culture Center",
    locationEn: "Gyeongju, Korea",
    desc: "공식 환영식 진행 및 배우자 프로그램 공간 조성",
    descEn: "Official welcome ceremony and spouse program spaces for APEC 2025 KOREA.",
    role: [
      { en: "On-site Operations", ko: "현장 운영" },
    ],
    tasks: [
      { en: "Event Coordination & On-site Operations Support", ko: "행사 진행 및 현장 운영" },
    ],
    date: "2025.10.31~11.01",
    production: "ezPMP",
    image: "https://jinju.museum.go.kr/_prog/download/?func_gbn_cd=popup_zone&mng_no=411",
    localImage: "images/projects/2025-apec-welcome.jpg",
  },

  {
    company: "DRILLTIES", year: 2025,
    title: "광복 80년 전야제 〈대한이 살았다!〉",
    client: "National Assembly of the Republic of Korea · MEGAON",
    category: "Official Ceremony",
    venueEn: "National Assembly Central Lawn Square",
    locationEn: "Seoul, Korea",
    desc: "광복 80년의 메시지를 대중음악, 미디어파사드와 드론쇼로 확장한 대규모 국가 기념 문화행사",
    descEn: "A national celebration of Liberation's 80th anniversary through music, media façade and drones.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Talent & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    date: "2025.08.14",
    production: "티클모아",
    image: "https://korea815.go.kr/images/site/kor/sub/event1_img06.jpg",
    localImage: "images/projects/2025-liberation-80-eve-v2.jpg",
  },

  {
    company: "DRILLTIES", year: 2025,
    title: "The Powerful",
    client: "BTC Communication · Ticklemore",
    category: "Live Concert",
    venueEn: "INSPIRE Arena",
    locationEn: "Incheon, Korea",
    desc: "음악과 무대, 관객을 대형 아레나 스케일로 연결한 공연 프로젝트",
    descEn: "An arena-scale show connecting music, stage and audience.",
    role: [
      { en: "Creative Direction & Production Support", ko: "크리에이티브 디렉션 및 제작 지원" },
    ],
    tasks: [
      { en: "Performance Content Planning & Production Support", ko: "공연 콘텐츠 기획 및 제작 지원" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    date: "2025.06.27~06.29",
    production: "티클모아",
    localImage: "images/projects/2025-the-powerful.gif",
  },

  {
    company: "FIG", year: 2025,
    title: "2025 BTS FESTA",
    client: "BIGHIT MUSIC · HYBE · FIG",
    category: "Live Experience · Exhibition",
    venueEn: "KINTEX",
    locationEn: "Goyang, Korea",
    desc: "BTS 데뷔 12주년을 기념한 공식 팬 이벤트",
    descEn: "Official fan event celebrating BTS's 12th debut anniversary.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Event Direction", ko: "프로그램 기획 및 행사 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Brand & Partner Communications", ko: "브랜드 및 협력사 커뮤니케이션" },
    ],
    date: "2025.06.13~06.14",
    production: "FIG",
    image: "https://cf.creatrip.com/occasion/b0630cc20d658pe42deee498e0bd65e93gbj.jpeg",
    localImage: "images/projects/2025-bts-festa.jpg",
  },

  {
    company: "FIG", year: 2025,
    title: "YouTube FanFest Korea 2025 Live Show",
    client: "YOUTUBE Korea · FIG",
    category: "Live Concert",
    venueEn: "KBS Arena",
    locationEn: "Seoul, Korea",
    desc: "대한민국 대표 크리에이터들과 함께하는 축제, 유튜브 팬페스트 코리아",
    descEn: "Live show for YouTube FanFest Korea with the country's top creators.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    date: "2025.06.15",
    production: "FIG",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/YouTube_Fanfest_2025.png",
    localImage: "images/projects/2025-youtube-fanfest.jpg",
  },

  {
    company: "NBNDR", year: 2024, displayYear: "2023-2024",
    title: "BAEKHO MINI CONCERT 〈BAEKHoney DAY〉",
    client: "PLEDIS Entertainment · HYBE",
    category: "Live Concert",
    venueEn: "YES24 Live Hall and more",
    locationEn: "Seoul · Tokyo · Taipei · Bangkok",
    desc: "백호 미니콘서트 서울 공연 및 아시아 투어 연출",
    descEn: "BAEKHO's mini concert in Seoul and its Asia tour.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Local Partner & Talent Communications", ko: "현지 협력사 및 출연진 커뮤니케이션" },
    ],
    image: "https://stkfile.yes24.com/upload2/PerfBlog/202304/20230412/20230412-45489_1.jpg",
  },

  {
    company: "FIG", year: 2024,
    title: "dingo music concert 〈Killing Voice〉",
    client: "MAKEUS · FIG",
    category: "Live Concert",
    venueEn: "Olympic Park Handball Gymnasium",
    locationEn: "Seoul, Korea",
    desc: "디지털 음악 콘텐츠를 대형 라이브 무대와 관객 참여로 확장한 첫번째 라이브 이벤트",
    descEn: "dingo's first live concert, turning digital music content into an arena stage.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://cdnweb01.wikitree.co.kr/webdata/editor/202407/31/202407311513165603.jpg",
    localImage: "images/projects/2024-killing-voice.gif",
  },

  {
    company: "FIG", year: 2024,
    title: "HILLSTATE X Incheon Pentaprot Rock Festival 2024",
    client: "Hyundai E&C · FIG",
    category: "Brand Experience",
    venueEn: "Incheon Pentaport Rock Festival",
    locationEn: "Incheon, Korea",
    desc: "국내 건설사 최초로 페스티벌 스폰서가 되어 다채로운 구성의 부스와 프로그램 운영",
    descEn: "The first construction brand to sponsor the festival, with booths and programs on site.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Event Direction", ko: "프로그램 기획 및 행사 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Brand & Partner Communications", ko: "브랜드 및 협력사 커뮤니케이션" },
    ],
    image: "https://www1.hdec.kr/FileContents/NewsWideImage/20240812/86032017497899008.jpg",
    localImage: "images/projects/2024-hillstate-pentaport.jpg",
  },

  {
    company: "FIG", year: 2024,
    title: "The Beautiful",
    client: "BTC Communication",
    category: "Live Concert",
    venueEn: "INSPIRE Arena",
    locationEn: "Incheon, Korea",
    desc: "음악과 무대, 관객을 대형 아레나 스케일로 연결한 공연 프로젝트",
    descEn: "An arena-scale show connecting music, stage and audience.",
    role: [
      { en: "Creative Direction & Production Support", ko: "크리에이티브 디렉션 및 제작 지원" },
    ],
    tasks: [
      { en: "Performance Content Planning & Production Support", ko: "공연 콘텐츠 기획 및 제작 지원" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.ddanzi.com/./files/attach/images/977701/340/884/804/be987c728fc663b80ad9a087a7a6fe2c.PNG",
    localImage: "images/projects/2024-the-beautiful.jpg",
  },

  {
    company: "FIG", year: 2024,
    title: "adidas Equipment: Forever Pioneering the Original 〈The Sound Unseen〉",
    client: "ADIDAS Confirmed · FIG",
    category: "Live Experience · Exhibition",
    venueEn: "Layer 41",
    locationEn: "Seoul, Korea",
    desc: "아디다스 EQT의 헤리티지를 사운드·AV 퍼포먼스·공간으로 재해석한 브랜드 프로젝트",
    descEn: "adidas EQT heritage reimagined through sound, AV performance and space.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    localImage: "images/projects/2024-adidas-eqt.png",
  },

  {
    company: "FIG", year: 2024,
    title: "PODO Private Residence Seoul by FENDI Casa Launching Show",
    client: "Golden Tree · FIG",
    category: "VIP Ceremony",
    venueEn: "The Shilla Seoul",
    locationEn: "Seoul, Korea",
    desc: "아시아 최초 FENDI Casa 하이엔드 레지던스 서울 론칭 기념 VIP 이벤트",
    descEn: "VIP launch event for Asia's first FENDI Casa branded residence.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://cdn.forbeskorea.co.kr/news/photo/202405/20240525_1_339793.jpg",
    localImage: "images/projects/2024-podo-fendi-casa.jpg",
  },

  {
    company: "FIG", year: 2024,
    title: "원티드랩 컬처 프로젝트 〈2024 WANTED OFFROAD STATION〉",
    client: "WANTED · FIG",
    category: "Brand Experience · Conference",
    venueEn: "Peaches. D8NE",
    locationEn: "Seoul, Korea",
    desc: "강연과 문화 프로그램을 결합해 브랜드와 커뮤니티의 접점을 만든 컬처 프로젝트",
    descEn: "A culture project combining talks and programs to bring brand and community together.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://static.wanted.co.kr/events/offroadstation2024/og_image.png",
    localImage: "images/projects/2024-wanted-offroad.jpg",
  },

  {
    company: "NBNDR", year: 2023,
    title: "HWANG MIN HYUN MINI CONCERT 〈UNVEIL〉",
    client: "PLEDIS Entertainment · HYBE",
    category: "Live Concert",
    venueEn: "Kyung Hee University Grand Peace Palace and more",
    locationEn: "Seoul · Taipei · Jakarta · Macau · Bangkok · Manila · Tokyo",
    desc: "황민현 미니콘서트 서울 공연 및 아시아 투어 연출",
    descEn: "HWANG MIN HYUN's mini concert in Seoul and its Asia tour.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Local Partner & Talent Communications", ko: "현지 협력사 및 출연진 커뮤니케이션" },
    ],
    image: "https://image.toast.com/aaaaab/ticketlink/TKL_1/hwang_pst_0628.jpg",
  },

  {
    company: "FIG", year: 2023,
    title: "Club ARC with Antenna",
    client: "LG Arts Center Seoul × Antenna Music · FIG",
    category: "Live Concert · Exhibition",
    venueEn: "LG Arts Center Seoul",
    locationEn: "Seoul, Korea",
    desc: "LG아트센터와 안테나뮤직의 협업을 전시와 라이브로 구현한 이머시브 공연 시리즈",
    descEn: "An immersive series bringing LG Arts Center and Antenna Music together through exhibition and live shows.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.lgart.com/Down/Perf/202310/03.%ED%81%B4%EB%9F%BD%EC%95%84%ED%81%AC_%EC%99%93%EC%B8%A0%EC%98%A8_%EB%B0%B0%EB%84%88_1025.png",
    localImage: "images/projects/2023-club-arc.jpg",
  },

  {
    company: "FIG", year: 2023,
    title: "Hanwha LIFEPLUS × Refik Anadol 〈Machine Simulations: Life and Dreams - 희로애락〉 Opening Event",
    client: "INNOCEAN · FIG",
    category: "VIP Ceremony",
    venueEn: "63 Building",
    locationEn: "Seoul, Korea",
    desc: "Refik Anadol의 미디어아트 작품 오프닝을 기념하는 프리뷰 프로젝트와 VIP 프로그램",
    descEn: "Preview opening and VIP program for Refik Anadol's media art exhibition.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.koreaittimes.com/news/thumbnail/202310/125512_73641_3348_v150.jpg",
    localImage: "images/projects/2023-hanwha-lifeplus.jpg",
  },

  {
    company: "FIG", year: 2023,
    title: "dingo 오프라인 BI 리뉴얼",
    client: "MAKEUS · FIG",
    category: "BRAND CONSULTING",
    venueEn: "Undisclosed",
    locationEn: "Seoul, Korea",
    desc: "딩고의 오프라인 IP 확장을 위한 BI와 전용 시각 언어를 구축한 브랜드 리뉴얼",
    descEn: "Brand identity and visual language for dingo's offline IP expansion.",
    role: [
      { en: "Creative Direction", ko: "크리에이티브 디렉션" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Brand Concept & Identity Development", ko: "브랜딩 컨셉 및 BI 개발" },
    ],
  },

  {
    company: "FIG", year: 2022,
    title: "CJ NIGHT for FRIEZE SEOUL 2022",
    client: "CJ · FIG",
    category: "VIP Ceremony",
    venueEn: "Leeum Museum of Art",
    locationEn: "Seoul, Korea",
    desc: "Frieze Seoul 기간 문화·예술 네트워크를 위한 프라이빗 나이트",
    descEn: "A private night for the art and culture network during Frieze Seoul.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진 및 협력사 커뮤니케이션" },
    ],
    image: "http://img.tf.co.kr/article/home/2022/09/01/202211141662034358.jpg",
    localImage: "images/projects/2022-cj-night-frieze.png",
  },

  {
    company: "FIG", year: 2022,
    title: "언더시티 프로젝트 2022",
    client: "Bupyeong Cultural Foundation",
    category: "Festival",
    venueEn: "Bupyeong Art Center",
    locationEn: "Incheon, Korea",
    desc: "로컬 콘텐츠와 공간을 결합한 도시형 페스티벌",
    descEn: "An urban festival blending local content and space.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진 및 협력사 커뮤니케이션" },
    ],
    image: "https://cdn.incheontoday.com/news/photo/202209/221049_225151_562.jpg",
    localImage: "images/projects/2022-undercity.jpg",
  },

  {
    company: "FIG", year: 2021,
    title: "2021 P4G 서울 녹색미래 정상회의 개회식",
    client: "P4G Seoul Summit Preparatory Office",
    category: "Official Ceremony",
    venueEn: "DDP",
    locationEn: "Seoul, Korea",
    desc: "기후 의제를 정상회의의 메시지·영상·하이브리드 운영으로 전달한 국제행사 개회식",
    descEn: "Opening ceremony of the P4G Seoul Summit, delivering the climate agenda in hybrid format.",
    role: [
      { en: "Creative Direction & Production Support", ko: "크리에이티브 디렉션 및 제작 지원" },
    ],
    tasks: [
      { en: "Performance Content Planning & Production Support", ko: "공연 콘텐츠 기획 및 제작 지원" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.hanwha.com/content/dam/hanwha/news_and_media/hanwha-insight/hanwha-outlines-path-for-measurable-progress-against-climate-change-at-2021-p4g-seoul-summit/p4g_seoul_summit_1.jpg",
    localImage: "images/projects/2021-p4g-opening-ceremony.jpg",
  },

  {
    company: "NBNDR", year: 2020,
    title: "6·25전쟁 제70주년 기념식 〈영웅에게〉",
    client: "Ministry of National Defense · Ministry of Patriots and Veterans Affairs",
    category: "Official Ceremony",
    venueEn: "Seoul Air Base",
    locationEn: "Seongnam, Korea",
    desc: "전사자 147위의 귀환을 국가 의전과 추모의 메시지로 구성한 6·25전쟁 70주년 공식행사 및 유해송환식",
    descEn: "Official 70th Korean War anniversary ceremony honoring the return of 147 fallen soldiers.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Performance Content Planning & Production", ko: "공연 콘텐츠 기획 및 제작" },
      { en: "Media Façade Production & On-site Operations", ko: "미디어 파사드 제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://img.asiatoday.co.kr/file/2020y/06m/24d/2020062401002600900154831.jpg",
    localImage: "images/projects/2020-to-the-heroes.jpg",
  },

  {
    company: "NBNDR", year: 2019,
    title: "AKMU 신규 앨범 청음회 〈가을밤의 항해〉",
    client: "YG Entertainment",
    category: "Live Event",
    venueEn: "Floating Stage, Yeouido Hangang Park",
    locationEn: "Seoul, Korea",
    desc: "악뮤(AKMU) 세 번째 정규앨범 '항해' 발매를 기념한 야외 청음회",
    descEn: "An outdoor listening party for AKMU's third studio album 'SAILING'.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
    ],
    localImage: "images/projects/2019-akmu-v2.jpg",
    imagePosition: "left center", // 무대(왼쪽)가 보이도록 왼쪽 붙임
  },

  {
    company: "NBNDR", year: 2019,
    title: "대통령 노르웨이 순방 계기 K팝 콘서트 & 한국 음악 콘서트 〈VOYAGE TO K-POP〉",
    client: "Korean Cultural Center in Norway",
    category: "VIP Ceremony · Live Concert",
    venueEn: "Sentrum Scene, Oslo Opera House",
    locationEn: "Oslo, Norway",
    desc: "대통령 북유럽 순방 계기 문화 공연 프로그램",
    descEn: "Cultural concert program for the presidential state visit to Norway.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Local Partner Communications", ko: "출연진 섭외·계약 및 현지 협력사 커뮤니케이션" },
    ],
    image: "https://0.soompi.io/wp-content/uploads/2019/06/12202602/monsta-x-2.jpg",
    localImage: "images/projects/2019-voyage-to-kpop.jpg",
  },

  {
    company: "NBNDR", year: 2019,
    title: "2019 정동하 콘서트 〈동하 읽어주는 남자〉 Vol.1",
    client: "Oddeye Entertainment",
    category: "Live Concert",
    venueEn: "LG Arts Center",
    locationEn: "Seoul, Korea",
    desc: "정동하 단독 콘서트",
    descEn: "Jung Dong-ha's solo concert.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Partner & Talent Communications", ko: "협력사 및 출연진 커뮤니케이션" },
    ],
    localImage: "images/projects/2019-jung-dong-ha.jpg",
  },

  {
    company: "FIG", year: 2019,
    title: "2019년 한·아세안 특별정상회의 기념 콘서트 〈ASEAN Fantasia〉",
    client: "Ministry of Culture, Sports and Tourism · Korean Foundation for International Cultural Exchange",
    category: "Live Concert",
    venueEn: "Changwon Indoor Gymnasium",
    locationEn: "Changwon, Korea",
    desc: "한-아세안 특별정상회의의 문화적 결합을 K-팝 콘서트로 전하는 전야 콘서트",
    descEn: "A K-pop concert on the eve of the ASEAN-Korea Commemorative Summit.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://img5.yna.co.kr/etc/inner/EN/2019/11/14/AEN20191114004600315_01_i_P4.jpg",
  },

  {
    company: "FIG", year: 2019,
    title: "한-아세안 특별정상회의 환영만찬 문화공연",
    client: "Ministry of Foreign Affairs",
    category: "Official Ceremony",
    venueEn: "Ananti Hotel",
    locationEn: "Busan, Korea",
    desc: "한-아세안 특별정상회의 정산 만찬 기념 공연",
    descEn: "Cultural performance for the ASEAN-Korea Commemorative Summit welcome dinner.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    localImage: "images/projects/2019-korea-asean-gala.jpg",
  },

  {
    company: "FIG", year: 2019,
    title: "판문점선언 1주년 기념 평화 공연 〈먼, 길〉",
    client: "Ministry of Unification",
    category: "Live Concert",
    venueEn: "Panmunjom",
    locationEn: "Korea",
    desc: "판문점선언 1주년의 의미를 공연과 기념 프로그램으로 전달한 문화행사",
    descEn: "A peace concert marking the first anniversary of the Panmunjom Declaration.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://img.sbs.co.kr/newimg/news/20190427/201307653_1280.jpg",
    localImage: "images/projects/2019-long-road-v2.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "제70주년 국군의 날 국군 유해 봉환행사 <대한민국의 이름으로 당신을 기억하겠습니다>",
    client: "Ministry of National Defense",
    category: "Official Ceremony",
    venueEn: "Seoul Air Base / War Memorial of Korea",
    locationEn: "Seoul, Korea",
    desc: "한미 공동감식을 통해 국군 전사자로 판정된 64위의 유해를 모시는 행사",
    descEn: "Repatriation ceremony for 64 fallen Korean soldiers identified through joint Korea-US recovery.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.korean-culture.org/CONTENTS/editImage/20181002174241902_1.jpg",
    localImage: "images/projects/2018-repatriation-ceremony-v2.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "조코 위도도 인도네시아 대통령 국빈방한 - 국빈만찬",
    client: "Cheong Wa Dae",
    category: "Official Ceremony",
    venueEn: "Cheongwadae (the Blue House)",
    locationEn: "Seoul, Korea",
    desc: "인도네시아 대통령 국빈방한을 위한 공식 환영·만찬 프로그램",
    descEn: "Official welcome and state dinner program for the Indonesian President's state visit.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://setkab.go.id/wp-content/uploads/2018/09/konpres-1.jpg",
    localImage: "images/projects/2018-joko-widodo-state-visit.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "DMZ PEACE TRAIN MUSIC FESTIVAL 2018",
    client: "Cheorwon County",
    category: "Festival",
    venueEn: "DMZ / Cheorwon",
    locationEn: "Gangwon, Korea",
    desc: "DMZ 철원에서 펼쳐지는 글로벌 뮤직 페스티벌",
    descEn: "A global music festival held at the DMZ in Cheorwon.",
    role: [
      { en: "Operations", ko: "운영" },
    ],
    tasks: [
      { en: "On-site Operations Management", ko: "제작 및 현장 운영" },
    ],
    image: "https://img.koreatimes.co.kr/upload/newsV2/images/201806/3520dac082db42eb955ff22080657b38.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "에르도안 터키 대통령 국빈방문 - 국빈만찬",
    client: "Cheong Wa Dae",
    category: "Official Ceremony",
    venueEn: "Cheongwadae (the Blue House)",
    locationEn: "Seoul, Korea",
    desc: "터키 대통령 국빈방문을 위한 공식 환영·만찬 프로그램",
    descEn: "Official welcome and state dinner program for the Turkish President's state visit.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://img.khan.co.kr/news/2018/05/02/l_2018050201000258800017491.jpg",
    localImage: "images/projects/2018-erdogan-state-dinner.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "남북평화 협력기원 남측예술단 평양공연 〈봄이 온다〉",
    client: "Cheong Wa Dae · Ministry of Unification",
    category: "Live Concert",
    venueEn: "East Pyongyang Grand Theatre · Ryugyong Chung Ju-yung Gymnasium",
    locationEn: "Pyongyang, North Korea",
    desc: "남북정상회담의 문화적 교류를 상징한 남측예술단 평양 공연",
    descEn: "Performance by the South Korean art troupe in Pyongyang, marking inter-Korean cultural exchange.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://www.korean-culture.org/CONTENTS/editImage/20180402173214530_1.jpg",
    localImage: "images/projects/2018-spring-is-coming.jpg",
  },

  {
    company: "NBNDR", year: 2018,
    title: "'사랑을 했다' 여름 피크닉 〈PiKONICDAY〉",
    client: "YG ENTERTAINMENT",
    category: "Live Event",
    venueEn: "반포 한강공원 예빛섬",
    locationEn: "Seoul, Korea",
    desc: "iKON 퍼블릭 팬 이벤트(체험, 전시, 퍼포먼스 진행)",
    descEn: "A public fan event for iKON with experiences, exhibitions and performances.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
    ],
    image: "https://yg-life.com/wp-content/uploads/2018/07/91a66859b84bd72d23d66fe5a4fa0c8f-e1532510188328.jpg",
    localImage: "images/projects/2018-pikonicday.jpg",
  },

  {
    company: "NBNDR", year: 2018, displayYear: "2015-2018",
    title: "MAMF 2015~2018",
    client: "Gyeongnam Migrant Workers Center",
    category: "Festival",
    venueEn: "Yongji Cultural Park, Seongsan Art Hall",
    locationEn: "Changwon, Korea",
    desc: "창원에서 열리는 대한민국 대표 문화다양성 축제",
    descEn: "Korea's leading cultural diversity festival, held in Changwon.",
    role: [
      { en: "Creative Direction & Production", ko: "크리에이티브 디렉션 및 제작" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Spatial Design Direction, Production & Operations", ko: "공간 디자인 디렉션 및 제작·운영 총괄" },
      { en: "Talent & Partner Communications", ko: "출연진 및 협력사 커뮤니케이션" },
    ],
    image: "https://philembassy-seoul.com/storage/articles/announcement/2018917_MAMF.jpg",
  },

  {
    company: "NBNDR", year: 2017,
    title: "트럼프 미국 대통령 초청 국빈만찬",
    client: "Cheong Wa Dae",
    category: "Official Ceremony",
    venueEn: "Yeongbingwan State Guest House, Cheongwadae",
    locationEn: "Seoul, Korea",
    desc: "미국 대통령 국빈방문을 위한 공식 환영·만찬 프로그램",
    descEn: "Official welcome and state dinner program for the US President's state visit.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
      { en: "Talent Booking, Contracts & Partner Communications", ko: "출연진 섭외·계약 및 협력사 커뮤니케이션" },
    ],
    image: "https://img1.newsis.com/2017/11/07/NISI20171107_0013541936_web.jpg",
    localImage: "images/projects/2017-trump-state-dinner-v2.jpg",
  },

  {
    company: "NBNDR", year: 2017,
    title: "올댓뮤직X인디스땅스2017",
    client: "Gyeonggi Content Agency",
    category: "Indie Music Competition & Showcase",
    venueEn: "Undisclosed",
    locationEn: "Korea",
    desc: "인디 뮤지션 발굴을 위한 오디션 프로그램 운영 및 라이브 이벤트 진행",
    descEn: "An audition program and live events discovering new indie musicians.",
    role: [
      { en: "Show Direction & Production", ko: "공연 연출 및 제작" },
      { en: "Project Management", ko: "프로젝트 관리" },
    ],
    tasks: [
      { en: "Program Planning & Show Direction", ko: "프로그램 기획 및 공연 연출" },
      { en: "Production Management & On-site Operations", ko: "제작 및 현장 운영 총괄" },
    ],
    localImage: "images/projects/2017-indistance.jpg",
  },

];

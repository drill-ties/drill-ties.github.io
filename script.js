/* ============================================================
   사이트 동작 로직
   ------------------------------------------------------------
   이 파일은 "기능"만 담당합니다. 프로젝트 내용을 바꾸고 싶으면
   이 파일이 아니라 data.js를 수정하세요.
   레이아웃/색상/여백을 바꾸고 싶으면 style.css를 수정하세요.
============================================================ */

/* ------------------------------------------------------------
   아카이브 카드 렌더링 & 필터
   (PROJECTS 배열은 data.js에서 정의됨 — 이 파일보다 먼저 로드되어야 함)
------------------------------------------------------------ */
function yearBucket(year) {
  if (year >= 2023) return String(year);
  return 'past';
}

function createArchiveCard(project) {
  const card = document.createElement('article');
  card.className = 'archive-card reveal';
  card.dataset.company = project.company;
  card.dataset.yearBucket = yearBucket(project.year);

  const tasksHtml = project.tasks && project.tasks.length
    ? `<div class="archive-card-contrib">
        <p class="archive-card-contrib-label">Key Contributions</p>
        <ul class="archive-card-tasks">${project.tasks.map((t) => `<li>${t}</li>`).join('')}</ul>
      </div>`
    : '';

  card.innerHTML = `
    <span class="archive-card-category">${project.category}</span>
    <div class="archive-card-image" data-img-slot></div>
    <p class="archive-card-yearclient">${project.year} | ${project.client}</p>
    <h3 class="archive-card-title">${project.title}</h3>
    <p class="archive-card-venue">${project.venueEn}</p>
    <p class="archive-card-location">${project.locationEn}</p>
    <p class="archive-card-desc">${project.desc}</p>
    <div class="archive-card-role-block">
      <p class="archive-card-role-label">Role</p>
      <p class="archive-card-role-value">${project.role}</p>
    </div>
    ${tasksHtml}
  `;

  // 이미지 슬롯 채우기: project.image가 있으면 실제 이미지, 없으면(또는 로드 실패 시) 빈 회색 박스
  // (회사명 라벨 텍스트는 더 이상 표시하지 않음 — 2026.08.25 요청으로 제거)
  const imgSlot = card.querySelector('[data-img-slot]');
  if (project.image) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      imgSlot.classList.remove('has-image');
      imgSlot.innerHTML = '';
    });
    imgSlot.classList.add('has-image');
    imgSlot.appendChild(img);
  } else {
    imgSlot.innerHTML = '';
  }

  return card;
}

/* 연도 그룹 표시 순서 & 라벨 (최신 → 과거) */
const YEAR_GROUPS = [
  { key: '2026', label: '2026' },
  { key: '2025', label: '2025' },
  { key: '2024', label: '2024' },
  { key: '2023', label: '2023' },
  { key: 'past', label: 'Past' },
];

function renderArchive() {
  const grid = document.getElementById('archiveGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
  const fragment = document.createDocumentFragment();

  YEAR_GROUPS.forEach((group) => {
    const projectsInGroup = sorted.filter((p) => yearBucket(p.year) === group.key);
    if (!projectsInGroup.length) return;

    const heading = document.createElement('h3');
    heading.className = 'archive-year-heading';
    heading.dataset.yearGroup = group.key;
    heading.textContent = group.label;
    fragment.appendChild(heading);

    projectsInGroup.forEach((project) => {
      fragment.appendChild(createArchiveCard(project));
    });
  });

  grid.innerHTML = '';
  grid.appendChild(fragment);
}

function setupArchiveFilters() {
  const filterBar = document.getElementById('archiveFilters');
  const grid = document.getElementById('archiveGrid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    grid.querySelectorAll('.archive-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.yearBucket === filter;
      card.classList.toggle('is-hidden', !show);
    });

    grid.querySelectorAll('.archive-year-heading').forEach((heading) => {
      const show = filter === 'all' || heading.dataset.yearGroup === filter;
      heading.classList.toggle('is-hidden', !show);
    });
  });
}

/* ============================================================
   초기화
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     푸터 연도 자동 표시
  ----------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------
     모바일 메뉴 토글
  ----------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // 메뉴 항목 클릭 시 자동으로 닫기 (모바일)
    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------------------
     아카이브 렌더링 + 필터
  ----------------------------------------------------------- */
  renderArchive();
  setupArchiveFilters();

  /* -----------------------------------------------------------
     스크롤 등장 효과 (최소한의, 과도하지 않은 연출)
  ----------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.about-lead, .about-body, .about-facts, .archive-card, .contact-info'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // IntersectionObserver 미지원 브라우저 대응
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

});

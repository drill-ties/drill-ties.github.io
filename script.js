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

/* 카테고리는 data.js에 적힌 그대로 표시 (공백만 정리, 대문자는 CSS가 처리) */
function getDisplayCategory(project) {
  return String(project.category || '').replace(/\s+/g, ' ').trim();
}

/* role/tasks: { en, ko } 짝 배열. 예전 형식(문자열)이 섞여 있어도 깨지지 않게 처리 */
function toPairs(value) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : [value];
  return list
    .map((item) => (typeof item === 'string' ? { en: item, ko: '' } : item))
    .filter((item) => item && (item.en || item.ko));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* 역할 → 태그. "Show Direction & Production" → [Show Direction] [Production] */
const ROLE_TAG_KO = {
  'Show Direction': '공연 연출',
  'Production': '제작',
  'Production Support': '제작 지원',
  'Creative Direction': '크리에이티브 디렉션',
  'Project Management': '프로젝트 관리',
  'Event Management': '행사 운영',
  'On-site Operations': '현장 운영',
  'Operations': '운영',
};

function getRoleTags(project) {
  const seen = new Set();
  const tags = [];
  toPairs(project.role).forEach((r) => {
    String(r.en || '').split(/\s*&\s*/).forEach((part) => {
      const en = part.trim();
      if (!en || seen.has(en)) return;
      seen.add(en);
      tags.push({ en, ko: ROLE_TAG_KO[en] || en });
    });
  });
  return tags;
}

/* 국·영 텍스트 쌍 → 언어별 span (CSS가 현재 언어만 보여줌) */
function bi(en, ko) {
  const e = en || ko || '';
  const k = ko || en || '';
  return `<span class="t-en">${escapeHtml(e)}</span><span class="t-ko">${escapeHtml(k)}</span>`;
}

/* 제목 표시: 〈 〉, < > 를 폭이 좁은 ‹ › 로 바꿔 영문 사이에서도 덜 벌어지게 (data.js 원문은 그대로) */
function formatTitle(title) {
  return escapeHtml(title)
    .replace(/\s*(〈|&lt;)\s*/g, ' <span class="t-mark">‹</span>')
    .replace(/\s*(〉|&gt;)\s*/g, '<span class="t-mark">›</span> ')
    .replace(/^\s+|\s+$/g, '')
    .replace(/\s{2,}/g, ' ');
}

function createArchiveCard(project) {
  const card = document.createElement('article');
  card.className = 'archive-card reveal';
  card.dataset.company = project.company;
  card.dataset.yearBucket = yearBucket(project.year);

  const tasks = toPairs(project.tasks);
  const tags = getRoleTags(project);

  const overlayHtml = tasks.length
    ? `<div class="archive-card-overlay" aria-hidden="true">
        <p class="overlay-label">Key Contributions</p>
        <ul class="overlay-tasks">${tasks.map((t) => `<li>${bi(t.en, t.ko)}</li>`).join('')}</ul>
      </div>
      <button type="button" class="archive-card-more" aria-expanded="false" aria-label="Key contributions"><span aria-hidden="true">+</span></button>`
    : '';

  const place = [project.venueEn, project.locationEn].filter(Boolean)
    .map((t, i) => `<span class="${i === 0 && project.venueEn ? 'place-venue' : 'place-location'}">${escapeHtml(t)}</span>`).join('');

  card.innerHTML = `
    <div class="archive-card-media">
      <div class="archive-card-image" data-img-slot></div>
      <span class="archive-card-category">${escapeHtml(getDisplayCategory(project))}</span>
      ${overlayHtml}
    </div>
    <p class="archive-card-yearclient">${escapeHtml(project.displayYear || project.year)} | ${escapeHtml(project.client)}</p>
    <h3 class="archive-card-title">${formatTitle(project.title)}</h3>
    <p class="archive-card-place">${place}</p>
    <p class="archive-card-desc">${bi(project.descEn, project.desc)}</p>
    <ul class="archive-card-tags">${tags.map((t) => `<li>${bi(t.en, t.ko)}</li>`).join('')}</ul>
  `;

  // Key Contributions: 마우스 호버(데스크톱) 또는 + 버튼/이미지 탭(모바일)으로 열고 닫기
  const media = card.querySelector('.archive-card-media');
  const moreBtn = card.querySelector('.archive-card-more');
  if (moreBtn) {
    const overlay = card.querySelector('.archive-card-overlay');
    const setOpen = (open) => {
      media.classList.toggle('is-open', open);
      moreBtn.setAttribute('aria-expanded', String(open));
      overlay.setAttribute('aria-hidden', String(!open));
    };
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!media.classList.contains('is-open'));
    });
    media.addEventListener('click', () => {
      if (window.matchMedia('(hover: none)').matches) setOpen(!media.classList.contains('is-open'));
    });
  }

  // 이미지 슬롯 채우기: project.image가 있으면 실제 이미지, 없으면(또는 로드 실패 시) 빈 회색 박스
  const imgSlot = card.querySelector('[data-img-slot]');
  const imageSrc = project.localImage || project.image;
  if (imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = project.title;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      imgSlot.classList.remove('has-image');
      imgSlot.innerHTML = '';
    });
    imgSlot.classList.add('has-image');
    if (project.imageFit === 'contain') imgSlot.classList.add('is-contain');
    if (project.imagePosition) img.style.objectPosition = project.imagePosition;
    imgSlot.appendChild(img);
  } else {
    imgSlot.innerHTML = '';
  }

  return card;
}

/* ------------------------------------------------------------
   한 줄 요약: 2줄을 넘어 잘린 카드만 눌러서 펼치기/접기
------------------------------------------------------------ */
function markTruncatedDescs() {
  document.querySelectorAll('.archive-card-desc').forEach((el) => {
    if (el.classList.contains('is-expanded')) return;
    const cut = el.scrollHeight > el.clientHeight + 1;
    el.classList.toggle('is-truncated', cut);
    if (cut) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-expanded', 'false');
    } else {
      el.removeAttribute('role');
      el.removeAttribute('tabindex');
      el.removeAttribute('aria-expanded');
    }
  });
}

function setupDescExpand() {
  const grid = document.getElementById('archiveGrid');
  if (!grid) return;
  const toggle = (el) => {
    if (!el.classList.contains('is-truncated') && !el.classList.contains('is-expanded')) return;
    const open = !el.classList.contains('is-expanded');
    el.classList.toggle('is-expanded', open);
    el.classList.toggle('is-truncated', !open);
    el.setAttribute('aria-expanded', String(open));
    if (!open) markTruncatedDescs();
  };
  grid.addEventListener('click', (e) => {
    const el = e.target.closest('.archive-card-desc');
    if (el) toggle(el);
  });
  grid.addEventListener('keydown', (e) => {
    const el = e.target.closest('.archive-card-desc');
    if (el && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(el); }
  });
  let t;
  window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(markTruncatedDescs, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(markTruncatedDescs);
  markTruncatedDescs();
}

/* ------------------------------------------------------------
   EN / KR 토글 — 프로젝트 카드 텍스트만 전환 (About·Contact는 영문 고정, 디폴트 EN)
------------------------------------------------------------ */
function setupLangToggle() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.lang-toggle button');
  const apply = (lang) => {
    const kr = lang === 'kr';
    root.classList.toggle('lang-kr', kr);
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('dt-lang', lang); } catch (e) {}
    if (typeof markTruncatedDescs === 'function') markTruncatedDescs();
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.lang)));
  apply(root.classList.contains('lang-kr') ? 'kr' : 'en');
}

/* ------------------------------------------------------------
   이메일 원클릭 복사 + 토스트 (주소는 스팸 방지로 JS에서 조합)
------------------------------------------------------------ */
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy') ? resolve() : reject(new Error('copy failed')); }
    catch (err) { reject(err); }
    finally { ta.remove(); }
  });
}

function showToast(html) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = html;
  toast.classList.add('is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function setupEmailCopy() {
  const btn = document.querySelector('.contact-copy');
  if (!btn) return;
  const address = `${btn.dataset.user}@${btn.dataset.domain}`;
  const label = btn.querySelector('.contact-copy-address');
  if (label) label.textContent = address;   // 화면에는 실제 주소(@)로 표시
  const hint = document.querySelector('.contact-copy-hint');
  const hintDefault = hint ? hint.innerHTML : '';

  const doCopy = () => {
    copyText(address)
      .then(() => {
        btn.classList.add('is-copied');
        if (hint) hint.textContent = 'Copied!';
        showToast('Copied! — ' + address);
        clearTimeout(setupEmailCopy.timer);
        setupEmailCopy.timer = setTimeout(() => {
          btn.classList.remove('is-copied');
          if (hint) hint.innerHTML = hintDefault;
        }, 2200);
      })
      .catch(() => { window.location.href = 'mailto:' + address; });
  };

  btn.addEventListener('click', () => {
    // 사용자가 드래그로 일부를 선택한 경우엔 클릭 복사를 건너뛰고 선택을 존중
    const sel = window.getSelection && window.getSelection();
    if (sel && !sel.isCollapsed && btn.contains(sel.anchorNode)) return;
    doCopy();
  });
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doCopy(); }
  });

  // 안전장치: 페이지 어디서든 복사되는 텍스트에 "[at]"/"(at)"이 있으면 "@"로 바꿔 클립보드에 넣음
  document.addEventListener('copy', (e) => {
    const sel = window.getSelection ? String(window.getSelection()) : '';
    if (!/\s*[\[\(]\s*at\s*[\]\)]\s*/i.test(sel) || !e.clipboardData) return;
    e.clipboardData.setData('text/plain', sel.replace(/\s*[\[\(]\s*at\s*[\]\)]\s*/gi, '@'));
    e.preventDefault();
  });
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
  setupLangToggle();
  setupDescExpand();
  setupEmailCopy();

  /* -----------------------------------------------------------
     긴 페이지 탐색 보조: 맨 위로 이동 버튼
  ----------------------------------------------------------- */
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 800);
    };

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
  }

  /* -----------------------------------------------------------
     스크롤 등장 효과 (최소한의, 과도하지 않은 연출)
  ----------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.about-lead, .about-metrics, .about-facts, .archive-card, .contact-mail'
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

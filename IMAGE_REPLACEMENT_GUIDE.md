# Portfolio Image Replacement Guide

이 홈페이지의 프로젝트 이미지는 `data.js`에서 교체합니다.

## 1. 가장 추천하는 방식

공식 포스터나 키비주얼 이미지를 다운로드해서 아래 폴더에 넣습니다.

```text
images/projects/
```

예시:

```text
images/projects/2026-le-sserafim-pure-flowers-live.jpg
images/projects/2024-baekho-baekhoney-day.jpg
images/projects/2018-mamf.jpg
```

그다음 `data.js`에서 해당 프로젝트에 아래처럼 `localImage`를 추가합니다.

```js
localImage: 'images/projects/2024-baekho-baekhoney-day.jpg',
```

기존 `image`가 있어도 `localImage`가 우선 적용됩니다.

## 2. 임시로 외부 링크를 쓰는 방식

공식 사이트, 예매처, 소속사, 주최사에서 제공하는 이미지 URL을 찾은 뒤 `image` 값을 바꿉니다.

```js
image: 'https://example.com/official-key-visual.jpg',
```

단, 외부 링크는 원본 사이트가 이미지를 내리거나 주소를 바꾸면 깨질 수 있습니다.
장기적으로는 이미지를 직접 저장해서 `localImage`로 연결하는 방식을 추천합니다.

## 3. 이미지 검색 기준

검색할 때는 프로젝트 공식명 + poster / key visual / official / 공연명 조합이 좋습니다.

예시:

```text
LE SSERAFIM PURE FLOWERS LIVE Presented by Spotify key visual
2023 BAEKHO MINI CONCERT BAEKHoney DAY poster
MAMF 2018 poster
YouTube FanFest Korea 2025 poster
```

## 4. 현재 레이아웃 기준

카드 이미지는 세로형 포스터에 맞춰 `3:4` 비율로 정리되어 있습니다.

- 포스터 전체가 보이도록 `object-fit: contain` 적용
- 가로 사진도 들어갈 수 있지만 위아래 여백이 생길 수 있음
- 키비주얼/포스터를 우선 사용하는 것이 가장 안정적인 인상

## 5. 추천 파일명 규칙

파일명은 영문 소문자와 숫자, 하이픈만 쓰는 것을 추천합니다.

좋은 예:

```text
2024-baekho-baekhoney-day.jpg
2025-bts-festa.jpg
2018-dmz-peace-train.jpg
```

피하는 예:

```text
백호 포스터 최종.jpg
IMG_1234.JPG
poster final final.png
```


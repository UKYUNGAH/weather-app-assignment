# 날씨 앱
- OpenWeatherMap API를 사용한 날씨 정보 애플리케이션

## 실행 방법

\`\`\`bash
npm install

# .env 파일 생성
# VITE_WEATHER_API_KEY=여기에_API_키_입력

npm run dev
\`\`\`

## 구현 기능

- 현재 위치 자동 감지
- 현재/최고/최저 온도
- 시간별 날씨 예보 (12시간)
- 장소 검색 (시/군/구/동)
- 즐겨찾기 추가/삭제/수정
- 별칭 설정 모달
- 상세 페이지
- localStorage 영구 저장

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Tanstack Query (서버 상태 관리)
- React Router
- @heroicons/react
- OpenWeatherMap API

## 폴더 구조 (FSD)

\`\`\`
src/
├── shared/           # 공통
│   ├── types/       # TypeScript 타입
│   ├── api/         # API 함수
│   ├── hooks/       # 커스텀 Hook
│   ├── data/        # 정적 데이터
│   └── utils/       # 유틸 함수
├── features/         # 기능별
│   ├── weather/     # 날씨
│   ├── search/      # 검색
│   └── favorites/   # 즐겨찾기
└── pages/            # 페이지
    ├── HomePage.tsx
    └── DetailPage.tsx
\`\`\`

## 기술적 의사결정

1. **FSD 아키텍처**: 기능별 모듈화로 유지보수성 향상
2. **Tanstack Query**: 자동 캐싱(5분), 로딩/에러 관리
3. **좌표 하드코딩**: Geocoding API 비용 절감, 10개
4. **localStorage**: 간단한 영구 저장, 백엔드 불필요
5. **Tailwind CSS**: 빠른 개발, 일관된 디자인

## 디자인 특징

- 기업의 로고색상과 일관성있게 그라데이션 배경 적용
- 글래스모피즘 (반투명 + 블러)
- 반응형 (모바일/태블릿/데스크탑)
- heroicons (outline 스타일)

## 배포

Vercel: [(https://weather-app-assignment-rho.vercel.app/)]
GitHub: [(https://github.com/UKYUNGAH/weather-app-assignment/)]
\`\`\`


배포 url 접속 시 위치 권한 허용 필요합니다.

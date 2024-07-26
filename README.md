## TBAG

<img width="1039" alt="image" src="https://github.com/yanolja-travel-tbag/tbag-server/assets/74501631/8a8fb197-b981-4c3d-8372-53d9050624a5">

### 2024 트래블 이노베이션 아이디어 공모전 대상 수상작

### Overview
TBAG은 한국의 영화, 드라마, 아이돌 등 K-콘텐츠로 불리는 한국의 문화 콘텐츠를 소개하고, 관련된 장소들을 지도에서 한눈에 확인할 수 있으며, 

해당 장소들을 여행 일정에 등록해 여행 일정을 관리할 수 있는 서비스입니다.

### Features
- 구글, 카카오 소셜 로그인을 통한 회원가입 및 로그인
- K-콘텐츠 소개 페이지 및 필터별 조회
- 장소, 작품, 연예인 별 관련 장소 검색
- 장소 상세 정보(주소, 웹사이트, 연락처, 운영 일정 등) 및 추천 장소 목록 확인
- 여행 일정 생성 및 장소 등록
- 여행 경로 최적화
- 히스토리 조회
- 프로필 페이지
- 언어 선택 (한국어, 영어)

### Tech Stack
- Frontend
  - SPA 개발: React 18 
  - 라우팅: react-router-dom 6
  - 스타일링: TailwindCSS
  - 정적 타입 관리: TypeScript
  - 빌드: Vite
  - UI: shadcn/ui (with @radix-ui)
  - API 요청: Axios
  - 전역 상태 관리: Zustand
  - 서버 상태 관리: React Query v5
  - 폼 상태 관리 + 유효성 검증: React Hook Form + zod
  - 지도: Naver Maps API
  - UI 테스트: Storybook 8
  - 배포: vercel-cli
- Backend
    - 서버 프레임워크: Spring Boot 2.7.10, Spring Data JPA
    - 데이터베이스: MySQL
    - 언어: Java 11
    - ETC: AWS, Redis, Kakao/Google OAuth
    - API: Google Places API, Google Map Distance Matrix API, TMDB API, Spotify API, DeepL Translation API

### Period & Role
2024.05.01 - 2024.07.08
- 05.01-06.03 기획 및 디자인 (이주원(기획 및 디자인), 최선우(기획 및 디자인))
- 06.04-07.08 개발 (김가경(BE), 홍창기(FE))

### Preview
| 소셜 로그인 및 회원가입 |                                                   메인 바텀시트                                                   | 장소 상세 바텀시트 |
|:---:|:-----------------------------------------------------------------------------------------------------------:|:---:|
| ![google-social-login](https://github.com/user-attachments/assets/768eaf66-f29a-4a2d-b28d-296a74734ffb) | ![main-bottomsheet-filter](https://github.com/user-attachments/assets/4adfc6a2-69d3-4868-8be7-8de442e6299f) | ![place-detail-bottomsheet](https://github.com/user-attachments/assets/5a709ea5-0ddc-4291-9167-aab60a6e9911) |
| 지도 및 마커 필터 |                                                   연예인 검색                                                    | 장소 검색 |
| ![map-marker-filter](https://github.com/user-attachments/assets/2f101e8d-2dee-4e6f-a70a-de2116ecc14b) |      ![search-artist](https://github.com/user-attachments/assets/a085c01f-e18a-456a-ab3b-2d3f0ea526bb)      | ![search-place](https://github.com/user-attachments/assets/ac4f4649-e5c8-40a8-ba82-3688c4d1284f) |
| 콘텐츠 및 상세 정보 |                                                    히스토리                                                     | 여행 일정 |
| ![content-contentdetail](https://github.com/user-attachments/assets/b18fef1d-7be8-4681-ae43-aa1aeec7360a) |         ![history](https://github.com/user-attachments/assets/15691115-8296-44a1-ae55-f76ba760e193)         | ![add-schedule](https://github.com/user-attachments/assets/2f3be3f1-7c07-4050-9a60-b37ba3c6e89d) |
| 여행 경로 최적화 |                                                   콘텐츠 필터                                                    |
| ![optimize-path](https://github.com/user-attachments/assets/114df763-f191-4143-87f2-4a829ef143b2) |     ![content-filter](https://github.com/user-attachments/assets/ebfd9810-de4e-432b-84c7-3d1271074279)      |
| 언어 선택 및 국제화 |                                               다른 국제화 적용 모습                                                  |
| ![language-i18n](https://github.com/user-attachments/assets/70662141-1650-4a71-a019-9f6708749f20) | ![language-i18n2](https://github.com/user-attachments/assets/256d4fdb-e2bf-4559-a496-c2b10cc561f3) |

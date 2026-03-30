# React + Vite

React와 Vite 기반으로 구축한 E-book 서비스형 프론트엔드 프로젝트입니다.
인증 흐름은 Context API와 Reducer를 활용해 전역 관리했으며, 
React Router 라우팅 구조를 적용했습니다.
공통 UI 컴포넌트 분리, API 모듈화, 레이아웃 구조화, 
상태 초기화 흐름을 고려하여 유지보수 가능한 구조로 설계했습니다.

확인 : index.html 파일 / 서버구동

**진행부분**
- react + vite + RestApi
- 모바일, 태블릿, PC 적응형(반응형) style
- 로그인 : 정상로그인, 로그인 전역관리, 에러 
- 메인페이지, UI 컴포넌트 구조
- Gnb 메뉴, 링크 컴포넌트, footer 컴포넌트
- 카드타입1 - 검색 ui , 베스트도서 , 대여목록 대시보드 - 컬럼 클릭시 sort : Asc, Desc,
- 메뉴 스크롤 Section 활성화, 클릭시 이동 인터랙션 UI/UX
- module-css , styled-components, assets(image, js, css) 구조
- axios, swiper 라이브러리

**진행예정**
- 회원가입 : 폼 컴포넌트, 가입
- 도서 목록 - 상세페이지
- 장바구니
- 로딩

**이슈**
새로고침 시 인증 상태 처리
vite build 후 Rout 라우트 이슈
이미지 모듈 관리

# Tech
React, Router, axios, RestAPI, style-components

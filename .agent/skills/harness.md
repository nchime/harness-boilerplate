# Harness Engineering Skills

이 문서는 Harness 플랫폼 및 파이프라인 환경에서 개발을 진행할 때 참고해야 할 기술적 지침(Skills)을 정의합니다.

## 1. 프론트엔드 및 웹 개발 (Next.js)
- 최신 Next.js (App Router 등) 아키텍처에 맞춘 개발 패턴 준수
- 컴포넌트 모듈화 및 재사용 가능한 UI 설계
- Vanilla CSS를 활용한 유연하고 미려한 디자인(Rich Aesthetics) 시스템 구축

## 2. Harness CI/CD 연동
- 파이프라인 빌드 스크립트(`harness.yml` 등) 작성 및 수정
- 도커(Docker) 컨테이너화 및 이미지 최적화
- 배포 스크립트 작성 및 릴리스 자동화 지원

## 3. Feature Flags 및 변수 관리
- Harness Feature Flags를 코드 내에 통합하여 점진적 배포(Canary/Blue-Green) 지원
- Harness Secret Manager와 연동하여 환경 변수 및 시크릿 데이터를 안전하게 관리하는 패턴 사용

## 4. 코드 품질 보장
- 단위 테스트(Unit Testing) 및 E2E 테스트 코드 작성
- 정적 코드 분석 및 린팅(Linting) 도구를 준수하여 파이프라인 실패 최소화

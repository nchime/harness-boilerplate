# Harness Engineering Workflow

이 문서는 Harness 엔지니어링 환경에서의 체계적인 개발부터 배포까지의 워크플로우를 정의합니다.

## 1. 계획 및 개발 (Plan & Develop)
- **요구사항 분석**: 구현할 기능 및 필요한 Harness 기능(CI/CD, Feature Flags 등) 확인
- **로컬 개발**: `npm run dev` 등을 통해 로컬에서 기능 구현 및 디자인 시스템 적용
- **브랜치 전략**: 독립적인 Feature 브랜치를 생성하여 작업 진행

## 2. 지속적 통합 (Continuous Integration - Harness CI)
- **PR 생성**: 코드 작성 후 원격 저장소에 Push하고 Pull Request 생성
- **자동화된 테스트**: Harness CI 파이프라인이 트리거되어 린팅(Linting), 테스트, 빌드를 자동 수행
- **결과물 생성**: 성공적으로 빌드된 아티팩트(Artifact)를 레지스트리에 푸시

## 3. 지속적 배포 (Continuous Deployment - Harness CD)
- **스테이징 배포**: 메인 브랜치에 병합(Merge)되면 Staging 또는 QA 환경으로 자동 배포
- **승인 파이프라인**: 프로덕션(Production) 배포 전 매뉴얼/자동 승인 단계(Approval Step) 진행
- **안전한 릴리스**: Canary 또는 Blue-Green 배포 전략을 통해 운영 환경에 안전하게 배포

## 4. 운영 및 모니터링 (Operate & Monitor)
- **Feature Flag 토글**: 새 기능의 안정성을 확인하며 특정 사용자 그룹에 먼저 오픈하거나 점진적으로 롤아웃
- **롤백(Rollback)**: 배포 후 치명적인 오류 발생 시 Harness의 자동/수동 롤백 기능을 통해 즉각적인 복구

# Superpowers: Agentic Skills Framework

이 문서는 `obra/superpowers` 프레임워크를 이 프로젝트의 에이전틱 워크플로우에 통합한 지침입니다. 에이전트는 작업을 시작하기 전에 반드시 이 스킬을 호출하고 준수해야 합니다.

## 핵심 원칙 (Core Principles)
1. **의사결정 전 브레인스토밍 (Brainstorming First)**: 코드를 작성하기 전에 사용자의 의도를 명확히 하고 대안을 탐색합니다.
2. **상세 계획 수립 (Plan Mode)**: 모든 구현 작업은 파일 경로, 코드 변경 내역, 검증 단계가 포함된 실행 계획을 먼저 작성한 후 진행합니다.
3. **테스트 주도 개발 (TDD)**: RED-GREEN-REFACTOR 사이클을 엄격히 준수합니다. 테스트가 없는 코드는 완성된 것으로 간주하지 않습니다.
4. **증거 기반 성공 (Evidence over Claims)**: "수정했습니다"라는 말 대신 실제 테스트 결과와 빌드 성공 로그를 증거로 제시합니다.

## 사용 가능한 세부 스킬 (Available Sub-Skills)
에이전트는 상황에 따라 `.agent/skills/superpowers/` 디렉토리에 있는 다음 스킬들을 개별적으로 호출하여 사용합니다:
- `brainstorming.md`: 설계 및 아이디어 구체화 시 사용
- `writing-plans.md`: 작업 시작 전 실행 계획 작성 시 사용
- `executing-plans.md`: 계획된 작업을 순차적으로 실행 시 사용
- `test-driven-development.md`: 코드 작성 시 TDD 원칙 적용

## 에이전트 행동 수칙 (The Rule)
- 모든 작업 시작 전, 관련 스킬이 있는지 1%라도 가능성이 있다면 즉시 해당 스킬을 로드하십시오.
- 스킬에 정의된 체크리스트를 Todo 리스트로 만들고 하나씩 완수하며 진행 상황을 보고하십시오.
- 사용자의 명시적인 지시(`AGENTS.md`, `prd.md` 등)는 스킬보다 우선순위가 높습니다.

---
*참조: https://github.com/obra/superpowers*

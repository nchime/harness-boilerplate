# Harness Engineering Boilerplate

고성능 AI 에이전트와 함께 웹사이트를 구축하기 위한 궁극의 프레임워크이자 보일러플레이트입니다. 이 프로젝트는 **Harness Platform**의 강력한 CI/CD 엔지니어링 문화와 **Agentic Workflow**의 생산성을 결합합니다.

## 🚀 주요 특징

- **Next.js 15 Ready**: 최신 App Router 아키텍처와 최적화된 성능을 제공합니다.
- **Agentic Workspace**: `.agent/` 디렉토리를 통해 에이전트에게 명확한 **Skills**와 **Workflow**를 제공하여 자율적인 개발을 가능하게 합니다.
- **Superpowers Integration**: `obra/superpowers` 프레임워크를 탑재하여 설계(Brainstorming), 계획(Planning), 테스트(TDD) 기반의 개발을 지원합니다.
- **Ollama Minimalist Design**: "디자인의 부재가 디자인이다"라는 철학 아래 미니멀하고 프리미엄한 UI 시스템을 제공합니다.
- **Harness Ecosystem**: Feature Flags, Secret Management, CI/CD 파이프라인 연동이 기본적으로 고려되어 있습니다.

## 📁 프로젝트 구조

```text
.
├── .agent/               # AI 에이전트 전용 작업실
│   ├── prd.md            # 제품 요구사항 정의서 (기준점)
│   ├── skills/           # 에이전트가 학습하고 사용할 기술 (Harness, Superpowers 등)
│   └── workflow/         # 표준화된 작업 절차 (QA, 배포 등)
├── src/
│   └── app/              # Next.js 15 App Router 코드
└── DESIGN.md             # 프로젝트 디자인 시스템 가이드
```

## 🛠 시작하기

1. **저장소 복제 및 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **에이전트 활용**
   AI 에이전트에게 다음과 같이 지시하여 개발을 시작하십시오:
   > ".agent 폴더의 지침과 skills를 확인하고, prd.md에 정의된 새로운 기능을 추가해줘."

## 🧩 에이전트 스킬 (Skills)

본 보일러플레이트는 에이전트의 능력을 극대화하기 위해 다음 스킬들을 포함하고 있습니다:
- **Harness Engineering**: CI/CD 파이프라인 및 플랫폼 통합 지침
- **Superpowers**: TDD 및 계획 기반의 에이전틱 자동화 프레임워크
- **Karpathy Guidelines**: 고품질 코드 작성을 위한 엔지니어링 원칙
- **Coder/Reviewer Roles**: 역할 기반의 정교한 개발 및 검토 프로세스

## 💬 에이전트 명령어 가이드 (Prompting Guide)

하네스 엔지니어링의 정수를 활용하기 위해 에이전트에게 다음과 같이 지시해보세요.

### Case 1: 새로운 기능 설계 및 계획
> "`.agent/prd.md`에 정의된 '사용자 대시보드' 기능을 만들 거야. 코드를 짜기 전에 `superpowers`의 `brainstorming` 스킬을 사용해서 설계를 제안해주고, 승인되면 `writing-plans`로 실행 계획을 세워줘."

### Case 2: 기능 구현 (Coder 역할 강조)
> "`coder.md` 지침에 따라 위 계획을 실행해줘. 모든 컴포넌트는 `test-driven-development` 원칙에 따라 테스트를 먼저 작성하고, 디자인은 `DESIGN.md`를 준수해야 해. 중요한 UI 요소는 `FeatureFlagged` 컴포넌트로 감싸서 관리해줘."

### Case 3: 코드 검토 및 보안 점검 (Reviewer 역할 강조)
> "방금 구현한 코드에 대해 `reviewer.md` 관점에서 심층 리뷰를 진행해줘. 특히 하네스 보안 표준에 어긋나는 부분이 없는지, 성능 최적화(Next.js 15 패턴)가 잘 되었는지 확인하고 개선안을 제안해줘."

### Case 4: 종합 QA 수행
> "기능 구현이 완료되었으니 `.agent/workflow/qa.md` 워크플로우를 실행해줘. `npm run lint`와 `npm run build` 결과를 포함해서 PRD 요구사항을 모두 만족하는지 최종 리포트를 작성해줘."

### Case 5: 체계적인 버그 수정
> "현재 로그인이 안 되는 버그가 있어. `superpowers`의 `systematic-debugging` 스킬을 활성화해서 원인을 분석하고, 재현 테스트를 먼저 작성한 뒤에 수정을 진행해줘."


## 📄 라이선스

MIT License.

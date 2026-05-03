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

## 📄 라이선스

MIT License.

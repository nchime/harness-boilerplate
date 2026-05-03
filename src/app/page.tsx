export default function Home() {
  return (
    <div className="app-container">
      {/* Top Header */}
      <div className="app-footer" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--foreground)' }}>Harness Engineering Boilerplate</span>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="hero-badge" style={{ margin: 0, padding: '4px 12px', fontSize: '11px' }}>v1.0.0 Stable</span>
        </div>
      </div>

      {/* Main Dashboard */}
      <main className="dashboard-main">

        {/* Left Panel: Hero & Quick Start */}
        <div className="sidebar">
          <div className="hero-box">
            <h1>Agentic<br />Workspace</h1>
            <p>AI 에이전트와 함께 웹사이트를 구축하기 위한 궁극의 프레임워크입니다.</p>
          </div>

          <div className="panel" style={{ flex: 1 }}>
            <div className="panel-header">Quick Start</div>
            <div className="panel-content">
              <div className="code-window">
                <div className="code-header">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div style={{ marginBottom: '1rem' }}>$ npm install</div>
                <div style={{ marginBottom: '1rem' }}>$ npm run dev</div>
                <div style={{ color: 'var(--silver)', fontSize: '0.75rem' }}># 에이전트 지시 예시:</div>
                <div style={{ color: '#fff', borderLeft: '2px solid #555', paddingLeft: '8px', marginTop: '4px' }}>
                  &quot;.agent 폴더의 지침에 따라 새 기능을 추가해줘&quot;
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="https://github.com/nchime/harness-boilerplate" className="btn-pill" style={{ textAlign: 'center' }}>GitHub Repository</a>
                <a href="https://getdesign.md/ollama/design-md" className="btn-pill" style={{ textAlign: 'center' }}>Design System</a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Panel: Core Components */}
        <div className="panel">
          <div className="panel-header">Core Components</div>
          <div className="panel-content card-stack">
            <div className="mini-card">
              <h3>Skills</h3>
              <p>에이전트가 도구나 기술 스택을 다루는 지식 베이스 (Next.js, Harness, Superpowers)</p>
            </div>
            <div className="mini-card">
              <h3>Workflow</h3>
              <p>기능 정의부터 QA까지 표준화된 절차 정의 (Planning, TDD, QA Workflow)</p>
            </div>
            <div className="mini-card">
              <h3>Harness Integration</h3>
              <p>Feature Flags, CI/CD 파이프라인 연동 및 안전한 배포 환경 지원</p>
            </div>
            <div className="mini-card" style={{ background: 'var(--snow)', borderStyle: 'dashed' }}>
              <h3 style={{ fontSize: '0.9rem' }}>Superpowers v2</h3>
              <p>TDD 기반의 자가 진화형 에이전틱 자동화 프레임워크 탑재</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Prompting Guide */}
        <div className="panel">
          <div className="panel-header">Agent Command Guide</div>
          <div className="panel-content">
            <div className="guide-item">
              <span className="guide-tag">Case 1: 설계 및 계획</span>
              <div className="guide-text">
                &quot;prd.md를 분석해서 설계를 제안하고, 승인되면 writing-plans로 계획을 세워줘.&quot;
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-tag">Case 2: 구현 (Coder)</span>
              <div className="guide-text">
                &quot;coder.md 지침에 따라 TDD로 개발해줘. UI는 FeatureFlagged로 감싸줘.&quot;
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-tag">Case 3: 검토 (Reviewer)</span>
              <div className="guide-text">
                &quot;reviewer.md 관점에서 보안과 성능 최적화 여부를 심층 리뷰해줘.&quot;
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-tag">Case 4: 종합 QA</span>
              <div className="guide-text">
                &quot;qa.md 워크플로우를 실행하고 최종 결과 리포트를 작성해줘.&quot;
              </div>
            </div>
            <div className="guide-item">
              <span className="guide-tag">Case 5: 디버깅</span>
              <div className="guide-text">
                &quot;systematic-debugging을 활성화해서 원인을 분석하고 테스트를 작성해줘.&quot;
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Bottom Footer */}
      <footer className="app-footer">
        <p>© 2026 Harness Engineering. Designed for the Era of AI Agents.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span>Next.js 15</span>
          <span>Tailwind v4</span>
          <span>Harness Platform</span>
        </div>
      </footer>
    </div>
  );
}

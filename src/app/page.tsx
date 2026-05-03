export default function Home() {
  return (
    <div className="container">
      {/* Section 1: Hero */}
      <header className="section hero">
        <div className="hero-badge">Agentic Workspace v1.0</div>
        <h1 className="hero-title">Harness Engineering Boilerplate</h1>
        <p className="hero-description">
          고성능 AI 에이전트와 함께 웹사이트를 구축하기 위한 궁구의 프레임워크입니다.<br />
          지능적인 <strong>Skills</strong>, 정교한 <strong>Workflow</strong>, 그리고 <strong>Harness</strong> 플랫폼이 결합되었습니다.
        </p>
        <div className="btn-group">
          <a href="#features" className="btn btn-primary">시작하기</a>
          <a href="https://github.com/chime/harness-boilerplate" className="btn btn-secondary">GitHub 저장소</a>
        </div>
      </header>

      {/* Section 2: Core Methodology */}
      <section id="features" className="section" style={{ background: 'var(--snow)', borderTop: '1px solid var(--secondary)', borderBottom: '1px solid var(--secondary)' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Core Components</h2>
        <p style={{ marginBottom: '4rem', color: 'var(--stone)' }}>에이전트가 당신의 의도를 이해하고 자율적으로 코드를 작성할 수 있도록 설계되었습니다.</p>
        
        <div className="grid">
          <div className="card">
            <h3>Skills</h3>
            <p>에이전트가 특정 도구나 기술 스택을 완벽하게 다룰 수 있도록 정의된 지식 베이스입니다. (Next.js, Harness, Superpowers 등)</p>
          </div>
          <div className="card">
            <h3>Workflow</h3>
            <p>기능 정의부터 QA까지, 개발의 모든 단계를 표준화된 절차로 정의하여 에이전트의 일관된 작업 품질을 보장합니다.</p>
          </div>
          <div className="card">
            <h3>Agentic Logic</h3>
            <p>사용자의 요구사항을 분석하고, 스스로 설계(Brainstorming)하며, 검증(TDD)을 거쳐 프로덕션 레디 코드를 생산합니다.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Harness Integration */}
      <section className="section">
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Harness & Superpowers</h2>
          <div className="card" style={{ background: 'var(--background)', textAlign: 'left', marginTop: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>⚡️ Superpowers Integration</strong>: obra/superpowers 프레임워크를 탑재하여 설계부터 배포까지 TDD 기반의 에이전틱 자동화를 실현합니다.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>🚀 Harness CI/CD Pipeline</strong>: 코드가 작성되는 즉시 Harness 파이프라인을 통해 자동화된 빌드와 테스트, 안전한 배포가 진행됩니다.
              </li>
              <li>
                <strong>🚩 Feature Flags</strong>: 새로운 기능을 즉시 배포하고, Harness 제어판에서 실시간으로 활성화 여부를 관리할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Code Preview */}
      <section className="section" style={{ background: 'var(--snow)', borderTop: '1px solid var(--secondary)' }}>
        <h2>Quick Start</h2>
        <div className="code-window">
          <div className="code-header">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="code-content">
            <div className="code-line"><span className="code-prompt">$</span> git clone [repo-url]</div>
            <div className="code-line"><span className="code-prompt">$</span> npm install</div>
            <div className="code-line"><span className="code-prompt">$</span> # 에이전트에게 지시하세요:</div>
            <div className="code-line"><span className="code-prompt">&quot;</span>.agent 폴더의 지침에 따라 새 기능을 추가해줘<span className="code-prompt">&quot;</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Harness Engineering. Built for Agents and Humans.</p>
      </footer>
    </div>
  );
}

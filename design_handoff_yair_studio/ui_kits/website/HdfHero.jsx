/* global React */
function HdfHero() {
  return (
    <section className="hero" id="top">
      <div className="dot-grid hero-bg"></div>
      <div className="hero-inner">
        <div className="section-index">
          <span className="num">00</span><span>—</span><span>independent ai systems practice</span>
        </div>
        <div className="hero-mark">
          <span className="wordmark-group wordmark-stack hero-wordmark" aria-label="y[AI]r studio">
            <span className="wordmark">
              <span className="wordmark-y">y</span>
              <span className="wordmark-bracket">[</span>
              <span className="wordmark-ai">AI</span>
              <span className="wordmark-bracket">]</span>
              <span className="wordmark-r">r</span>
            </span>
            <span className="wordmark-studio">studio</span>
          </span>
        </div>
        <h1 className="hero-title">
          ai isn't coming.<br />
          it's <span className="hl">here</span>. ship<span className="cursor">_</span>
        </h1>
        <p className="hero-lead">
          I help engineering teams stop experimenting and start shipping. Agentic systems, spec-to-code pipelines, AI-first culture — built with verification gates, human-in-the-loop, and production-grade error handling.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">book a call</a>
          <a href="#approach" className="btn">read the approach</a>
        </div>
        <div className="hero-meta">
          <div><span className="k">based</span><span className="v">tel aviv · remote</span></div>
          <div><span className="k">stack</span><span className="v">claude code · antigravity · copilot</span></div>
          <div><span className="k">since</span><span className="v">2024</span></div>
        </div>
      </div>
    </section>
  );
}

window.HdfHero = HdfHero;

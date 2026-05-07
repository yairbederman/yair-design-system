/* global React */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="dot-grid hero-bg"></div>
      <div className="hero-inner">
        <div className="section-index">
          <span className="num">00</span><span>—</span><span>independent AI systems practice</span>
        </div>
        <div className="hero-mark">
          <img className="hero-logo" src="../../assets/wordmark.svg" alt="y[AI]r studio" />
        </div>
        <h1 className="hero-title">
          AI systems that survive<br />
          real <span className="hl">workflows</span>.<span className="cursor" aria-hidden="true">_</span>
        </h1>
        <p className="hero-lead">
          I help businesses turn messy processes, repetitive work, and content bottlenecks into AI-assisted systems that actually get used &mdash; past the demo, into Monday morning.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">map my first <span className="btn-cap">AI</span> system</a>
          <a href="#proof" className="btn">see proof</a>
        </div>
        <div className="hero-meta">
          <div><span className="k">based</span><span className="v">tel aviv · remote</span></div>
          <div><span className="k">focus</span><span className="v">workflows · agents · content ops</span></div>
          <div><span className="k">since</span><span className="v">2024</span></div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

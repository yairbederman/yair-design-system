/* global React */
function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="section-head">
        <div className="section-index"><span className="num">03</span><span>—</span><span>approach</span></div>
        <h2 className="section-title">no spec, no code.</h2>
        <p className="section-lead">Every engagement runs the same pipeline. Each arrow is a human gate.</p>
      </div>
      <pre className="ascii-diagram">{`┌─ intake ─────┐    ┌─ spec ───────┐    ┌─ tasks ──────┐    ┌─ build ──────┐    ┌─ qa ─────────┐
│ requirements │ ─▶ │ validated    │ ─▶ │ decomposed   │ ─▶ │ AI-assisted  │ ─▶ │ verification │
│ from biz     │    │ no spec→code │    │ jira / linear│    │ claude code  │    │ gates · ✓    │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
                          │                     │                   │
                          └─ human gate ────────┴─ human gate ──────┘`}</pre>
      <div className="approach-metrics">
        <div className="metric-cell"><div className="metric"><span className="delta">−80</span>%</div><div className="lab">spec rework</div><div className="ba">50% → 10%</div></div>
        <div className="metric-cell"><div className="metric"><span className="delta">+25</span>%</div><div className="lab">throughput</div><div className="ba">AI-assisted</div></div>
        <div className="metric-cell"><div className="metric"><span className="delta">−40</span>%</div><div className="lab">prod incidents</div><div className="ba">via ci/cd gates</div></div>
        <div className="metric-cell"><div className="metric"><span className="delta">+70</span>%</div><div className="lab">predictability</div><div className="ba">plan vs. actual</div></div>
      </div>
    </section>
  );
}

window.Approach = Approach;

/* global React */
const PROOF = [
  {
    n: '01',
    kind: 'B2B funnel · paid social',
    title: 'B2B legal funnel optimization',
    body: 'Analyzed Meta lead performance, identified wasteful placements, and proposed budget reallocation toward higher-converting surfaces.',
    metric: '+7 leads / 28 days',
    metricLabel: 'projected · same spend',
  },
  {
    n: '02',
    kind: 'R&D process · multi-team',
    title: 'R&D workflow quality gates',
    body: 'Introduced no-spec-no-code discipline, CI quality gates, and review ownership to reduce rework and prevent broken delivery flows.',
    metric: 'lower delivery risk',
    metricLabel: 'internal · multi-dev workflows',
  },
  {
    n: '03',
    kind: 'Content ops · social',
    title: 'AI-assisted content workflow',
    body: 'Designed a repeatable flow for turning source material into structured LinkedIn and Facebook content, reducing blank-page work and improving publishing consistency.',
    metric: 'ad-hoc → repeatable',
    metricLabel: 'anonymized · in production',
  },
];

function Proof() {
  return (
    <section className="proof" id="proof">
      <div className="section-head">
        <div className="section-index"><span className="num">01</span><span>—</span><span>proof</span></div>
        <h2 className="section-title">three workflows that didn't die after the demo.</h2>
        <p className="section-lead">Anonymized snapshots of recent engagements. Numbers labeled <span className="mono-inline">projected</span>, <span className="mono-inline">internal</span>, or <span className="mono-inline">anonymized</span> when not externally verified.</p>
      </div>
      <div className="proof-grid">
        {PROOF.map(p => (
          <article key={p.n} className="card card-tick proof-card">
            <div className="proof-head">
              <span className="proof-num">{p.n}</span>
              <span className="proof-kind">{p.kind}</span>
            </div>
            <h3 className="proof-title">{p.title}</h3>
            <p className="proof-body">{p.body}</p>
            <div className="proof-metric">
              <div className="proof-metric-v">{p.metric}</div>
              <div className="proof-metric-l">{p.metricLabel}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Proof = Proof;

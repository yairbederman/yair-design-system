/* global React */
const WORK = [
  {
    n: '01',
    client: 'lognet systems',
    role: 'r&d manager · 2 teams, 7 devs',
    headline: 'rolled out ai-assisted dev across cloud + legacy',
    bullets: [
      'reduced spec rework 80% (50% → 10%)',
      'throughput +25%, bugs to qa −25%',
      'prod incidents −40% via ci/cd gates',
    ],
    status: 'in production',
  },
  {
    n: '02',
    client: 'rakuten viber',
    role: 'pm tl · 50-person unit, 6 countries',
    headline: 'scaled scrum from 15 → 50 across distributed teams',
    bullets: [
      'mentored scrum masters across 5 countries',
      'jira dashboards · custom team performance metrics',
      'shorter ttm, higher throughput unit-wide',
    ],
    status: 'shipped',
  },
  {
    n: '03',
    client: 'independent',
    role: 'agentic feature lifecycle',
    headline: 'requirements → ship: a full claude code pipeline',
    bullets: [
      'spec validation, task decomposition, qa gates',
      'reusable templates · verification harness',
      'currently running with two design partners',
    ],
    status: 'in progress',
  },
];

function HdfWork() {
  return (
    <section className="work" id="work">
      <div className="section-head">
        <div className="section-index"><span className="num">03</span><span>—</span><span>case studies</span></div>
        <h2 className="section-title">what shipped.</h2>
      </div>
      <div className="work-list">
        {WORK.map(w => (
          <article key={w.n} className="work-row">
            <div className="work-num">{w.n}</div>
            <div className="work-meta">
              <div className="work-client">{w.client}</div>
              <div className="work-role">{w.role}</div>
            </div>
            <div className="work-body">
              <h3 className="work-headline">{w.headline}</h3>
              <ul className="work-bullets">
                {w.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="work-status">
              <span className={'chip ' + (w.status === 'in production' || w.status === 'shipped' ? 'chip-ok' : 'chip-accent')}>
                {w.status === 'in production' || w.status === 'shipped' ? '✓ ' : ''}{w.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.HdfWork = HdfWork;

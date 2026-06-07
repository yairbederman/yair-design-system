/* global React */
const SERVICES = [
  {
    n: '01',
    t: 'agentic feature lifecycle',
    d: 'Intake → spec → tasks → implementation → QA. A full pipeline with verification gates between every stage. No spec, no code.',
    tags: ['claude code', 'antigravity', 'jira'],
  },
  {
    n: '02',
    t: 'spec-to-code acceleration',
    d: 'Reusable templates and verification harnesses that take validated requirements directly to merge-ready PRs. Throughput up 25%, rework down 80%.',
    tags: ['claude code', 'github copilot'],
  },
  {
    n: '03',
    t: 'ai-first engineering culture',
    d: 'Process retrofit: PR standards, CI/CD quality gates, mandatory review enforcement. The boring infra that makes AI-assisted dev actually safe.',
    tags: ['scrum', 'jira', 'bitbucket'],
  },
  {
    n: '04',
    t: 'internal agents & rag',
    d: 'Personal assistants and team agents — calendar, email, knowledge retrieval with structured memory. Always with a human checkpoint.',
    tags: ['rag', 'next.js', 'react'],
  },
];

function HdfServices() {
  return (
    <section className="services" id="services">
      <div className="section-head">
        <div className="section-index"><span className="num">01</span><span>—</span><span>services</span></div>
        <h2 className="section-title">four engagements. all end in production.</h2>
      </div>
      <div className="service-grid">
        {SERVICES.map(s => (
          <article key={s.n} className="card card-tick service-card">
            <div className="service-num">{s.n}</div>
            <h3 className="service-t">{s.t}</h3>
            <p className="service-d">{s.d}</p>
            <div className="service-tags">
              {s.tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.HdfServices = HdfServices;

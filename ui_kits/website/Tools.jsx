/* global React */
const TOOLS = [
  'Claude Code',
  'GitHub Copilot',
  'Antigravity',
  'Figma',
  'Jira',
  'React',
  'Next.js',
  'workflow automation',
  'AI agents',
];

function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="section-head">
        <div className="section-index"><span className="num">05</span><span>—</span><span>stack</span></div>
        <h2 className="section-title">how I build.</h2>
        <p className="section-lead">Implementation stack, not the promise. The outcome is the system &mdash; tools just keep it boring to ship.</p>
      </div>
      <ul className="tools-list" aria-label="implementation stack">
        {TOOLS.map(t => (
          <li key={t} className="tools-item">{t}</li>
        ))}
      </ul>
    </section>
  );
}

window.Tools = Tools;

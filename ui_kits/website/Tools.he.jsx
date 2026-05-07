/* global React */
const TOOLS_HE = [
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

function ToolsHe() {
  return (
    <section className="tools" id="tools">
      <div className="section-head">
        <div className="section-index"><span>סטאק</span><span>—</span><span className="num">04</span></div>
        <h2 className="section-title">איך אני בונה.</h2>
        <p className="section-lead">סטאק יישום, לא ההבטחה. ההבטחה היא המערכת &mdash; הכלים פשוט שומרים שהעלייה לייצור תהיה משעממת.</p>
      </div>
      <ul className="tools-list" aria-label="סטאק יישום">
        {TOOLS_HE.map(t => (
          <li key={t} className="tools-item" dir="ltr">{t}</li>
        ))}
      </ul>
    </section>
  );
}

window.ToolsHe = ToolsHe;

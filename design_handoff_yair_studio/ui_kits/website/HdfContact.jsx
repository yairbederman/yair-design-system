/* global React */
const { useState } = React;

function HdfContact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <div className="section-index"><span className="num">04</span><span>—</span><span>contact</span></div>
        <h2 className="section-title">tell me what you're stuck on.</h2>
        <p className="section-lead">A 30-minute call. If it's a fit we talk scope. If it isn't, I'll point you at someone closer.</p>
      </div>
      <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <div className="field"><span className="label-mono">name</span><input className="input" defaultValue="" placeholder="your name" /></div>
        <div className="field"><span className="label-mono">company</span><input className="input" placeholder="acme inc." /></div>
        <div className="field full"><span className="label-mono">email</span><input className="input" type="email" placeholder="you@company.com" /></div>
        <div className="field full"><span className="label-mono">where you are</span>
          <select className="input">
            <option>we're piloting an llm prototype</option>
            <option>we have one shipped feature, planning more</option>
            <option>ai-assisted dev rollout, team-wide</option>
            <option>something else</option>
          </select>
        </div>
        <div className="field full"><span className="label-mono">notes</span><textarea className="input" rows="4" placeholder="what does success look like?"></textarea></div>
        <div className="field full submit-row">
          <button type="submit" className="btn btn-primary">{sent ? 'sent · talk soon' : 'book a call'}</button>
          <span className="caption">replies within 24h · tel aviv time</span>
        </div>
      </form>
    </section>
  );
}

function HdfFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-l">
        <span className="wordmark" aria-label="y[AI]r studio">
          <span className="wordmark-y">y</span>
          <span className="wordmark-bracket">[</span>
          <span className="wordmark-ai">AI</span>
          <span className="wordmark-bracket">]</span>
          <span className="wordmark-r">r</span>
        </span>
        <span className="footer-tag">independent ai systems practice · 2026</span>
      </div>
      <div className="footer-r">
        <a href="#">linkedin</a>
        <a href="#">github</a>
        <a href="mailto:hi@yair.studio">hi@yair.studio</a>
      </div>
    </footer>
  );
}

window.HdfContact = HdfContact;
window.HdfFooter = HdfFooter;

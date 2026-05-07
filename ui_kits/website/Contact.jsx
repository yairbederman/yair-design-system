/* global React */
const { useState } = React;

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <div className="section-index"><span className="num">06</span><span>—</span><span>contact</span></div>
        <h2 className="section-title">tell me what you're stuck on.</h2>
        <p className="section-lead">A 30-minute call. We map your first AI system, find the bottleneck, and decide what to automate first. If it's not a fit, I'll point you at someone closer.</p>
      </div>
      <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }} aria-label="contact form">
        <label className="field"><span className="label-mono">name</span><input className="input" placeholder="your name" autoComplete="name" /></label>
        <label className="field"><span className="label-mono">company</span><input className="input" placeholder="acme inc." autoComplete="organization" /></label>
        <label className="field full"><span className="label-mono">email</span><input className="input" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
        <label className="field full"><span className="label-mono">where you are</span>
          <select className="input">
            <option>we're piloting an llm prototype</option>
            <option>we have one shipped feature, planning more</option>
            <option>AI-assisted dev rollout, team-wide</option>
            <option>something else</option>
          </select>
        </label>
        <label className="field full"><span className="label-mono">notes</span><textarea className="input" rows="4" placeholder="what does success look like?"></textarea></label>
        <div className="field full submit-row">
          <button type="submit" className="btn btn-primary">{sent ? 'sent · talk soon' : <>map my first <span className="btn-cap">AI</span> system</>}</button>
          <span className="caption" aria-live="polite">{sent ? '' : 'replies within 24h · tel aviv time'}</span>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" aria-label="site footer">
      <div className="footer-l">
        <img className="footer-logo" src="../../assets/wordmark-compact.svg" alt="y[AI]r studio" />
        <span className="footer-tag">independent AI systems practice · 2026</span>
      </div>
      <div className="footer-r">
        <a href="#" aria-label="LinkedIn (opens in new tab)">linkedin</a>
        <a href="#" aria-label="GitHub (opens in new tab)">github</a>
        <a href="mailto:hi@yair.studio">hi@yair.studio</a>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.Footer = Footer;

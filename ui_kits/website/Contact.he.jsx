/* global React */
const { useState: useStateHe } = React;

function ContactHe() {
  const [sent, setSent] = useStateHe(false);
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <div className="section-index"><span>צור קשר</span><span>—</span><span className="num">06</span></div>
        <h2 className="section-title">ספרו לי במה אתם תקועים.</h2>
        <p className="section-lead">שיחה של 30 דקות. ממפים את מערכת ה-<span dir="ltr">AI</span> הראשונה, מאתרים את צוואר הבקבוק, ומחליטים מה כדאי לאוטומט קודם. אם לא מתאים &mdash; אכוון אתכם למישהו קרוב יותר.</p>
      </div>
      <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }} aria-label="טופס יצירת קשר">
        <label className="field"><span className="label-mono">שם</span><input className="input" placeholder="השם שלך" autoComplete="name" /></label>
        <label className="field"><span className="label-mono">חברה</span><input className="input" placeholder="acme inc." autoComplete="organization" /></label>
        <label className="field full"><span className="label-mono">אימייל</span><input className="input" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
        <label className="field full"><span className="label-mono">איפה אתם נמצאים</span>
          <select className="input">
            <option>אנחנו מנסים אבטיפוס LLM</option>
            <option>יש לנו פיצ׳ר אחד בייצור, מתכננים עוד</option>
            <option>הטמעת פיתוח מבוסס-AI ברמת הצוות</option>
            <option>משהו אחר</option>
          </select>
        </label>
        <label className="field full"><span className="label-mono">הערות</span><textarea className="input" rows="4" placeholder="איך נראית הצלחה?"></textarea></label>
        <div className="field full submit-row">
          <button type="submit" className="btn btn-primary">{sent ? 'נשלח · נדבר בקרוב' : <>מפה לי מערכת <span className="btn-cap">AI</span> ראשונה</>}</button>
          <span className="caption" aria-live="polite">{sent ? '' : 'מענה תוך 24 שעות · שעון תל אביב'}</span>
        </div>
      </form>
    </section>
  );
}

function FooterHe() {
  return (
    <footer className="site-footer" aria-label="תחתית האתר">
      <div className="footer-l">
        <img dir="ltr" className="footer-logo" src="../../assets/wordmark-compact.svg" alt="y[AI]r studio" />
        <span className="footer-tag">פרקטיקה עצמאית למערכות AI · <span dir="ltr">2026</span></span>
      </div>
      <div className="footer-r">
        <a href="#" aria-label="לינקדאין (נפתח בחלון חדש)" dir="ltr">linkedin</a>
        <a href="#" aria-label="גיטהאב (נפתח בחלון חדש)" dir="ltr">github</a>
        <a href="mailto:hi@yair.studio" dir="ltr">hi@yair.studio</a>
      </div>
    </footer>
  );
}

window.ContactHe = ContactHe;
window.FooterHe = FooterHe;

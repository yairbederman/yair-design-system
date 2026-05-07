/* global React */
/* Hebrew hero. Numerals/arrows wrapped dir="ltr" per HEBREW.md §6.
   Wordmark + meta-key tokens stay Latin where they're brand surface. */
function HeroHe() {
  return (
    <section className="hero" id="top">
      <div className="dot-grid hero-bg"></div>
      <div className="hero-inner">
        <div className="section-index">
          <span>פרקטיקה עצמאית למערכות <span dir="ltr">AI</span></span><span>—</span><span className="num">00</span>
        </div>
        <div className="hero-mark">
          <img dir="ltr" className="hero-logo" src="../../assets/wordmark.svg" alt="y[AI]r studio" />
        </div>
        <h1 className="hero-title">
          מערכות <span dir="ltr">AI</span> שעובדות<br />
          גם <span className="hl">ביום שאחרי הדמו</span>.<span className="cursor" aria-hidden="true">_</span>
        </h1>
        <p className="hero-lead">
          אני עוזר לעסקים להפוך תהליכים מבולגנים, עבודה חוזרת וצווארי בקבוק בתוכן למערכות <span dir="ltr">AI</span> שעובדות בפועל &mdash; מעבר לדמו, אל תוך יום שני בבוקר.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">מפה לי מערכת <span className="btn-cap">AI</span> ראשונה</a>
          <a href="#proof" className="btn">ראה דוגמאות</a>
        </div>
        <div className="hero-meta">
          <div><span className="k">מיקום</span><span className="v">תל אביב · מרחוק</span></div>
          <div><span className="k">פוקוס</span><span className="v">תהליכים · אג׳נטים · תפעול תוכן</span></div>
          <div><span className="k">מאז</span><span className="v" dir="ltr">2024</span></div>
        </div>
      </div>
    </section>
  );
}

window.HeroHe = HeroHe;

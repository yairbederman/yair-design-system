/* global React */
/* Hebrew nav — RTL. Wordmark stays Latin LTR per HEBREW.md §1.
   Links translate; CTA stays bracketed. */
function NavHe() {
  return (
    <nav className="site-nav" aria-label="ראשית">
      <a className="brand" href="#top" aria-label="y[AI]r studio — דף הבית">
        <img className="brand-logo" src="../../assets/wordmark.svg" alt="" aria-hidden="true" />
      </a>
      <div className="nav-links">
        <a href="#proof">הוכחות</a>
        <a href="#services">שירותים</a>
        <a href="#approach">גישה</a>
        <a href="#tools">סטאק</a>
      </div>
      <a href="#contact" className="btn btn-primary nav-cta">מפה לי מערכת <span className="btn-cap">AI</span> ראשונה</a>
    </nav>
  );
}

window.NavHe = NavHe;

/* global React */
const SERVICES_HE = [
  {
    n: '01',
    t: 'מחזור חיים אג׳נטי לפיצ׳רים',
    d: 'קליטה ← אפיון ← משימות ← מימוש ← בקרת איכות. פייפליין שלם עם שערי ולידציה בין כל שלב. בלי אפיון, אין קוד.',
    tags: ['claude code', 'antigravity', 'jira'],
  },
  {
    n: '02',
    t: 'האצה מאפיון לקוד',
    d: 'תבניות וכלים לוולידציה שלוקחים דרישות מאומתות ישר ל-PR מוכן למיזוג. תפוקה +25%, עבודה כפולה −80%.',
    tags: ['claude code', 'github copilot'],
  },
  {
    n: '03',
    t: 'תרבות הנדסית מבוססת-AI',
    d: 'התאמה בדיעבד של תהליכים: סטנדרט PR, שערי איכות ב-CI/CD, אכיפת ריוויו. התשתית המשעממת שהופכת פיתוח עם AI לבטוח באמת.',
    tags: ['scrum', 'jira', 'bitbucket'],
  },
  {
    n: '04',
    t: 'אג׳נטים פנימיים ו-RAG',
    d: 'עוזרים אישיים ואג׳נטים לצוות — יומן, מייל, אחזור ידע עם זיכרון מובנה. תמיד עם נקודת בקרה אנושית.',
    tags: ['rag', 'next.js', 'react'],
  },
];

function ServicesHe() {
  return (
    <section className="services" id="services">
      <div className="section-head">
        <div className="section-index"><span>שירותים</span><span>—</span><span className="num">02</span></div>
        <h2 className="section-title">ארבעה סוגי התקשרות. כולם נגמרים בייצור.</h2>
      </div>
      <div className="service-grid">
        {SERVICES_HE.map(s => (
          <article key={s.n} className="card card-tick service-card">
            <div className="service-num" dir="ltr">{s.n}</div>
            <h3 className="service-t">{s.t}</h3>
            <p className="service-d">{s.d}</p>
            <div className="service-tags">
              {s.tags.map(t => <span key={t} className="chip" dir="ltr">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.ServicesHe = ServicesHe;

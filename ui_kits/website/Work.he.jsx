/* global React */
const WORK_HE = [
  {
    n: '01',
    client: 'lognet systems',
    role: 'מנהל פיתוח · 2 צוותים, 7 מפתחים',
    headline: 'הטמעת פיתוח מבוסס-AI על קלאוד וקוד legacy',
    bullets: [
      'הפחתת עבודה כפולה באפיון ב־80% (50% → 10%)',
      'תפוקה +25%, באגים שהגיעו ל-QA −25%',
      'תקלות בייצור −40% בזכות שערי CI/CD',
    ],
    status: 'בייצור',
    statusKind: 'ok',
  },
  {
    n: '02',
    client: 'rakuten viber',
    role: 'PM TL · יחידה של 50 איש, 6 מדינות',
    headline: 'הרחבת סקראם מ־15 ל־50 על צוותים מבוזרים',
    bullets: [
      'חניכת סקראם מאסטרים ב־5 מדינות',
      'דשבורדים ב-Jira · מדדי ביצועים מותאמים',
      'TTM קצר יותר, תפוקה גבוהה יותר ביחידה',
    ],
    status: 'הועלה',
    statusKind: 'ok',
  },
  {
    n: '03',
    client: 'independent',
    role: 'מחזור חיים אג׳נטי',
    headline: 'מדרישות לעלייה לייצור: פייפליין שלם עם claude code',
    bullets: [
      'ולידציית אפיון, פירוק משימות, שערי QA',
      'תבניות עם רתימת ולידציה לשימוש חוזר',
      'רץ כעת עם שני שותפי עיצוב',
    ],
    status: 'בתהליך',
    statusKind: 'accent',
  },
];

function WorkHe() {
  return (
    <section className="work" id="work">
      <div className="section-head">
        <div className="section-index"><span>מקרי בוחן</span><span>—</span><span className="num">04</span></div>
        <h2 className="section-title">מה עלה לייצור.</h2>
      </div>
      <div className="work-list">
        {WORK_HE.map(w => (
          <article key={w.n} className="work-row">
            <div className="work-num" dir="ltr">{w.n}</div>
            <div className="work-meta">
              <div className="work-client" dir="ltr">{w.client}</div>
              <div className="work-role">{w.role}</div>
            </div>
            <div className="work-body">
              <h3 className="work-headline">{w.headline}</h3>
              <ul className="work-bullets">
                {w.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="work-status">
              <span className={'chip ' + (w.statusKind === 'ok' ? 'chip-ok' : 'chip-accent')}>
                {w.statusKind === 'ok' ? '✓ ' : ''}{w.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.WorkHe = WorkHe;

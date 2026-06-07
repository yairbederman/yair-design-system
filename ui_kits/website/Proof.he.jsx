/* global React */
const PROOF_HE = [
  {
    n: '01',
    kind: 'משפך B2B · קמפיין ממומן',
    title: 'אופטימיזציה למשפך B2B במשרד עו״ד',
    body: 'ניתחתי ביצועי לידים בקמפיינים של Meta, זיהיתי placements לא יעילים, והצעתי הקצאת תקציב מחדש למשטחים עם המרה גבוהה יותר.',
    metric: '+7 לידים / 28 ימים',
    metricLabel: 'תחזית · אותו תקציב',
  },
  {
    n: '02',
    kind: 'תהליכי פיתוח · רב-צוותים',
    title: 'שערי איכות לזרימת עבודה ב-R&D',
    body: 'הטמעתי משמעת של “בלי אפיון, אין קוד”, שערי איכות ב-CI, ובעלות על ריוויו — כדי להפחית עבודה כפולה ולמנוע זרימות שבורות.',
    metric: 'סיכון אספקה נמוך יותר',
    metricLabel: 'מדידה פנימית · עבודה רב-מפתחים',
  },
  {
    n: '03',
    kind: 'תפעול תוכן · רשתות',
    title: 'תהליך תוכן בעזרת AI',
    body: 'בניתי תהליך חוזר ולקיחת חומר גולמי והפיכתו לתוכן מובנה ל-LinkedIn ו-Facebook — פחות התחלה מאפס, יותר עקביות בפרסום.',
    metric: 'מאד-הוק לתהליך חוזר',
    metricLabel: 'אנונימי · בייצור',
  },
];

function ProofHe() {
  return (
    <section className="proof" id="proof">
      <div className="section-head">
        <div className="section-index"><span>הוכחות</span><span>—</span><span className="num">01</span></div>
        <h2 className="section-title">שלושה תהליכים שלא מתו אחרי הדמו.</h2>
        <p className="section-lead">תמונות מצב אנונימיות מהתקשרויות אחרונות. מספרים מסומנים <span className="mono-inline" dir="ltr">projected</span>, <span className="mono-inline" dir="ltr">internal</span> או <span className="mono-inline" dir="ltr">anonymized</span> כשהם לא מאומתים חיצונית.</p>
      </div>
      <div className="proof-grid">
        {PROOF_HE.map(p => (
          <article key={p.n} className="card card-tick proof-card">
            <div className="proof-head">
              <span className="proof-num" dir="ltr">{p.n}</span>
              <span className="proof-kind">{p.kind}</span>
            </div>
            <h3 className="proof-title">{p.title}</h3>
            <p className="proof-body">{p.body}</p>
            <div className="proof-metric">
              <div className="proof-metric-v">{p.metric}</div>
              <div className="proof-metric-l">{p.metricLabel}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.ProofHe = ProofHe;

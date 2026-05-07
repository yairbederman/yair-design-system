/* global React */
function ApproachHe() {
  return (
    <section className="approach" id="approach">
      <div className="section-head">
        <div className="section-index"><span>גישה</span><span>—</span><span className="num">03</span></div>
        <h2 className="section-title">בלי אפיון, אין קוד.</h2>
        <p className="section-lead">כל התקשרות רצה אותו פייפליין. כל חץ הוא שער אנושי.</p>
      </div>
      <pre className="ascii-diagram" dir="ltr">{`┌─ intake ─────┐    ┌─ spec ───────┐    ┌─ tasks ──────┐    ┌─ build ──────┐    ┌─ qa ─────────┐
│ requirements │ ─▶ │ validated    │ ─▶ │ decomposed   │ ─▶ │ AI-assisted  │ ─▶ │ verification │
│ from biz     │    │ no spec→code │    │ jira / linear│    │ claude code  │    │ gates · ✓    │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
                          │                     │                   │
                          └─ human gate ────────┴─ human gate ──────┘`}</pre>
      <div className="approach-metrics">
        <div className="metric-cell"><div className="metric" dir="ltr"><span className="delta">−80</span>%</div><div className="lab">עבודה כפולה באפיון</div><div className="ba" dir="ltr">50% → 10%</div></div>
        <div className="metric-cell"><div className="metric" dir="ltr"><span className="delta">+25</span>%</div><div className="lab">תפוקה</div><div className="ba">בעזרת AI</div></div>
        <div className="metric-cell"><div className="metric" dir="ltr"><span className="delta">−40</span>%</div><div className="lab">תקלות בייצור</div><div className="ba">בזכות שערי CI/CD</div></div>
        <div className="metric-cell"><div className="metric" dir="ltr"><span className="delta">+70</span>%</div><div className="lab">יכולת חיזוי</div><div className="ba">תכנון מול בפועל</div></div>
      </div>
    </section>
  );
}

window.ApproachHe = ApproachHe;

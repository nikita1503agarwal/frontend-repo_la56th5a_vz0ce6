export default function Stories() {
  const items = [
    {
      kpi: '42% reduction',
      tag: 'Automation',
      title: 'Claims processing accelerated for a national insurer',
      copy: 'We implemented an AI-driven intake and validation pipeline that cut manual reviews and improved accuracy.'
    },
    {
      kpi: '99.95% uptime',
      tag: 'Cloud',
      title: 'Global SaaS platform re-architected for resilience',
      copy: 'Migrated to a microservices design with autoscaling, observability, and zero-downtime releases.'
    },
    {
      kpi: '10x faster insights',
      tag: 'Data',
      title: 'Retail analytics platform with real-time dashboards',
      copy: 'Streaming pipelines and a governed lakehouse delivered actionable KPIs for merchandising teams.'
    }
  ]

  return (
    <section id="stories" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Success Stories</h2>
          <p className="mt-4 text-slate-300">Real outcomes from recent engagements across industries.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="text-sm text-slate-400">{c.tag}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{c.copy}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {c.kpi}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

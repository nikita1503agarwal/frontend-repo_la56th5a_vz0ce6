import { Shield, Cloud, Bot, Database, Gauge, Workflow } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    desc: 'Zero-trust frameworks, threat monitoring, and compliance automation aligned to ISO, SOC 2, and GDPR.'
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    desc: 'Modernize with containerization, infrastructure as code, and cost-optimized multi-cloud deployments.'
  },
  {
    icon: Bot,
    title: 'Applied AI & Automation',
    desc: 'Deploy AI assistants, document intelligence, and process automation tuned to your business context.'
  },
  {
    icon: Database,
    title: 'Data Platforms',
    desc: 'Build secure data lakes, streaming pipelines, and analytics layers to unlock real-time insights.'
  },
  {
    icon: Gauge,
    title: 'Performance Engineering',
    desc: 'Reliability engineering, load testing, and observability to keep mission-critical apps fast and stable.'
  },
  {
    icon: Workflow,
    title: 'Digital Transformation',
    desc: 'From discovery to rollout — target operating models, roadmaps, and product delivery at scale.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Deliver</h2>
          <p className="mt-4 text-slate-300">Specialized services designed to accelerate transformation while protecting your organization.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-white/20 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500/20 via-sky-500/20 to-amber-400/20 ring-1 ring-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

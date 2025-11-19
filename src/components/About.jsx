export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About NovaIntelli</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              We are a technology consultancy focused on measurable outcomes. Our team blends engineering, data science, and product strategy to deliver systems that are dependable, compliant, and built for scale.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              From modernizing legacy stacks to rolling out AI copilots, we help enterprises reduce costs, increase velocity, and turn data into a strategic asset.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-xs text-slate-400">Project success rate</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-xs text-slate-400">Enterprise implementations</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-amber-400/10 p-8">
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Security-first engineering across every layer</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Cloud-native architectures designed for resilience</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-400" /> Responsible AI that respects privacy and governance</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Collaborative delivery and transparent reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

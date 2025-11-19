export default function About() {
  return (
    <section id="media" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Media coverage</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Research R&amp;D • Give us a buzz • Call Center &amp; BPO
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Today, Outsourcing is considered as the most effective strategy of Business. We collaborate with clients globally to solve their problems.
            </p>
            <a href="#bpo" className="mt-6 inline-block text-sm font-semibold text-white underline/30 hover:underline">view more details</a>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400">Customer Care</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-3xl font-bold text-white">World Wide</p>
                <p className="text-xs text-slate-400">Cutting Edge Speed</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-amber-400/10 p-8">
              <ul className="space-y-4 text-slate-200">
                <li>Get your Advertisement Out Quickly</li>
                <li>Our customers are very valuable for us.</li>
                <li>Our services are not limited by Borders, deliver anywhere in World.</li>
                <li>Voice Broadcasting on all kind of Phones/Mobiles.</li>
                <li>Backed by World Class Infrastructure.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

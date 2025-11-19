import { PhoneCall, Megaphone, FlaskConical, Globe2, Headset, Zap } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Voice Ads - Fone Ads',
    desc: "Our revolutionary system delivers Voice Ads, alerts, promotions, updates & much more. It's an easy way to reach more in less time.",
    cta: 'view more details'
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    desc: 'GITV invests heavily in R&D, we sponsored and assisted Muslims First Social Networking website called MyMFB.com',
    cta: 'view more details'
  },
  {
    icon: Headset,
    title: 'Give us a buzz',
    desc: 'Call Center & BPO — Today, Outsourcing is considered as the most effective strategy of Business. We collaborate with clients globally to solve their problems.',
    cta: 'view more details'
  },
]

export default function Services() {
  return (
    <section id="bpo" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Offerings</h2>
          <p className="mt-4 text-slate-300">Pioneer and Exclusive Provider of Voice Ads / Robo Calls in Pakistan.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-white/20 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500/20 via-sky-500/20 to-amber-400/20 ring-1 ring-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-white underline/30 hover:underline">{s.cta}</a>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div>
              <div className="text-white font-semibold">World Wide</div>
              Cutting Edge Speed where it matters
            </div>
            <div>
              <div className="text-white font-semibold">24/7 Customer Care</div>
              Get your Advertisement Out Quickly
            </div>
            <div>
              <div className="text-white font-semibold">Backed by Infrastructure</div>
              Voice Broadcasting on all kinds of Phones/Mobiles
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

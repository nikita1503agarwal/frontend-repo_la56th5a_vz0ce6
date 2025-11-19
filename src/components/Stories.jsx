export default function Stories() {
  const items = [
    {
      quote: 'There is no way I could achieve my current sales volume without using GITV Robo Calls. It is very fast and inexpensive, and I love it.',
      author: 'Himalyan Pharma'
    },
    {
      quote: 'One of our Early Customers. PML N Chief used our services during the 18th February Elections to approach Millions of voters in Punjab. Leading news papers declared it as "Nawaz Sharif using Scientific manner to contact Voters"',
      author: 'Mian Muhammad Nawaz Sharif'
    },
    {
      quote: 'PTI used our revolutionary system in many of its Jalsas. Voice of Imran Khan was delivered to Millions of people all across Pakistan , media said "Karachi goes gaga over Imran Khan telephone call, in new PTI marketing ploy"',
      author: 'Imran Khan'
    }
  ]

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What our clients say about us</h2>
          <p className="mt-4 text-slate-300">Get updates by signing up to Newsletter</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <article key={c.author} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-slate-200 text-sm">“{c.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">— {c.author}</div>
            </article>
          ))}
        </div>

        <form className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6 grid gap-4 md:grid-cols-[1fr_auto]">
          <input className="w-full rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your Email" />
          <button className="rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow hover:shadow-lg transition" type="button">Sign up</button>
        </form>
      </div>
    </section>
  )
}

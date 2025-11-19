export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s talk about your roadmap</h2>
            <p className="mt-4 text-slate-300">Share your priorities and we’ll craft a tailored plan. Expect a response within one business day.</p>
            <div className="mt-8 space-y-3 text-slate-200/90">
              <p><strong>Email:</strong> hello@novaintelli.com</p>
              <p><strong>Phone:</strong> +1 (555) 012-3456</p>
              <p><strong>HQ:</strong> Austin, TX</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <form className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 grid gap-4">
              <div>
                <label className="text-sm text-slate-300">Full name</label>
                <input className="mt-1 w-full rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Jane Doe" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Work email</label>
                  <input type="email" className="mt-1 w-full rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Company</label>
                  <input className="mt-1 w-full rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Acme Inc." />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">How can we help?</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-slate-800/80 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Briefly describe your goals"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-400">By submitting, you agree to our privacy policy.</div>
                <button className="rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow hover:shadow-lg transition" type="button">Request Consultation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

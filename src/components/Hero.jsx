import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/50 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 animate-pulse" />
            AI-Powered IT Solutions
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build smarter systems with a trusted AI partner
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg">
            We design and deploy secure, scalable, and data-driven platforms — from cloud-native apps to intelligent automation — to accelerate your digital roadmap.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#services" className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white transition shadow">
              Explore Services
            </a>
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_45%)]" />
    </section>
  )
}

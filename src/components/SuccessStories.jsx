export default function SuccessStories() {
  const stories = [
    {
      imgPrimary: "/images/Nawaz-shreef.png",
      imgAltCandidate: "/images/Nawaz shreef.png",
      alt: "Mian Muhammad Nawaz Sharif",
      title: "Mian Muhammad Nawaz Sharif",
      text:
        "One of our early customers who used our voice broadcasting technology during a major election campaign to reach millions of people. Media described this approach as a scientific way to contact voters.",
    },
    {
      imgPrimary: "/images/imran-khan.png",
      imgAltCandidate: "/images/imran khan.png",
      alt: "Imran Khan",
      title: "Imran Khan",
      text:
        "He used our system during multiple events, delivering his message to millions nationwide. Media referred to it as an innovative communication strategy.",
    },
  ]

  const handleImageError = (e, altCandidate) => {
    const imgEl = e.currentTarget
    if (imgEl.dataset.triedAlt !== 'true' && altCandidate) {
      imgEl.dataset.triedAlt = 'true'
      imgEl.src = altCandidate
    } else {
      imgEl.src = `https://placehold.co/800x450/1f2937/94a3b8?text=Image+coming+soon`
    }
  }

  return (
    <section id="success-stories" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Success Stories</h2>
          <p className="mt-4 text-slate-300">
            We take pride in working with notable leaders and delivering communication systems that reach millions across the country.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <article key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
              <div className="aspect-[16/9] w-full bg-slate-800/50">
                <img
                  src={s.imgPrimary}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => handleImageError(e, s.imgAltCandidate)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stories from './components/Stories'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[42rem] rounded-full bg-gradient-to-r from-violet-600/20 via-sky-500/20 to-amber-400/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stories />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} NovaIntelli. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built with secure, scalable engineering.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

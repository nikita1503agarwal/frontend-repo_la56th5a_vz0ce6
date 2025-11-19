import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:opacity-100 opacity-80 transition"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/gitv-logo.png"
              alt="Global IT Vision logo"
              className="h-9 w-auto object-contain"
            />
            <span className="font-semibold tracking-tight text-lg">Global IT Vision</span>
          </a>

          <nav className="hidden md:flex items-center">
            <NavLink href="#media">Media coverage</NavLink>
            <NavLink href="#rnd">Research & R&D</NavLink>
            <NavLink href="#bpo">Call Center & BPO</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg transition"
            >
              Give us a buzz
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col">
              <NavLink href="#media" onClick={close}>Media coverage</NavLink>
              <NavLink href="#rnd" onClick={close}>Research & R&D</NavLink>
              <NavLink href="#bpo" onClick={close}>Call Center & BPO</NavLink>
              <NavLink href="#testimonials" onClick={close}>Testimonials</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <a
                href="#contact"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg transition"
              >
                Give us a buzz
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

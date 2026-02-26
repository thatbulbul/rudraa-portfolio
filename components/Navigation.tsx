'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Rudra Mittal
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('showreel')} className="text-sm hover:text-accent transition-colors">
            Showreel
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-accent transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm hover:text-accent transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Contact
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-3 bg-background">
          <button
            onClick={() => scrollToSection('showreel')}
            className="block w-full text-left text-sm hover:text-accent transition-colors py-2"
          >
            Showreel
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left text-sm hover:text-accent transition-colors py-2"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left text-sm hover:text-accent transition-colors py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-sm hover:text-accent transition-colors py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

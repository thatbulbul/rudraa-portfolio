'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-pretty">
            Editing Stories. Creating Impact.
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
            A passionate video editor specializing in cinematic edits, commercial content, and visual storytelling. Transforming raw footage into compelling narratives that engage and inspire.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 flex gap-4 justify-center flex-col sm:flex-row ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => scrollToSection('showreel')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
          >
            View Showreel
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border border-primary text-primary rounded font-medium hover:bg-muted transition-colors"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  )
}

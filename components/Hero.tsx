'use client'

import { useEffect, useRef } from 'react'
import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'
import ScrambleIn, { ScrambleInHandle } from '@/components/fancy/text/scramble-in'

export default function Hero() {
  const scrambleRef = useRef<ScrambleInHandle | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      scrambleRef.current?.start()
    }, 1200)
    return () => clearTimeout(timer)
  }, [])
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 21,
            }}
          >
            {`Editing Stories.`}
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="last"
            reverse={true}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 21,
              delay: 0.5,
            }}
          >
            {`Creating Impact.`}
          </VerticalCutReveal>
        </h1>

        <div className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          <p>
            A passionate video editor specializing in cinematic edits, commercial content, and visual storytelling. Transforming raw footage into compelling narratives that engage and inspire.
          </p>
        </div>

        <div className="mt-12 flex gap-4 justify-center flex-col sm:flex-row">
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

'use client'

import { useState } from 'react'

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="showreel" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Showreel</h2>
          <p className="text-muted-foreground text-lg">A collection of my latest cinematic work</p>
        </div>

        <div className="relative w-full aspect-video bg-primary/5 rounded-lg overflow-hidden border border-border group">
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  aria-label="Play showreel"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5" />
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>

        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>Featured: Commercial Reels • Documentary Clips • Social Media Content</p>
        </div>
      </div>
    </section>
  )
}

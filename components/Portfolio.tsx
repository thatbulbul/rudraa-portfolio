'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Brand Launch Campaign',
    category: 'Commercial',
    description: 'High-energy promotional video for tech startup product launch',
    color: 'from-slate-900 to-slate-700',
  },
  {
    id: 2,
    title: 'Real Estate Showcase',
    category: 'Real Estate',
    description: 'Cinematic property tour with aerial cinematography',
    color: 'from-slate-800 to-slate-600',
  },
  {
    id: 3,
    title: 'Social Media Series',
    category: 'Social Media',
    description: 'Short-form vertical content for Instagram Reels',
    color: 'from-slate-700 to-slate-500',
  },
  {
    id: 4,
    title: 'Documentary Feature',
    category: 'Documentary',
    description: '30-minute documentary with color grading and sound design',
    color: 'from-slate-900 to-slate-700',
  },
  {
    id: 5,
    title: 'YouTube Montage',
    category: 'YouTube',
    description: 'Fast-paced montage with dynamic transitions',
    color: 'from-slate-800 to-slate-600',
  },
  {
    id: 6,
    title: 'Wedding Highlight',
    category: 'Social Media',
    description: 'Emotional cinematic wedding ceremony edit',
    color: 'from-slate-700 to-slate-500',
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">A selection of recent projects across multiple categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${project.color} border border-border transition-all duration-300 hover:shadow-lg`}>
                {/* Placeholder background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-60 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white/90 text-primary hover:bg-white transition-all duration-300 shadow-lg hover:scale-110" aria-label="Play video">
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project info */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{project.category}</span>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
   {
    id: 7,
    title: 'Wedding Highlight',
    category: 'Social Media',
    description: 'Emotional cinematic wedding ceremony edit',
    color: 'from-slate-700 to-slate-500',
  },
   {
    id: 8,
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
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Reels</h2>
          <p className="text-muted-foreground text-lg">
            Short-form edits &amp; cinematic vertical content
          </p>
        </div>

        {/* REELS GRID */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group w-[240px] sm:w-[260px] cursor-pointer"
            >
              {/* REEL CARD */}
              <div
                className={`relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} border border-border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
              >
                {/* Play icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <svg
                      className="w-7 h-7 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Bottom Gradient Info (Reels Style) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="font-semibold text-white text-sm">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mt-3 text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

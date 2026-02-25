'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-md rounded-lg border-2 border-border bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <div className="text-center text-white/50">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm">Professional Photo</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                I&apos;m a video editor with a passion for cinematic storytelling and visual impact. With over 8 years of experience in the industry, I&apos;ve developed a keen eye for pacing, color, and narrative that resonates with audiences.
              </p>
              <p>
                My journey started with a fascination for film, and I&apos;ve since worked with brands, content creators, and production companies to bring their visions to life. Whether it&apos;s a 15-second social media reel or a feature-length documentary, I approach every project with the same level of creativity and precision.
              </p>
              <p>
                I believe that great editing isn&apos;t about flashy effects—it&apos;s about understanding the story and letting the visuals serve the narrative. My editing philosophy centers on clarity, emotion, and engagement.
              </p>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro'].map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

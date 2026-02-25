'use client'

const services = [
  {
    title: 'Video Editing',
    description: 'Professional editing in Premiere Pro with a focus on narrative and pacing',
    icon: '✂️',
  },
  {
    title: 'Color Grading',
    description: 'Cinematic color work using DaVinci Resolve to enhance mood and storytelling',
    icon: '🎨',
  },
  {
    title: 'Motion Graphics',
    description: 'Dynamic titles, animations, and visual effects created in After Effects',
    icon: '✨',
  },
  {
    title: 'Social Media Reels',
    description: 'Vertical short-form content optimized for Instagram, TikTok, and YouTube Shorts',
    icon: '📱',
  },
  {
    title: 'Documentary Editing',
    description: 'Long-form narrative editing with sound design and pacing expertise',
    icon: '🎬',
  },
  {
    title: 'Sound Design',
    description: 'Audio mixing, foley, and music selection to elevate production quality',
    icon: '🎵',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg">What I can do for your project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border bg-background hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

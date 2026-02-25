'use client'

const testimonials = [
  {
    quote: 'Alexander transformed our raw footage into a stunning cinematic piece. His attention to detail and creative vision exceeded our expectations.',
    author: 'Sarah Mitchell',
    role: 'Marketing Director, Tech Startup',
    initials: 'SM',
  },
  {
    quote: 'Working with Alexander was seamless. He understood our brand perfectly and delivered edits that captured exactly what we wanted to communicate.',
    author: 'James Rodriguez',
    role: 'Content Creator, 500k followers',
    initials: 'JR',
  },
  {
    quote: 'His color grading work is exceptional. The documentary footage he edited looks like it was shot on high-end cinema cameras. Highly recommended.',
    author: 'Emma Chen',
    role: 'Producer, Documentary Films',
    initials: 'EC',
  },
  {
    quote: 'The real estate videos Alexander created dramatically improved our property listings performance. Professional, fast, and exactly what we needed.',
    author: 'Michael Torres',
    role: 'Real Estate Agency Owner',
    initials: 'MT',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground text-lg">What clients say about my work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex items-start">
                <div className="flex text-accent gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

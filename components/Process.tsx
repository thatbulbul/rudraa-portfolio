'use client'

const steps = [
  {
    number: '01',
    title: 'Concept',
    description: 'Understanding your vision, goals, and target audience to shape the creative direction',
  },
  {
    number: '02',
    title: 'Editing',
    description: 'Crafting the narrative with precise cuts, pacing, and transitions that tell your story',
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'Color grading, sound design, and revisions to ensure every frame is perfect',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final exports optimized for your platform with all project files provided',
  },
]

export default function Process() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Process</h2>
          <p className="text-muted-foreground text-lg">How I bring your project to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-border" />
              )}

              <div className="bg-background rounded-lg p-8 border border-border hover:border-accent transition-colors duration-300">
                <div className="text-4xl font-bold text-muted-foreground/30 mb-4">{step.number}</div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="mt-8 lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-1" />}
              </div>
              <div className="pb-8">
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

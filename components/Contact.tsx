'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', project: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Powerful</h2>
          <p className="text-muted-foreground text-lg">Ready to bring your vision to life? Get in touch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
              <p className="text-muted-foreground">
                Whether you have a quick question or a full project in mind, I'd love to hear from you. Let's discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:contact@alexanderchen.com" className="font-medium hover:text-accent transition-colors">
                  contact@Rudramittal6@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+1234567890" className="font-medium hover:text-accent transition-colors">
                  +91  8077 352 107
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Follow</p>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', url: 'https://www.instagram.com/rudra_mittal001?igsh=MWNkd2tzMGRseGN6' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rudra-mittal-846a2a249/' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-background rounded-lg p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Project Type</label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="e.g., Commercial, Documentary, Social Media"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  rows={4}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-all disabled:opacity-50"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

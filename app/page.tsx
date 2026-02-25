'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Showreel from '@/components/Showreel'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Showreel />
      <Portfolio />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

'use client'

import { motion, Transition } from 'framer-motion'
import { ReactNode } from 'react'

interface VerticalCutRevealProps {
  children: string
  splitBy?: 'characters' | 'words'
  staggerDuration?: number
  staggerFrom?: 'first' | 'last' | 'center'
  reverse?: boolean
  transition?: Transition
}

export default function VerticalCutReveal({
  children,
  splitBy = 'characters',
  staggerDuration = 0.025,
  staggerFrom = 'first',
  reverse = false,
  transition = { type: 'spring', stiffness: 200, damping: 21 },
}: VerticalCutRevealProps) {
  const items = splitBy === 'characters' ? children.split('') : children.split(' ')
  
  const getDelay = (index: number) => {
    const baseDelay = transition.delay || 0
    if (staggerFrom === 'first') {
      return baseDelay + index * staggerDuration
    } else if (staggerFrom === 'last') {
      return baseDelay + (items.length - 1 - index) * staggerDuration
    } else {
      const center = Math.floor(items.length / 2)
      return baseDelay + Math.abs(center - index) * staggerDuration
    }
  }

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: reverse ? -100 : 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ...transition,
            delay: getDelay(index),
          }}
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </div>
  )
}

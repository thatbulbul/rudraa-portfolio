'use client'

import Gravity, { MatterBody } from '@/components/fancy/physics/gravity'

const rand = (min: number, max: number) =>
  Math.random() * (max - min) + min

export default function Footer() {
  return (
    <footer className="border-t border-border py-4 px-4">

      {/* ✅ Smaller + Scroll Safe */}
      <div className="w-full h-[160px] relative overflow-hidden">
        <Gravity gravity={{ x: 0, y: 0.6 }} className="w-full h-full">

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#0015ff] text-white rounded-full px-6 py-3">
              Premiere Pro
            </div>
          </MatterBody>

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#e794da] text-white rounded-full px-6 py-3">
              Photoshop
            </div>
          </MatterBody>

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#1f464d] text-white rounded-full px-6 py-3">
              DaVinci Resolve
            </div>
          </MatterBody>

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#ff5941] text-white rounded-full px-6 py-3">
              After Effects
            </div>
          </MatterBody>

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#f97316] text-white rounded-full px-6 py-3">
              Color Grading
            </div>
          </MatterBody>

          <MatterBody x={`${rand(10, 90)}%`} y={`${rand(0, 15)}%`} angle={rand(-25, 25)}>
            <div className="text-lg sm:text-xl md:text-2xl bg-[#ffd726] text-black rounded-full px-6 py-3">
              Motion Graphics
            </div>
          </MatterBody>

        </Gravity>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border pt-4 mt-4 text-center text-xs text-muted-foreground">
        <p>&copy; 2024 Rudra Mittal. All rights reserved.</p>
      </div>
    </footer>
  )
}
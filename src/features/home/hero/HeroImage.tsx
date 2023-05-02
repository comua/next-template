import { motion } from 'framer-motion'
import React from 'react'

import { EASING } from '@/lib/animation'

export const HeroImage = () => {
  return (
    <div className="hero mt-80 aspect-video w-full max-w-content tablet:mt-144">
      <div className="animate-popup grid h-full w-full grid-cols-[1fr] grid-rows-[1fr] rounded-sm">
        <div className="grid-area-1 animate-hero-gradient-bloom rounded-[inherit]" />
        <div className="grid-area-1 border-gradient radial-gradient-hero h-full w-full rounded-[inherit]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.68, duration: 0.4, ease: EASING.ease } }}
          className="grid-area-1 animate-gradient border-gradient z-10 rounded-[inherit]"
        />
      </div>
    </div>
  )
}

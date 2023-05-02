import { motion } from 'framer-motion'
import React from 'react'

import { Button } from '@/components/button/Button'
import { ChevronRightIcon } from '@/components/icons/ChevronRightIcon'
import { NoScrollLink } from '@/components/NoScrollLink'
import { EASING } from '@/lib/animation'

import { HeroImage } from './HeroImage'

export const HeroSection = () => {
  return (
    <section className="mb-[24rem] flex w-full flex-col items-center px-page">
      <motion.div
        initial={{ opacity: 0, translateY: '-1rem' }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1.2, ease: EASING.ease },
        }}
      >
        <NoScrollLink
          href="/"
          className="rounded-full border border-white/10 bg-white/10 px-12 py-4 text-12 transition-colors hover:bg-white/20"
        >
          Introducing new feature
          <span className="-mr-8 ml-8 rounded-full bg-white/10 px-8 py-2">
            <span className="-rotate-90">↓</span>
          </span>
        </NoScrollLink>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, translateY: '-1rem' }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1, ease: EASING.ease },
        }}
        className="my-24 text-center"
      >
        Gradients are a better
        <br className="hidden tablet:block" />
        <span className="tablet:hidden"> </span>
        for deep thoughts
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: '-1rem' }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.4, duration: 1.2, ease: EASING.ease },
        }}
        className="text-center"
      >
        Meet the new standard for paragraph text.
        <br />
        Streamline ideating, planning, and building.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: '-1rem' }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.8, duration: 1.2, ease: EASING.ease },
        }}
      >
        <Button className="mt-48 bg-gradient-to-r from-indigo-600 to-violet-600">
          Get started
          <ChevronRightIcon className="ml-8 h-16 w-16" />
        </Button>
      </motion.div>
      <HeroImage />
    </section>
  )
}

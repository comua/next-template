import React from 'react'

import { Button } from '@/components/button/Button'

import { FeatureCard } from './FeatureCard'

export const FeaturesSection = () => {
  return (
    <section className="radial-gradient z-10 flex w-full flex-col items-center">
      <div className="px-page">
        <h2 className="text-center">
          Unlike any template
          <br />
          you&apos;ve used before
        </h2>
        <p className="mt-16 max-w-[68rem] text-center">
          Designed to the last pixel and engineered with unforgiving precision, this template
          combines UI elegance with world-class performance.
        </p>
      </div>

      <div className="hide-scrollbar mt-48 flex w-full snap-x snap-mandatory gap-12 overflow-auto px-page tablet:grid tablet:max-w-content tablet:grid-cols-6 tablet:gap-24">
        <FeatureCard isLong>
          <div className="border-gradient animate-gradient aspect-square w-full rounded tablet:aspect-[3/1]" />
          <div className="mask-fade-x hide-scrollbar my-24 hidden max-w-full gap-8 overflow-auto tablet:flex">
            {[...Array(17)].map((_, index) => (
              <Button
                key={`key-option-${index}`}
                className="flex h-auto items-center justify-center whitespace-nowrap border border-white/10 bg-white/10 px-12 py-4 text-12 transition-colors hover:bg-white/20"
              >
                <span className="-ml-8 mr-8 rounded-full bg-white/10 px-8 py-2">{index + 1}</span>
                <span>Create new object</span>
              </Button>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center">Built for your keyboard</h3>
            <p className="mt-16 text-center text-16 tablet:max-w-2xl">
              Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally
              everything.
            </p>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="border-gradient animate-gradient aspect-square w-full rounded" />
          <div className="mt-24 flex flex-col items-center">
            <h3 className="text-center">Breathtakingly fast</h3>
            <p className="mt-16 text-center text-16">
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="border-gradient animate-gradient aspect-square w-full rounded" />
          <div className="mt-24 flex flex-col items-center">
            <h3 className="text-center">Designed for modern software teams</h3>
            <p className="mt-16 text-center text-16">
              Comes with built-in workflows that create focus and routine.
            </p>
          </div>
        </FeatureCard>
        <FeatureCard isLong>
          <div className="flex flex-col items-center">
            <h3 className="text-center">Meet your command line</h3>
            <p className="mt-16 mb-24 text-center text-16 tablet:max-w-2xl">
              Complete any action in seconds with the global command menu.
            </p>
          </div>
          <div className="border-gradient animate-gradient aspect-[2/1] w-full rounded" />
        </FeatureCard>
      </div>

      <div className="mt-48"></div>
    </section>
  )
}

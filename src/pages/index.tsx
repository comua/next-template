import { AnimatePresence, useScroll } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'

import { NoiseFilter } from '@/components/icons/NoiseFilter'
import { Layout } from '@/components/layout/Layout'
import { Seo } from '@/components/seo/Seo'
import { CustomersSection } from '@/features/home/customers/CustomersSection'
import { FeaturesSection } from '@/features/home/features/FeaturesSection'
import { HeroSection } from '@/features/home/hero/HeroSection'
import clsxm from '@/lib/clsxm'

const Home: FC = () => {
  const gradientRef = useRef()
  const { scrollYProgress } = useScroll({
    target: gradientRef,
    offset: ['end end', 'start start'],
  })

  const [isGradientVisible, setIsGradientVisible] = useState(false)

  useEffect(() => {
    const unsubscribeScrollYProgress = scrollYProgress.on('change', (progress) => {
      if (progress > 0.5) {
        setIsGradientVisible(true)
      } else {
        setIsGradientVisible(false)
      }
    })

    return () => {
      unsubscribeScrollYProgress()
    }
  }, [])

  return (
    <Layout className="radial-gradient-t">
      <AnimatePresence>
        <main className="mt-64 flex w-full flex-col items-center">
          <Seo title="Home" description="Home page" />

          <HeroSection />
          <CustomersSection />
          <div className="radial-gradient-circle-t w-full max-w-content" />
          <FeaturesSection />

          <section className="radial-gradient flex w-full flex-col items-center from-[rgb(194,97,254)/0.01] to-transparent pb-[50rem]">
            <div className="mt-[-42rem] mb-[-50rem] w-full overflow-hidden py-[42rem]">
              <div
                ref={gradientRef}
                className={clsxm('conic-gradient-t w-full', {
                  'rotate-180 scale-[2] opacity-100': isGradientVisible,
                })}
              />
            </div>
            <div className="flex w-full flex-col items-center px-page">
              <h1
                className={clsxm('text-center transition-transform duration-[1s] ease-out', {
                  '-translate-y-[40%]': isGradientVisible,
                })}
              >
                Fancy gradients
                <br className="hidden tablet:block" />
                <span className="tablet:hidden"> </span>you&apos;ll enjoy using
              </h1>
              <div className="border-gradient -mt-24 aspect-[3/1] w-full max-w-[77.7rem] rounded-sm bg-gradient-to-b from-white/20 to-white/0 backdrop-blur-[6px]" />
            </div>
            <h3 className="mt-64 max-w-5xl px-page text-center font-book leading-tight tablet:text-32">
              Create tasks in seconds, discuss issues in context, and breeze through your work in
              views tailored to you and your team.
            </h3>
          </section>

          <span className="absolute -m-1 h-1 w-1 overflow-hidden whitespace-nowrap border-0 p-0">
            <NoiseFilter />
          </span>
        </main>
      </AnimatePresence>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Home

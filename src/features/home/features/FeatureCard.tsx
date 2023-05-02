import React, { FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

interface FeatureCardProps {
  className?: string
  isLong?: boolean
}

export const FeatureCard: FC<PropsWithChildren<FeatureCardProps>> = ({
  children,
  className,
  isLong,
}) => {
  return (
    <div
      className={clsxm(
        'border-gradient col-span-2 flex min-h-[32rem] min-w-full snap-center flex-col items-center justify-between rounded-xl bg-gradient-to-b from-white/0 to-white/5 p-32 tablet:min-w-0 tablet:p-48',
        { 'col-span-4': isLong },
        className
      )}
    >
      {children}
    </div>
  )
}

import { FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

interface LayoutProps {
  className?: string
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, className }) => {
  return (
    <div className={clsxm('relative flex min-h-screen flex-col items-center pt-header', className)}>
      {children}
    </div>
  )
}

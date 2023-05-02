import React from 'react'

import clsxm from '@/lib/clsxm'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  intent?: string
}

// TODO: cta, utility, link
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          'flex h-48 items-center justify-center rounded-full px-24 text-16 font-medium',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

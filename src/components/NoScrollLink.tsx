import Link, { LinkProps } from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface NoScrollLinkProps extends LinkProps {
  className?: string
}

export const NoScrollLink: FC<PropsWithChildren<NoScrollLinkProps>> = ({
  children,
  href,
  passHref,
  className,
  ...rest
}) => (
  <Link href={href} passHref={passHref} scroll={false} className={className} {...rest}>
    {children}
  </Link>
)

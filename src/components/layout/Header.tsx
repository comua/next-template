import { StarIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { FC } from 'react'

import clsxm from '@/lib/clsxm'

import { Button } from '../button/Button'
import { NoScrollLink } from '../NoScrollLink'

const ROUTES = [
  { label: 'Features', path: '/' },
  { label: 'Method', path: '/' },
  { label: 'Customers', path: '/' },
  { label: 'Changelog', path: '/' },
  { label: 'Integrations', path: '/' },
  { label: 'Pricing', path: '/' },
]

export const Header: FC = () => {
  const router = useRouter()

  return (
    <header className="fixed z-50 flex h-header w-full items-center justify-center px-page backdrop-blur ">
      <div className="flex h-full w-full max-w-content items-center justify-between border-b border-white/10 font-medium transition-colors duration-xl ease-in-out-expo">
        <nav className="flex h-full items-center">
          <NoScrollLink
            href="/"
            className="flex h-full items-center text-16 font-semibold tracking-tight"
          >
            <StarIcon className="mr-4 h-16 w-16" />
            Template
          </NoScrollLink>
          <ul className="hidden h-full items-center tablet:flex">
            {ROUTES.map((route) => {
              return (
                <li
                  key={route.path}
                  className={clsxm(
                    'ml-24 flex h-full items-center opacity-50 transition-opacity last:mr-0 hover:opacity-100 focus:opacity-100',
                    { 'opacity-100': route.path === router.asPath }
                  )}
                >
                  <NoScrollLink href={route.path} shallow className="flex h-full items-center">
                    {route.label}
                  </NoScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <div>
          <ul className="flex items-center">
            <NoScrollLink href="/login" className="mr-24">
              Log in
            </NoScrollLink>
            <NoScrollLink href="/signup">
              <Button className="h-32 bg-gradient-to-r from-indigo-600 to-violet-600 p-16 text-14">
                Sign up
              </Button>
            </NoScrollLink>
          </ul>
        </div>
      </div>
    </header>
  )
}

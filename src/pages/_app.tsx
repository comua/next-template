import '../css/app.css'

import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'

import { AppReveal } from '../components/AppReveal'
import { Layout } from '../components/Layout'
import { DefaultMeta } from '../components/seo/DefaultMeta'
import { IsAppReadyProvider } from '../context/isAppReady'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Wait for font to load
})

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  return (
    <div className={`relative flex font-body ${inter.variable}`}>
      <IsAppReadyProvider>
        <DefaultMeta canonical={url} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AppReveal />
      </IsAppReadyProvider>
    </div>
  )
}

export default App

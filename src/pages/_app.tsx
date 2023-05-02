import '@/styles/app.css'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { PageTransition } from '@/components/animation/PageTransition'
import { Header } from '@/components/layout/Header'
import { DefaultMeta } from '@/components/seo/DefaultMeta'
import { INTER } from '@/lib/fonts'

const queryClient = new QueryClient({
  defaultOptions: {},
})

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  return (
    <div className={`flex w-full flex-col font-primary ${INTER.variable}`}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultMeta canonical={url} />
          <Header />
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

export default App

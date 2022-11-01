import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'

// import RootContext from 'lib/context/RootContext'
import theme from 'styles/chakraTheme'
// import '@fontsource/open-sans/600.css'
// import '@fontsource/amiko/700.css'

type Page<P = {}> = NextPage<P> & {
  getLayout?: any
}

type Props = AppProps & {
  Component: Page
}

type props = {
  children: React.ReactNode
}
const EmptyLayout: React.FC<props> = ({ children }) => {
  return <>{children}</>
}

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.getLayout || EmptyLayout
  const colorModeManager = typeof pageProps.cookies === 'string' ? cookieStorageManagerSSR(pageProps.cookies) : localStorageManager
  return (
    // <RootContext layout={Component.getLayout}>
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    // </RootContext>
  )
}
export default MyApp

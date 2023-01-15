import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {CustomContextProvider} from "../contexts/customContext";
import { useState } from 'react';
import { FC, ReactNode, useEffect } from 'react'
// import type { AppProps } from 'next/app'
// import { ManagedUIContext } from '@components/ui/context'


const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  
  return (
    <CustomContextProvider>
  <Component {...pageProps} />
  </CustomContextProvider>
  )
}

// export default MyApp

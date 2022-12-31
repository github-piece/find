import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/burger.css'

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <Head>
        <title>Find</title>
        <meta
          name='description'
          content='Find is the next generation of search, discovery, and exploration on the internet.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider themes={['light', 'dark']}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

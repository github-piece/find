import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div>
      <Head>
        <title>findlabs.org</title>
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider themes={['light', 'dark']}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}

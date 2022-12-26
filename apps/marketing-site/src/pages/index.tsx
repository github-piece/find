import ComingSoon from '../components/ComingSoon';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import React, { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const Home = dynamic(() => import('../components/Home'), {
  ssr: false
});

const Page: NextPageWithLayout = () => {
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist == true)
    return (<ComingSoon />);
  else
    return (<Home />);
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
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
          {page}
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Page;

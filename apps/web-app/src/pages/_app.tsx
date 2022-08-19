// src/pages/_app.tsx
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import PageWithLayoutType from "../types/pageWithLayout";
import BasicLayout from "../layouts/Basic";
import AuthLayout from "../layouts/Auth";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type AppLayoutProps = {
  Component: PageWithLayoutType,
  pageProps: any
}

const layouts = {
  Basic: BasicLayout,
  Auth: AuthLayout
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppLayoutProps) => {

  const Layout = layouts[Component.layout || "Basic"]
  const [init, setInit] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [])

  if (!init) return <></>

  return (
    <SessionProvider session={session}>
      <ThemeProvider themes={['light', 'dark']}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);

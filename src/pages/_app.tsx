import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local';
import { initGA4 } from '@/components/GoogleAnalytics/GoogleAnalytics';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const myFont = localFont({
  src: "./Gilroy-ExtraBold.woff2",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA4();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}

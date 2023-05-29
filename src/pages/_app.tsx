import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local';

const myFont = localFont({
  src: "./Gilroy-ExtraBold.woff2",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}


import type { AppProps } from 'next/app'
// import '@/styles/style.css' it works
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

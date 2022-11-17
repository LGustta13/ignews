import type { AppProps } from 'next/app';
import { Header } from '../components/Header';

// Toda importação de estilização globla deve ser feita em _app
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;

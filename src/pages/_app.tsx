import type { AppProps } from 'next/app';
import { Header } from '../components/Header';

// Toda importação de estilização global deve ser feita em _app
// Qualquer elemento que precise ser compartilhado ou persistido entre várias páginas vai em _app
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

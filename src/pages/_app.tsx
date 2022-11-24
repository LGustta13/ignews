import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider } from 'next-auth/react';

// Toda importação de estilização global deve ser feita em _app
// Qualquer elemento que precise ser compartilhado ou persistido entre várias páginas vai em _app
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Significa que qualquer reload será retornado as informações da session pelo pageProps
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;

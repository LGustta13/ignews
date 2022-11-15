import type { AppProps } from 'next/app';

// Toda importação de estilização globla deve ser feita em _app
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

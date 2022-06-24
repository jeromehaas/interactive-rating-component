import 'styles/central.scss'
import { AppProvider } from 'context/app-provider';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    
    <AppProvider>
      <Head>
        <title>Interactive Rating Component</title>
        <meta name="description" content="A challenge from FrontendMentor" />
        <link rel="icon" href="/assets/favicons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
    ) 
}

export default MyApp

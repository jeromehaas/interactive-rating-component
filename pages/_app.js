import 'styles/central.scss'
import { AppProvider } from 'context/app-provider';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    ) 
}

export default MyApp

import { Thanks } from 'components/05-pages/thanks/thanks';
import { AppProvider } from 'context/app-provider';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
        <Thanks />
    </div>
  )
}

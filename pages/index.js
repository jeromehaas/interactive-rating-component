import { Rating } from 'components/05-pages/rating/rating';
import { AppProvider } from 'context/app-provider';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
        <Rating />
    </div>
  )
}

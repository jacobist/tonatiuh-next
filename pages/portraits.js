import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../components/slideshow/slideshow';

export default function Portraits() {
    return (
      <>
        <Head>
          <title>Portraits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Slideshow/>
      </>
    );
}
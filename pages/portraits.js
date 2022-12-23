import Head from 'next/head'
import Link from 'next/link'

export default function Portraits() {
    return (
      <>
        <Head>
          <title>Portraits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1> Portraits page</h1>
        <Link href="/">Back to home</Link>
      </>
    );
}
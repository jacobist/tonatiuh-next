import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../components/slideshow/slideshow';
import style from '../styles/Portraits.module.css'
import filler from '../public/imageFiller.png'
import fillerAlt from '../public/imageFillerVertical.png'

export default function Portraits() {
    return (
      <>
        <Head>
          <title>Portraits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Slideshow
          slides={[
            filler,
            fillerAlt,
            filler,
            fillerAlt,
            filler,
            fillerAlt]}
        />
        <main className={style.main}>
            <section>

            </section>
        </main>
      </>
    );
}
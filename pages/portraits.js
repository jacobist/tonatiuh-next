import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../components/slideshow/slideshow';
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
      </>
    );
}
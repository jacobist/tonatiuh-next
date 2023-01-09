import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import generic from '../styles/generic.module.css'
import { FaPhoneAlt, FaCamera, FaPhotoVideo } from "react-icons/fa";
import { IoPeopleSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tonatiuh Photography</title>
        <meta
          name="description"
          content="Professional Photography by Hermes Tonatiuh Padilla"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <section className={style.section}>
          <div className={style.segment}>
            <p className={generic.textsm}>Tonatiuh Photography</p>
            <h2 className={generic.textXL}>
              Creating breathtaking images for you
            </h2>
            <p className={generic.textLg}>
              And amazing memories along the way!
            </p>
            <Link className={generic.cta} href="/booking">
              Book A Session
            </Link>
          </div>
          <div className={style.segment}>
            <Image
              src="/imageFillerVertical.png"
              alt="filler"
              width={550}
              height={700}
              priority
            />
          </div>
        </section>
        <section className={style.sectionInvert}>
          <div className={style.segment}>
            <h2 className={generic.text2XL}>
              In The Search for The Perfect Light
            </h2>
            <p className={generic.textsm}>
              Santiago is a professional photographer based in NYC and DC that
              specializes in both a flexible and creative style based on the
              needs of his clientele. With every picture, he provides his
              detailed perspective into every pixel. His love for travel and
              exploration causes his photography to be ever-changing,
              ever-growing and ever-learning.
            </p>
            <p className={generic.textsm}>
              His passion is to help create images that are unique to the client
              that they can be proud of. When he is not searching for The
              Perfect Light, he is helping clients find their creative visions.
            </p>
            <p className={generic.textsm}>
              Santiago’s hope in every image he captures is to encourage an
              unique expression through the visual arts.
            </p>
          </div>
          <div className={style.segment}>
            <Image
              src="/imageFillerVertical.png"
              alt="filler"
              width={420}
              height={550}
              priority
            />
          </div>
        </section>
        <section className={style.sectionContrast}>
          <div className={style.segment}>
            <h2 className={generic.text2XL}>The Artist&apos;s Collection</h2>
            <p className={generic.textsm}>
              The Artist&apos;s Collection is Santiago Leon Photography&apos;s
              Top Experience.
            </p>
            <p className={generic.textsm}>
              Dive into maximum expression of creativity where Santiago will
              guide you through the fascinating process of creating artistic
              imagery.
            </p>
            <Link className={generic.ctaContrast} href="/booking">
              Learn More
            </Link>
          </div>
          <div className={style.segment}>
            <Image
              src="/imageFillerVertical.png"
              alt="filler"
              width={420}
              height={420}
              priority
            />
          </div>
        </section>

        <section className={style.deck}>
          <h2>How does it work?</h2>
          <div className={style.cards}>
            <div className={style.card}>
                <IconContext.Provider value={{className:`${style.icon}`}}>
              <FaPhoneAlt/>
                </IconContext.Provider>
              <h3 className={generic.cardHead}>Phone Call</h3>
              <p className={generic.cardBody}>
                The beginning of the story. We will discuss what you are looking
                for, we book your session and lock in your session date.
              </p>
            </div>
            <div className={style.card}>
                <IconContext.Provider value={{className:`${style.icon}`}}>
              <IoPeopleSharp />
                </IconContext.Provider>
              <h3 className={generic.cardHead}>In-Person Consultation</h3>
              <p className={generic.cardBody}>
                In your house or your favorite coffee shop, we will go over all
                the details to make your shoot the best it can be.
              </p>
            </div>
            <div className={style.card}>
                <IconContext.Provider value={{className:`${style.icon}`}}>
              <FaCamera />
                </IconContext.Provider>
              <h3 SclassName={generic.cardHead}>Photo Shoot Day</h3>
              <p className={generic.cardBody}>
                The day is here! We will meet in location or at the studio, you
                will have makeup artist and hair stylist at your service.
              </p>
            </div>
            <div className={style.card}>
                <IconContext.Provider value={{className:`${style.icon}`}}>
              <FaPhotoVideo />
                </IconContext.Provider>
              <h3 className={generic.cardHead}>Ordering Session</h3>
              <p className={generic.cardBody}>
                Last part! we pick your favorite images and pick the products
                for your home. (Disclaimer: You will love them all!)
              </p>
            </div>
          </div>
          <Link className={generic.cta} href="/booking">
            Learn More
          </Link>
        </section>

        <section className={style.section}>
          <div className={style.background}>
            <Image
              src="/imageFiller.png"
              alt="filler"
              width={1100}
              height={280}
              priority
            />
            <Link className={`${generic.cta} ${style.overlay}`} href="/booking">
              Book A Session
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../components/slideshow/slideshow'
import style from '../styles/Portraits.module.css'
import generic from '../styles/generic.module.css'
import filler from '../public/imageFiller.png'
import fillerAlt from '../public/imageFillerVertical.png'
import { FaPhoneAlt, FaCamera, FaPhotoVideo } from "react-icons/fa"
import { IoPeopleSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons'

export default function Portraits() {
    return (
      <>
        <Head>
          <title>Portraits</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Slideshow
          slides={[filler, fillerAlt, filler, fillerAlt, filler, fillerAlt]}
        />
        <main className={style.main}>
          <section className={style.section}>

          </section>
          <section className={style.deck}>
            <h2 className={generic.textXL}>How does it work?</h2>
            <div className={style.cards}>
              <div className={style.card}>
                <IconContext.Provider value={{ className: `${style.icon}` }}>
                  <FaPhoneAlt />
                </IconContext.Provider>
                <h3>Phone Call</h3>
                <p>
                  The beginning of the story. We will discuss what you are
                  looking for, we book your session and lock in your session
                  date.
                </p>
              </div>
              <div className={style.card}>
                <IconContext.Provider value={{ className: `${style.icon}` }}>
                  <IoPeopleSharp />
                </IconContext.Provider>
                <h3>In-Person Consultation</h3>
                <p>
                  In your house or your favorite coffee shop, we will go over
                  all the details to make your shoot the best it can be.
                </p>
              </div>
              <div className={style.card}>
                <IconContext.Provider value={{ className: `${style.icon}` }}>
                  <FaCamera />
                </IconContext.Provider>
                <h3>Photo Shoot Day</h3>
                <p>
                  The day is here! We will meet in location or at the studio,
                  you will have makeup artist and hair stylist at your service.
                </p>
              </div>
              <div className={style.card}>
                <IconContext.Provider value={{ className: `${style.icon}` }}>
                  <FaPhotoVideo />
                </IconContext.Provider>
                <h3>Ordering Session</h3>
                <p>
                  Last part! we pick your favorite images and pick the products
                  for your home. (Disclaimer: You will love them all!)
                </p>
              </div>
            </div>
            <Link className={generic.cta} href="/booking">
              Book your Session
            </Link>
          </section>
        </main>
      </>
    );
}
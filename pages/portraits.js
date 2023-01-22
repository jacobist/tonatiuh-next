import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
        <main className={generic.main}>
          <section className={generic.section}>
            <div className={generic.segment}>
              <Image
                src="/imageFillerVertical.png"
                alt="filler"
                width={550}
                height={650}
              />
            </div>
            <div className={generic.segment}>
              <h2 className={generic.textXL}>
                Portraits that tell your story.
              </h2>
              <p className={generic.textM}>
                Unforgettable photography experience that reflects your unique
                energy on every image.
              </p>
              <Link className={generic.cta} href="/booking">
                Book A Session
              </Link>
            </div>
          </section>
          <section className={style.banner}>
            <p>
              Portraits that bring your true essence in them, your personality
              and your energy. Portraits that are YOURS.
            </p>
          </section>
          <section className={generic.deck}>
            <h2 className={generic.textXL}>How does it work?</h2>
            <div className={generic.cards}>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <FaPhoneAlt />
                </IconContext.Provider>
                <h3>Phone Call</h3>
                <p>
                  The beginning of the story. We will discuss what you are
                  looking for, we book your session and lock in your session
                  date.
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <IoPeopleSharp />
                </IconContext.Provider>
                <h3>In-Person Consultation</h3>
                <p>
                  In your house or your favorite coffee shop, we will go over
                  all the details to make your shoot the best it can be.
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <FaCamera />
                </IconContext.Provider>
                <h3>Photo Shoot Day</h3>
                <p>
                  The day is here! We will meet in location or at the studio,
                  you will have makeup artist and hair stylist at your service.
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
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
          <section className={generic.section}>
            <div className={style.gallery}>
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
              <Image src={fillerAlt} alt="" width={300} height={400} />
            </div>
          </section>
          <section className={generic.sectionContrast}>
            <div className={generic.segment}>
              <h2 className={generic.text2XL}>Model Test Shoot</h2>
              <p className={generic.textM}>
                Starting in the modeling world requires a great portfolio as a
                head start. Here I can help you to have your best look and be
                ready to start booking jobs.
              </p>
              <Link className={generic.ctaContrast} href="/booking">
                Book A Session
              </Link>
            </div>
            <div className={generic.segment}>
              <Image
                src="/imageFillerVertical.png"
                alt="filler"
                width={550}
                height={450}
              />
            </div>
          </section>
          <section className={generic.section}>
            <div className={generic.segment}>
              <p className={generic.textM}>
                New York City and Washington DC Photography
              </p>
              <h2 className={generic.textXL}>
                Photography in these two beautiful cities has never been better.
              </h2>
              <p className={generic.textsm}>
                All services are now offered in NYC and DC.
              </p>
              <p className={generic.textsm}>
                Suitcase and camera ready for any place within the US. Contact
                us for more information.
              </p>
              <Link className={generic.cta} href="/booking">
                Book A Session
              </Link>
            </div>
            <div className={generic.segment}>
              <Image
                src="/imageFillerVertical.png"
                alt="filler"
                width={550}
                height={550}
              />
            </div>
          </section>
        </main>
      </>
    );
}
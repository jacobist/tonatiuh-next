import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/form/contact'
import style from '../styles/Home.module.css'
import generic from '../styles/generic.module.css'
import { FaPhoneAlt, FaCamera, FaPhotoVideo } from "react-icons/fa";
import { IoPeopleSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import filler from "../public/imageFiller.png";


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
      <main className={generic.main}>
        <section className={generic.section}>
          <div className={generic.segment}>
            <p className={generic.textsm}>Tonatiuh Photography</p>
            <h2 className={generic.textXL}>
              Creating breathtaking images for you
            </h2>
            <p className={generic.textM}>And amazing memories along the way!</p>
            <Link className={generic.cta} href="/booking">
              Book A Session
            </Link>
          </div>
          <div className={generic.segment}>
            <Image className={generic.imageL} src={filler} alt="filler" />
          </div>
        </section>
        <section className={generic.sectionInvert}>
          <div className={generic.segment}>
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
              Santiago&apos;s hope in every image he captures is to encourage an
              unique expression through the visual arts.
            </p>
          </div>
          <div className={generic.segment}>
            <Image className={generic.imageL} src={filler} alt="filler" />
          </div>
        </section>
        <section className={generic.sectionContrast}>
          <div className={generic.segment}>
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
          <div className={generic.segment}>
            <Image className={generic.imageM} src={filler} alt="filler" />
          </div>
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
                The beginning of the story. We will discuss what you are looking
                for, we book your session and lock in your session date.
              </p>
            </div>
            <div className={generic.card}>
              <IconContext.Provider value={{ className: `${generic.icon}` }}>
                <IoPeopleSharp />
              </IconContext.Provider>
              <h3>In-Person Consultation</h3>
              <p>
                In your house or your favorite coffee shop, we will go over all
                the details to make your shoot the best it can be.
              </p>
            </div>
            <div className={generic.card}>
              <IconContext.Provider value={{ className: `${generic.icon}` }}>
                <FaCamera />
              </IconContext.Provider>
              <h3>Photo Shoot Day</h3>
              <p>
                The day is here! We will meet in location or at the studio, you
                will have makeup artist and hair stylist at your service.
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
        <section className={generic.deck}>
          <h2 className={generic.textXL}>Featured Services</h2>
          <div className={generic.cards}>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>Portraiture</h3>
              <p>
                Whether you need professional headshots, senior portraits,
                portraits for fun or anything in between. We will get the best
                light for you and capture your personality.
              </p>
            </div>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>The Artist’s Collection</h3>
              <p>
                It all begins with an idea. We make it a reality. The Artist’s
                Collection takes photography to it’s maximum artistic potential
                and creates the most larger-than-life photographs for you. The
                Artist’s Collection includes Under The Stars, Submerged, The
                Conceptual Series and Destination Photography but does not stop
                there, the limit is your imagination.
              </p>
            </div>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>Commercial</h3>
              <p>
                You business requires your attention in all aspects of it. Here
                we take the weight of marketing and creative branding out of
                your back. We produce spectacular content for your brand.
              </p>
            </div>
          </div>
          <Link className={generic.cta} href="/booking">
            Book your Session
          </Link>
        </section>

        <Contact home={true} />
        <section className={generic.section}>
          <div className={style.overlay}>
            <Link className={`${generic.cta} ${style.background}`} href="/booking">
              INSTAGRAM
            </Link>
            <Image className={style.imageInsta} src={filler} alt="filler" />
          </div>
        </section>
      </main>
    </>
  );
}

import Image from 'next/image'
import generic from '../styles/generic.module.css'
import fillerAlt from '../public/imageFillerVertical.png'

export default function Couples() {
  return (
    <>
      <main className={generic.main}>
        <section className={generic.section}>
          <div className={generic.gallery}>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
            <Image className={generic.frame}src={fillerAlt} alt=""/>
          </div>
        </section>
      </main>
    </>
  );
}

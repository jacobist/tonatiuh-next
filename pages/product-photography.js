import Image from "next/image";
import style from "../styles/Couples.module.css";
import generic from "../styles/generic.module.css";
import filler from "../public/imageFiller.png";
import fillerAlt from "../public/imageFillerVertical.png";


export default function Collection() {
  return (
    <>
      <main className={generic.main}>
        <section className={style.section}>
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
      </main>
    </>
  );
}

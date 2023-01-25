import Image from "next/image";
import generic from "../styles/generic.module.css";
import fillerAlt from "../public/imageFillerVertical.png";


export default function Collection() {
  return (
    <>
      <main className={generic.main}>
        <section className={generic.section}>
          <div className={generic.gallery}>
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

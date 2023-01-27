import { useState, useRef } from 'react'
import Image from 'next/image';
import HandleFormSubmit from './Submit'
import style from './contact.module.css'
import generic from "../../styles/generic.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Contact ({home=false}) {
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  function handleFormSubmit(e) {
    setSent(true);
    console.log(e + "handler");
    e.preventDefault();
    HandleFormSubmit(e);
  }

  return (
    <main className={style.main}>
      <div className={style.contact}>
        <h1 className={`${generic.textXL} ${style.heading}`}>Get in touch</h1>
        <div className={style.info}>
          <div className={style.info}>
            <h3>Let&apos;s create!</h3>
            <p>Tonatiuh@gmail.com</p>
            <br />
            <p>(661) 406-1519</p>
          </div>
          { !home ? <Image src="/imageFiller.png" alt="filler" width="250" height="250" /> : '' }
        </div>
        <div className={style.links}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
      <form
        className={style.form}
        ref={form}
        action=""
        name="google-sheet"
        onSubmit={handleFormSubmit}
      >
        <div className={style.input}>
          <label htmlFor="name">Name</label>
          <input className={style.field} type="text" id="name" name="name" />
        </div>
        <div className={style.input}>
          <label htmlFor="company">Company</label>
          <input
            className={style.field}
            type="text"
            id="company"
            name="company"
            placeholder=" optional"
          />
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input className={style.field} type="email" id="email" name="email" />
        </div>
        <div className={style.input}>
          <label htmlFor="phone">Phone</label>
          <input
            className={style.field}
            type="tel"
            id="phone"
            name="phone"
            placeholder=" (000)000-0000"
          />
        </div>
        <fieldset className={style.fieldset}>
          <legend>
            <p>Services</p>
          </legend>
          <div>
            <input
              className={style.field}
              id="portraits"
              type="checkbox"
              name="service"
              value="portraits"
            />
            <label htmlFor="portraits"> Portraits</label>
          </div>
          <div>
            <input
              id="couples"
              type="checkbox"
              name="service"
              value="couples"
            />
            <label htmlFor="couples"> Couples</label>
          </div>
          <div>
            <input
              id="productPhotography"
              type="checkbox"
              name="service"
              value="productPhotography"
            />
            <label htmlFor="productPhotography"> Product Photography</label>
          </div>
        </fieldset>
        <div className={style.input}>
          <label htmlFor="message">Message</label>
          <textarea
            className={style.field}
            maxLength="400"
            id="message"
            name="message"
          />
        </div>
        <button className={generic.cta}>{sent ? "Sent!" : "Send Message"}</button>
      </form>
    </main>
  );
}

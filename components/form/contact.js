import { useState, useRef } from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import HandleFormSubmit from './Submit'


export default function Contact () {
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  function handleFormSubmit(e) {
    setSent(true);
    console.log(e + "handler");
    e.preventDefault();
    HandleFormSubmit(e);
  }

  return (
    <main>
      <div>
        <h1>Get in touch</h1>
        <h3>Let&apos;s create!</h3>
        <p>Tonatiuh@gmail.com</p>
        <Image src="/imageFiller.png" alt="filler" width="200" height="200" />
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
      <form
        ref={form}
        action=""
        name="google-sheet"
        onSubmit={handleFormSubmit}
      >
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="name" />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="optional" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name="email" placeholder="e-mail" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id='phone' name="phone" placeholder="(000)000-0000" />
          </div>
            <label htmlFor="message">Message</label>
          <textarea
            maxLength="300"
            id="message"
            name="message"
            placeholder="messsage"
          />
          <fieldset>
            <legend>
              <p>Services</p>
            </legend>
            <div>
              <input
                id="portraits"
                type="checkbox"
                name="service"
                value="portraits"
              />
              <label htmlFor="portraits">Portraits</label>
            </div>
            <div>
              <input
                id="couples"
                type="checkbox"
                name="service"
                value="couples"
              />
              <label htmlFor="couples">Couples</label>
            </div>
            <div>
              <input
                id="productPhotography"
                type="checkbox"
                name="service"
                value="productPhotography"
              />
              <label htmlFor="productPhotography">
                Product Photography
              </label>
            </div>
          </fieldset>
          <button >
            {sent ? "Sent!" : "Send Message"}
          </button>
        </div>
      </form>
    </main>
  )
}

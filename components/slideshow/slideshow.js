import style from './slideshow.module.css'
import React, {useState} from 'react'
import Image from 'next/image'

export default function Slideshow({slides}) {
  return (
    <div className={style.slider}>
      <div className={style.show}>
        {slides.map((image, index) => (
          <div className={style.slide} key={index}>
            <Image src={image} alt="" fill/>
          </div>
        ))}
      </div>
    </div>
  );
}
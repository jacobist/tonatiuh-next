import style from './slideshow.module.css'
import React, { useState, useEffect} from 'react'
import Image from 'next/image'

export default function Slideshow({album}) {
  const [ slides, setSlides] = useState(album)

  const slide = () => {
    //creates temp array to amnipulate
    let arr = [...slides]
    //rearrange array
    let item = arr.shift()
    arr.push(item)
    //set new array
    setSlides(arr)
  }


  return (
    <div className={style.slider}>
      <div className={style.show}>
        {slides.map((image, index) => (
          <div className={style.slide} key={index}>
            <Image src={image} alt="" fill priority/>
          </div>
        ))}
        <button onClick={slide}> shift </button>
      </div>
    </div>
  );
}
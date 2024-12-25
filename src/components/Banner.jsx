import React from 'react'
import { banner } from "../assets/index";

function Banner() {
  return (
    <div className='w-full h-96'>
        <img src={banner} alt="banner" className='object-contain' />
    </div>
  )
}

export default Banner;

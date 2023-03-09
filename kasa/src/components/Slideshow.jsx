import React, { useState } from 'react'
import arrowRight from "../assets/arrow_right.svg"
import arrowLeft from "../assets/arrow_left.svg"

function Slideshow({children}) {

    const [curentPicture, setCurentPicture] = useState(0)

    const pictures = children.props.src
    console.log(pictures.length);

  return (
    <div>
        <img src={pictures[curentPicture]} alt='' />
        <button onClick={() => setCurentPicture(curentPicture !== 0 ? curentPicture - 1 : curentPicture + (pictures.length - 1))}>
            <img src={arrowLeft} alt="arrow left" /> 
        </button>
        <button onClick={() => setCurentPicture(curentPicture !== pictures.length - 1 ? curentPicture + 1 : curentPicture - (pictures.length - 1))}>
            <img src={arrowRight} alt="arrow right" /> 
        </button>
        <span>{curentPicture}/{pictures.length - 1}</span>
    </div>
  )
}

export default Slideshow

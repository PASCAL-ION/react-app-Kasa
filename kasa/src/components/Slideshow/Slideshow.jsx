import React, { useState } from 'react'
import arrowRight from "../../assets/arrow_right.svg"
import arrowLeft from "../../assets/arrow_left.svg"
import style from './Slideshow.module.scss'

function Slideshow({children}) {

    const [curentPicture, setCurentPicture] = useState(0)

    const pictures = children.props.src

  return (
    <div className={style.container}>
        <img className={style.image} src={pictures[curentPicture]} alt='' />
        <button className={style.leftBtn} onClick={() => setCurentPicture(curentPicture !== 0 ? curentPicture - 1 : curentPicture + (pictures.length - 1))}>
            <img src={arrowLeft} alt="arrow left" /> 
        </button>
        <button className={style.rightBtn} onClick={() => setCurentPicture(curentPicture !== pictures.length - 1 ? curentPicture + 1 : curentPicture - (pictures.length - 1))}>
            <img src={arrowRight} alt="arrow right" /> 
        </button>
        <span className={style.slideCouner}>{curentPicture}/{pictures.length - 1}</span>
    </div>
  )
}

export default Slideshow

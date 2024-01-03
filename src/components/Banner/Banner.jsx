import React from 'react'
import style from './Banner.module.scss'

function Banner({img}){
    return (<React.Fragment>
    <div className={style.container}>
        <div className={style.img} style={{background: `url(${img}) no-repeat center / cover`}}/>
        <p className={style.text}>Chez vous, <br /> partout et ailleurs </p>
    </div>
    </React.Fragment>
    )
}

export default Banner
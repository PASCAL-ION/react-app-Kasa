import React from 'react'
import '../style/Banner.scss'

function Banner(){
    return (<React.Fragment>
    <div className='banner'>
        <div alt="" className='banner__bannerImg'/>
        <p className='banner__bannerText'>Chez vous, <br/> partout et ailleurs </p>
    </div>
    </React.Fragment>
    )
}

export default Banner
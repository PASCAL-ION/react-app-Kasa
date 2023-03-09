import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import '../style/HousingDetails.scss'
import Page404 from './Page404'

function HousingDetails({ data }) {

    const params = useParams()
    const housingFound = data.find(element => element.id === params.id)

    if (housingFound !== undefined) { //si un id est trouvé
        return (
            <>
            <div className='main'>
                <Slideshow>
                    <img src={housingFound.pictures} alt="" />
                </Slideshow>
                <div className='wrapp_title_profile_location'>
                    <div className='h1_profile'>
                        <h1>{housingFound.title}</h1>
                        <div className='profile'>
                            <p className='name'>{housingFound.host.name}</p>
                            <img className='photo' src={housingFound.host.picture} alt="host" />
                        </div>
                    </div>
                    <p className='location'>{housingFound.location}</p>
                </div>
            </div>
            </>
            
        )
      } else {
        return (
            <Page404 />
          )
      }
}

export default HousingDetails
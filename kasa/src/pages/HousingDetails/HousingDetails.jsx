import React from 'react'
import {useParams} from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import style from './HousingDetails.module.scss'
import Page404 from '../Page404/Page404'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import StarRating from '../../components/StarRating/StarRating'
import Collapse from '../../components/Collapse/Collapse'

function HousingDetails({ data }) {

    const params = useParams()
    const housingFound = data.find(element => element.id === params.id)

    if (housingFound !== undefined) { //si un id est trouvé
        return (
            <>
                <Navbar />
                <div className={style.main}>
                    <Slideshow>
                        <img src={housingFound.pictures} alt="" />
                    </Slideshow>
                    <div className={style.mainInfoContainer}>
                        <div className={style.title_location_tags}>
                            <h1 className={style.title}>{housingFound.title}</h1>
                            <p className={style.location}>{housingFound.location}</p>
                            <div className={style.tags}>
                                {housingFound.tags.map(tag => {
                                    return <span key={tag} className={style.item}>{tag}</span>
                                })}
                            </div>
                        </div>
                        <div className={style.profile_rating}>
                            <StarRating rating={ housingFound.rating }/>
                            <div className={style.profile}>
                                <p className={style.name}>{housingFound.host.name}</p>
                                <img className={style.photo} src={housingFound.host.picture} alt="host" />
                            </div>
                        </div>
                    </div>
                    <div className={style.collapses}>
                        <Collapse title="Description">
                            <p>{housingFound.description}</p>
                        </Collapse>
                        <Collapse title="Equipements">
                            <ul>
                                {housingFound.equipments.map(equipment => {
                                   return <li key={equipment}>{equipment}</li>
                                })}
                            </ul>
                        </Collapse>
                    </div>
                </div>
                <Footer />
            </>
            
        )
      } else {
        return (
            <Page404 />
          )
      }
}

export default HousingDetails
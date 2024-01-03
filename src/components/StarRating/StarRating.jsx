import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'
import style from './StarRating.module.scss'
import { useState, useEffect } from "react";

function StarRating({ rating }) {
  const [fullStars, setStars] = useState([]);
  const [emptyStars, setEmptyStars] = useState([])

  useEffect(() => {
    const numFullStars = rating;
    const numEmptyStars = 5 - rating
    const emptyStarsArray = []
    const fullStarsArray = [];
    for (let i = 0; i < numFullStars; i++) {
      fullStarsArray.push( <img key={i} className={style.star} src={fullStar} alt="full star" /> )
    }
    setStars(fullStarsArray);

    for (let i = 0; i < numEmptyStars; i++) {
        emptyStarsArray.push( <img key={i} className={style.star} src={emptyStar} alt="empty star" /> )
    }
    setEmptyStars(emptyStarsArray)
  }, [rating]); //en second param on declare un tableau de dépendances "[rating]" qui spécifie a react a quel moment il doit éxécuter a nouveau le composant. 
  //Ici c'est a chaque fois que rating est modifié

  return <div className={style.starsContainer}>{fullStars}{emptyStars}</div>;
}

export default StarRating

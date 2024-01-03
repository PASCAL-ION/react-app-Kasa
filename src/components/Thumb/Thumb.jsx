import { NavLink} from 'react-router-dom'
import style from './Thumb.module.scss'


function Thumb(props){

  return (
    <>
    {<div className={style.thumbsContainer}>
          {props.data.map(item => (
            <NavLink className={style.thumb} key={item.id} to={`details/${item.id}`}>
              {<img className={style.thumbImg} src={item.cover} alt="" />}
              {<p className={style.thumbTitle}>{item.title}</p>}
            </NavLink>
          ))}
      </div>}
    </>
  )
}

export default Thumb

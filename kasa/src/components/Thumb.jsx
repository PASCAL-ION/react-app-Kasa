/* import React, {useState, useEffect} from 'react' */
import { NavLink, /* useNavigate */ } from 'react-router-dom'
/* import { Navigate } from 'react-router-dom' */
import '../style/Thumb.scss'
import Banner from './Banner'


function Thumb(props){

  return (
    <>
    <Banner />
    <div className='thumbsContainer'>
          {props.data.map(item => (
            <NavLink key={item.id} to={`details/${item.id}`}>
              <div className='thumbsContainer__thumb' >
                <div className='thumbsContainer__thumb__cover'>
                  {<img src={item.cover} alt="" />}
                </div>
                {<p className='thumbsContainer__thumb__title'>{item.title}</p>}
              </div>
            </NavLink>
          ))}
      </div>
    </>
  )
}

export default Thumb

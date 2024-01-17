import style from './Navbar.module.scss'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return ( 
        <div className={style.container}>
            <img src={logo} alt='kasa logo' className={style.logo}></img>
            <nav className={style.nav}>
                <NavLink to="/react-app-Kasa" className={style.link}
                    style={({ isActive }) => ({ 
                        textDecoration: isActive ? 'underline' : 'none' })}
                >
                    Accueil
                </NavLink>
                <NavLink to="/about" className={style.link}
                    style={({ isActive }) => ({ 
                        textDecoration: isActive ? 'underline' : 'none' })}
                >
                    A Propos
                </NavLink>
            </nav>
        </div>
        )
}


export default Navbar
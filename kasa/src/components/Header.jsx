import '../style/Header.scss'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    return ( 
        <div className="wrapper">
            <img src={logo} alt='' className='logo'></img>
            <nav className="wrapper__nav">
                <NavLink to="/" className="wrapper__nav__link">Accueil</NavLink>
                <NavLink to="about" className="wrapper__nav__link">A Propos</NavLink>
            </nav>
        </div>
        )
}

export default Header
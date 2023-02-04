import '../style/Header.scss'
import logo from '../assets/logo.svg'

function Header() {
    return (<div className="wrapper">
        <img src={logo} alt='' className='logo'></img>
        <ul className="nav">
            <li>Accueil</li>
            <li>A Propos</li>
        </ul>
    </div>)
}

export default Header
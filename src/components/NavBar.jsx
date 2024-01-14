import { Link } from 'react-router-dom'
import logo from '../assets/desktop/logo.svg';
import hamLogo from '../assets/mobile/icon-hamburger.svg';
import { Boton } from './common/Boton';

import '../scss/components/navbar.scss';

export const NavBar = () => {

  const textoBoton = {
    txt1: 'Schedule a Call',
    txt2: 'Learn More'
  }

  return (
    <header className="hdr">
      <div className='hdr__wrapper'>
        <div className="hdr__logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav className="hdr__nav">
          <Link to= '/about'>about</Link>
          <Link to='/service'>service</Link>
          <Link to='/project'>project</Link>
          <Link> <Boton texto = {textoBoton.txt1}/> </Link>
        </nav>
        <div className="hdr__ham">
          <img src={hamLogo} alt="" />
        </div>
      </div>

      <div className="hero">
        <div className="hero__img"></div>
      </div>

    </header>
  )
}

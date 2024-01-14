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
        <div className="hero__text">
          <h1 className="hero__title">
            Branding &
            website design agency   
          </h1>
          <p className="hero__paragraph">
            We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <Boton texto={textoBoton.txt2}/>
        </div>
      </div>

    </header>
  )
}

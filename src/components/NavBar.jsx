import { Link } from 'react-router-dom'
import logo from '../assets/desktop/logo.svg';

export const NavBar = () => {
  return (
    <header className="hdr">
      <div className="hdr__logo">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="hdr__nav">
        <Link to= '/about'>about</Link>
        <Link to='/service'>service</Link>
        <Link to='/project'>project</Link>
        <Link></Link>
      </nav>
    </header>
  )
}

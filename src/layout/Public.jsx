import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer';


export const Public = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

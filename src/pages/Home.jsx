import { Guides } from '../components/Guides'
import { Numbers } from '../components/Numbers'
import { SliderData } from '../components/SliderData'
import { Strategic } from '../components/Strategic'

export const Home = () => {
  return (
    <>
      <Strategic/>
      <Numbers/>
      <Guides slides = {SliderData}/>
    
    </>
  )
}

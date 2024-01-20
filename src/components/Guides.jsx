import left from '../assets/desktop/icon-arrow-previous.svg';
import right from '../assets/desktop/icon-arrow-next.svg';

import '../scss/components/guides.scss';
import { SliderData } from './SliderData';
import { useState } from 'react';

export const Guides = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const amount = slides.length;

  const prevSlide = () => {
    setCurrent ( current === 0 ? amount - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent (current === amount - 1 ? 0 : current + 1)
  }

  console.log(current)

  return (
    <section className="guides">
        <div className="guides__wrapper">
            <div className="guides__img">
              {
                SliderData.map((img, index) => {
                  return(
                    <section key={index}>
                    
                      {index === current && (<img className='imagen' src={img.img} alt='info'/>)}
                      
                    </section>
                  )
                })
              }

              <div className="guides__text">
                <h4 className='guides__title'>Lean Product Roadmap</h4>
                <p className='guides__paragraph'>
                  2019 Project
                </p>
              </div>

            </div>
            <section className='guides__arrowsText'>
              <div className="guides__text-1">
                  Brand naming & guidelines
              </div>
              <div className="guides__icons">
                  <img src= {left} alt="left arrow" onClick={prevSlide} />
                  <img src= {right} alt="right arrow" onClick={nextSlide} />
              </div>
            </section>
        </div>
    </section>
  )
}

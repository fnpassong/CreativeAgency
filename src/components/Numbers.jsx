
import approachData from './ApproachData';

import '../scss/components/numbers.scss';

export const Numbers = () => {
  return (
    <section className="numbers">
        <div className="numbers__wrapper">

            <h3 className="numbers__leftTitle">
                Our approach for creating a winning brand
            </h3> 

            <div className="numbers__text">
                <h3 className="numbers__title">
                    Our approach for creating a winning brand
                </h3>  

                {
                    approachData.map((data,index) => {
                        return(
                            <article key={index} className="numbers__card">
                                <div className="numbers__numberWrapper">
                                   <div className='numbers__id'>{data.id}</div> 
                                   <div className='numbers__sub'>{data.sub} </div> 
                                </div>
                                <p className='numbers__paragraph'>
                                    {data.description}
                                </p>
                            </article>
                        )
                    })
                }

            </div>

        </div>    

    </section>
  )
}

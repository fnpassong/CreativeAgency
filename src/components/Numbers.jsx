
import approachData from './ApproachData';

import '../scss/components/numbers.scss';

export const Numbers = () => {
  return (
    <section className="numbers">
        <div className="numbers__wrapper">
            <h2 className="numbers__title">
             Our approach for creating a winning brand
            </h2>
            <aside className="numbers__approach">
                {
                    approachData.map((data, index)=> {
                        return(
                            <div key={index} className="numbers__card">
                                <section className='numbers__code'>
                                    <h3 className='numbers__id'>{data.id}</h3>
                                    <div className="numbers__sub">{data.sub}</div>
                                </section>
                                <p className="numbers__paragraph">
                                    {data.description}
                                </p>

                            </div>
                        )
                    })
                }

            </aside>
        </div>

    </section>
  )
}

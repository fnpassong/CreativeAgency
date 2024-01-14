import { Boton } from '../components/common/Boton';



export const Strategic = () => {
  return (
    <section className="strategic">
        <div className="strategic__wrapper">
            <div className="strategic__img">
                <div className="strategic__n"></div>
            </div>
            <div className="strategic__text">
                <h2 className="strategic__title"><span>design </span>is strategic</h2>
                <p className="strategic__paragraph">
                 “A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”
                </p>

                <Boton texto= 'Schedule a Call'/>
                
            </div>
        </div>
    </section>
    
  )
}

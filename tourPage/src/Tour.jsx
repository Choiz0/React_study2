import {useState} from 'react';

const Tour= ({id,image,info,name,price,onRemove})=>{
    const [isExtened, setIsExtended] = useState(false);
    return (
        <section className="single-tour">
            <div>
                <img className="img" src={image}/>
                <div className="tour-price">${price}</div>
                <div className="tour-info">
                    <h5>{name}</h5>

                    <p>{isExtened ?  info : `${info.substring(0,200)}...`}
                      <button onClick={()=>setIsExtended(!isExtened)}
                       className="info-btn">
                       {isExtened ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button type="button"
                     className= "btn btn-block delete-btn"
                        onClick={()=>{onRemove(id)}}
                     >
                    Not Interested
                    </button>
                </div>
                
                
            </div>
        </section>
    )
}
export default Tour;
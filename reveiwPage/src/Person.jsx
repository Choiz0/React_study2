import { SlArrowLeft ,SlArrowRight, } from 'react-icons/sl';
import {FaQuoteRight} from 'react-icons/fa'

const Person = ({id,name,job,image,text,nextReview,preReview})=>{
 
 console.log(nextReview)
    return(
      
        <div> 
            <div className="img-container">
           
                <img className="person-img" src={image}/>
            <div className="quote-icon"><FaQuoteRight/></div>
                </div>
            <h3 className="auther">{name}</h3>
            <h4 className="job">{job}</h4>
            <div className="info">{text}</div>
            <div className="btn-container">
            <SlArrowLeft className='prev-btn' onClick={preReview}  />
            <SlArrowRight className='next-btn'onClick={nextReview} />
            </div>
           
        </div>
    )
}
export default Person;
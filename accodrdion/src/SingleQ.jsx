import {useState} from "react"

const SingleQ = ({id,title,info}) => {
const [isOpened, setIsOpened] = useState(false);
const toggle =()=>{
     setIsOpened(!isOpened)
}

    return(
        <div className="question">
           <header>{title}
           <button className="question-btn" onClick={toggle}>
            {isOpened ? "-" : "+"}
           
           </button>
        </header>
       <p>{isOpened && info}</p>
        </div>
    )
}
export default SingleQ;
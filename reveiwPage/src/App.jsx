import data from "./data";
import {useState} from "react";
import Review from "./Review";

const App = () => {
  const [review, setReview] = useState(data)
  const [currentDisplay, setCurrentDisplay] = useState(1)
const nextReview= ()=>{
     if( currentDisplay+1 > review.length ){
      setCurrentDisplay(1)
     }
     else{
      setCurrentDisplay(currentDisplay+1)
     }
}
const randomNum =()=>{
        const newNum =Math.floor(Math.random() * review.length+1)
       return setCurrentDisplay(newNum)
}
const preReview= ()=>{
  if( currentDisplay-1 < 1 ){
   setCurrentDisplay(review.length)
  }
  else{
   setCurrentDisplay(currentDisplay-1)
  }
}
    return (
      <main className="">
        <Review review={review} currentDisplay={currentDisplay} nextReview={nextReview} preReview={preReview} randomNum={randomNum}/>
        
      </main>
    )
};
export default App;

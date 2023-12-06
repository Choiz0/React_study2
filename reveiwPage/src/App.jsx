import data from "./data";
import { useState, useEffect } from "react";
import Review from "./Review";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaQuoteRight } from "react-icons/fa";

// const App = () => {
//   const [review, setReview] = useState(data)
//   const [currentDisplay, setCurrentDisplay] = useState(1)
// const nextReview= ()=>{
//      if( currentDisplay+1 > review.length ){
//       setCurrentDisplay(1)
//      }
//      else{
//       setCurrentDisplay(currentDisplay+1)
//      }
// }
// const randomNum =()=>{
//         const newNum =Math.floor(Math.random() * review.length+1)
//        return setCurrentDisplay(newNum)
// }
// const preReview= ()=>{
//   if( currentDisplay-1 < 1 ){
//    setCurrentDisplay(review.length)
//   }
//   else{
//    setCurrentDisplay(currentDisplay-1)
//   }
// }
//     return (
//       <main className="">
//         <Review review={review} currentDisplay={currentDisplay} nextReview={nextReview} preReview={preReview} randomNum={randomNum}/>

//       </main>
//     )
// };
const App = () => {
  const [currNum, setCurrNum] = useState(0);
  const [currentData, setCurrentData] = useState(data[currNum]);
  const { name, job, text, image } = currentData;
  const randomNum = () => {
    let newNum = Math.floor(Math.random() * data.length);
    console.log(newNum);
    if (newNum === currNum) {
      newNum = (currNum + 1) % data.length;
    }
    setCurrNum(newNum);
  };

  useEffect(() => {
    setCurrentData(data[currNum]);
  }, [currNum, data]);

  const nextReview = () => {
    if (currNum + 1 > data.length) {
      return setCurrNum(1);
    } else {
      return setCurrNum(currNum + 1);
    }
  };
  const preReview = () => {
    if (currNum - 1 < 0) {
      setCurrNum(data.length - 1);
    } else {
      setCurrNum(currNum - 1);
    }
  };
  return (
    <main>
      <div className="review">
        {" "}
        <div className="img-container">
          <img className="person-img" src={image} />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h3 className="auther">{name}</h3>
        <h4 className="job">{job}</h4>
        <div className="info">{text}</div>
        <div className="btn-container">
          <SlArrowLeft className="prev-btn" onClick={preReview} />
          <SlArrowRight className="next-btn" onClick={nextReview} />
        </div>
        <button className="btn" onClick={randomNum}>
          Suprise Me
        </button>
      </div>
    </main>
  );
};
export default App;

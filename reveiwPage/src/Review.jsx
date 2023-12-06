import Person from "./Person"
const Review =({review,currentDisplay,nextReview,preReview,randomNum})=>{
    const currnetReview = review.find((review)=> review.id === currentDisplay)

    return(
    <div className="review">
        <Person {...currnetReview} nextReview={nextReview}  preReview={preReview}/>
        <button className='btn' onClick={randomNum}>Suprise Me</button>
    </div>
 )

}
export default Review;
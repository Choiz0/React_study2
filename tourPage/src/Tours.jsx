import Tour from "./Tour";
const Tours= ({tours,onRemove})=>{
    
    return (
        <div className="tours">
            {tours.map((tour)=>{
                return<Tour key={tour.id} {...tour} onRemove={onRemove}/>
                
            })}
        </div>
    )
}
export default Tours;
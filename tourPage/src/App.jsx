import { useEffect, useState } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const onRemove = (targetId)=>{
    const newTourList = tours.filter((tour)=>tour.id !== targetId)
    setTours(newTourList);
    setLoading(false);
  }
  if(loading){
    return <div className="loading"></div>
  }
  
  
  return (
   
      <main>
        {tours.length === 0 ? (
          <div>
            <h2 className="title">No tours left</h2>
            <div className="title-underline"></div>
            <div>
              <button className="btn" onClick={fetchData}>
                Refresh
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="title">Sarah Tour</h2>
            <Tours tours={tours} onRemove={onRemove} />
          </div>
        )}
      </main>
    );
    
  
};
export default App;

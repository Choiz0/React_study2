import data from "./data";
import { useState } from "react";
import SingleQ from "./SingleQ"
const App = () => {
  const [ questions, setQuestions ] = useState(data);
  
console.log(questions)
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((it)=> 
      {   return <SingleQ {...it} key={it.id}/>}
        )}
      </div>
    </main>
  );
};
export default App;

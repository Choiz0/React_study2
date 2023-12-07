import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curBtn, setCurBtn] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setJobs(newData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(jobs);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <div className="jobs-center ">
      <BtnContainer jobs={jobs} curBtn={curBtn} setCurBtn={setCurBtn} />
      <JobInfo jobs={jobs} curBtn={curBtn} />
    </div>
  );
};
export default App;

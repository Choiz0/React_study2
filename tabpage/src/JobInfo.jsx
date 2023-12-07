import Duties from "./Duties";
import { v4 } from "uuid";
const JobInfo = ({ jobs, curBtn }) => {
  // alternatives
  const { company, dates, duties, title } = jobs[curBtn];
  const id = v4();

  return (
    <article className="">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      {duties.map((duty) => {
        return <div className="job-desc">{duty}</div>;
      })}
    </article>
  );
};
export default JobInfo;
//

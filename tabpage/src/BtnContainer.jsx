const BtnContainer = ({ jobs, curBtn, setCurBtn }) => {
  return (
    <div className="btn-container">
      {jobs.map((name, id) => {
        return (
          <button
            className={curBtn === id ? "active-btn job-btn" : "job-btn"}
            key={name.id}
            onClick={() => setCurBtn(id)}
          >
            {name.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;

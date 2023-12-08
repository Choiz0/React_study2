import { useState } from "react";

const SingleItem = ({ title, id, completed, onRemove }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div className="single-item center-item">
      <input type="checkbox" checked={isCompleted} onChange={handleCompleted} />
      <p className={isCompleted ? "strikethrough" : ""}>{title}</p>

      <button
        type="button"
        className="remove-btn btn"
        onClick={() => onRemove(id)}
      >
        <p>remove</p>
      </button>
    </div>
  );
};
export default SingleItem;

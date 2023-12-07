import text from "./data";
import { useState, useEffect } from "react";

const App = () => {
  const [word, setWord] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setWord(text.slice(0, count));
  }, []);
  const handleNumber = (e) => {
    const count = parseInt(e.target.value, 10);
    if (count <= 0 || count > 8) {
      setCount(1);
    } else {
      setCount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return setWord(text.slice(0, count));
  };
  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label className="label">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={handleNumber}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {word.map((it, index) => (
          <p key={index}>{it}</p> // 고유 키로 index 사용
        ))}
      </article>
    </div>
  );
};
export default App;

import { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
  const [items, setItems] = useState(defaultList);
  const [inputItem, setInputItem] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItem.length === 0) {
      toast.error("Please enter a value");
      textRef.current.focus();
    } else {
      const newItems = [
        ...items,
        { completed: false, id: v4(), title: inputItem },
      ];
      setItems(newItems);
      setInputItem("");
      toast.success("item added successfully");
    }
  };

  const onRemove = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success("item removed successfully");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />

      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          {" "}
          <input
            className="form-input "
            type="text"
            value={inputItem}
            ref={textRef}
            onChange={(e) => setInputItem(e.target.value)}
            name="items"
          />
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
      <Items items={items} onRemove={onRemove} />
    </section>
  );
};

export default App;

import menu from "./data";
import { useState } from "react";
import Menu from "./Menu";

const App = () => {
  const [menus, setMenus] = useState(menu);
  const [curCategory, setCurCategory] = useState("All");

  let categories = ["All", ...new Set(menu.map((item) => item.category))];

  const filterCatergory = (category) => {
    if (category === "All") {
      setMenus(menu);
    } else {
      const filterMenus = menu.filter((it) => it.category === category);
      setMenus(filterMenus);
    }
  };
  return (
    <main className="menu">
      <div className="title">
        <h2>Menu</h2>
      </div>
      <div className="title-underline"></div>
      <div className="btn-container">
        {categories.map((category, idx) => {
          return (
            <button className="btn" onClick={() => filterCatergory(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <Menu menus={menus} />
    </main>
  );
};
export default App;

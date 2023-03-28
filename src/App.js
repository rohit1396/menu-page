import React, { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App mt-5 container-lg">
      <h1 className="h1 display-5 text-center mb-4">Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;

import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="d-flex justify-content-center">
      {categories.map((category, id) => {
        return (
          <button
            type="button"
            className="text-capitalize btn btn-warning btn-sm d-flex mx-2 mx-sm-4 my-4"
            key={id}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

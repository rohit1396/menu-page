import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Menu = ({ items }) => {
  return (
    <div className="container-lg ">
      <div className="row">
        {items.map((menuItem) => {
          const { id, title, img, price, desc } = menuItem;
          return (
            <article className="col-md-4 my-3" key={id}>
              <img className="img-fluid" src={img} alt={title} />
              <div className="p-3 d-flex flex-column">
                <header className="d-flex text-capitalize justify-content-between">
                  <h4 className="fs-5 fw-light">{title}</h4>
                  <h4 className="fs-6 bg-warning text-light">${price}</h4>
                </header>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

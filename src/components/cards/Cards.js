import React from "react";
import "./cards.css";
import { NavLink } from "react-router-dom";
export const Cards = ({ detail }) => {
  console.log(detail);
  return (
    <>
      <div className="container">
        {!detail
          ? " No meals"
          : detail.map((val) => { 
              return (
                <>
                  <div className="card">
                    <div className="card-details">
                      <img
                        src={val.strMealThumb}
                        class="rounded mx-auto"
                        alt="..."
                      />
                      <p className="text-title">{val.strMeal}</p>
                      <p className="text-body">{val.strArea}</p>
                    </div>
                    <NavLink to={`/${val.idMeal}`}>
                      <button className="card-button">Recipe</button>
                    </NavLink>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
};

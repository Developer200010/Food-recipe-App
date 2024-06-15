import React, { useState } from "react";
import "./recipeInfo.css";
import { useParams } from "react-router-dom";
export const RecipeInfo = () => {
  const { mealId } = useParams();
  const [info, infoData] = useState();
  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jsonDate = await get.json();
    console.log(jsonDate.meals[0]);
    infoData(jsonDate.meals[0]);
  };
  if (info != "") {
    getInfo();
  }
  return (
    <>
      {!info ? (
        "Date not found"
      ) : (
        <div class="container1">
          <div className="image">
            <img src={info.strMealThumb} alt="img" />
          </div>
          <div className="info">
            <h2>{info.strMeal}</h2>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

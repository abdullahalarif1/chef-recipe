import React, { useState } from "react";
import { toast } from "react-toastify";

const ChefRecipe = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavorite2, setIsFavorite2] = useState(false);
  const [isFavorite3, setIsFavorite3] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(true);
    toast("Recipe has been Favorite successfully!!");
  };
  const handleFavorite2 = () => {
    setIsFavorite2(true);
    toast("Recipe has been Favorite successfully!!");
  };
  const handleFavorite3 = () => {
    setIsFavorite3(true);
    toast("Recipe has been Favorite successfully!!");
  };

  return (
    <div>
      <table className="my-10">
        <thead>
          <tr className="border-2">
            <th className="border-2">Recipe Name</th>
            <th className="border-2">Ingredients</th>
            <th className="border-2">Cooking Method</th>
            <th className="border-2">Rating</th>
            <th className="border-2">Favorite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 py-3">{data.recipeName}</td>
            <td className="border-2 py-3">{data.ingredients}</td>
            <td className="border-2 py-3">{data.cookingMethod}</td>
            <td className="border-2 py-3">{data.rating}</td>
            <td className="border-2 py-3">
              <button
                disabled={isFavorite}
                onClick={handleFavorite}
                className="favorite-button btn-error btn text-white"
              >
                Favorite
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-2 py-3">{data.recipeName}</td>
            <td className="border-2 py-3">{data.ingredients}</td>
            <td className="border-2 py-3">{data.cookingMethod}</td>
            <td className="border-2 py-3">{data.rating}</td>
            <td className="border-2 py-3">
              <button
                disabled={isFavorite2}
                onClick={handleFavorite2}
                className="favorite-button btn-error btn text-white"
              >
                Favorite
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-2 py-3">{data.recipeName}</td>
            <td className="border-2 py-3">{data.ingredients}</td>
            <td className="border-2 py-3">{data.cookingMethod}</td>
            <td className="border-2 py-3">{data.rating}</td>
            <td className="border-2 py-3">
              <button
                disabled={isFavorite3}
                onClick={handleFavorite3}
                className="favorite-button btn-error btn text-white"
              >
                Favorite
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChefRecipe;

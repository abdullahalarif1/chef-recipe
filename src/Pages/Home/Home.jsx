import React from "react";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import Recipes from "../Recipes/Recipes";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chef></Chef>
      <Trending></Trending>
      <Recipes></Recipes>
    </div>
  );
};

export default Home;

import React from "react";
import MovieLists from "../movieLists/MovieLists";
import Posts from "../posts/Posts";

const HomeList = ({ movies }) => {
  return (
    <div className="c-9">
      <MovieLists movies={movies} />
      <Posts />
    </div>
  );
};

export default HomeList;

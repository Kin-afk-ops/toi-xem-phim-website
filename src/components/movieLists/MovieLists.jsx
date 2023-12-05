"use client";

import Link from "next/link";
import MovieListItem from "../movieListItem/MovieListItem";
import "./movieLists.scss";
import "./responsive.scss";
import GoodMovie from "../goodMovie/GoodMovie";

const MovieLists = ({ movies }) => {
  let { data } = movies;

  return (
    <div className="movieList grid wide">
      <div className="row">
        <div className="grid c-8">
          <div className="movieListTitle">
            <h3>{movies?.name}</h3>
            <Link
              href={{
                pathname: `danh-sach/${movies?.path}`,
                query: {
                  page: "1",
                },
              }}
              className="link linkList"
            >
              Xem tất cả
            </Link>
          </div>

          <div className="row ">
            {data?.map((movie, index) => (
              <MovieListItem movie={movie} key={index} />
            ))}
          </div>
        </div>
        <div className="c-4">
          <GoodMovie />
        </div>
      </div>
    </div>
  );
};

export default MovieLists;

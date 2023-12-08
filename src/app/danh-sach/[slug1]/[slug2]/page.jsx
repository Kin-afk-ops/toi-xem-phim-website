"use client";

import { useSearchParams } from "next/navigation";
import MovieListItem from "../../../../components/movieListItem/MovieListItem";
import "./list.scss";
import "./responsive.scss";
import { useEffect, useState } from "react";
import Pagination from "../../../../components/pagination/Pagination";
import Loading from "../../../../components/loading/Loading";

import axiosInstance from "../../../../config";

const Lists = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const moviesPerPage = 30;
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  const type = params.slug1;
  const path = params.slug2;

  useEffect(() => {
    const fetchNewMovie = async () => {
      const res = await axiosInstance.get(`/movie?qNew=${true}`);

      setMovies(res.data.movies);
    };

    const fetchSeriesMovie = async () => {
      const res = await axiosInstance.get(`/movie?qCategory=${type}&qPage=1`);

      setMovies(res.data.movies);
      setTotalPage(res.data.totalPage);
    };

    switch (type) {
      case "phim-moi-cap-nhat":
        fetchNewMovie();
        setTitle("Phim mới cập nhật");
        break;
      case "phim-bo-moi-cap-nhat":
        fetchSeriesMovie();
        setTitle("Phim bộ mới cập nhật");
      default:
        console.log("haha");
        break;
    }
  }, [path, type]);

  return (
    <div className="lists">
      <h1 className="mainTitle">{title}</h1>

      {movies.length === 0 ? (
        <Loading movies={movies} />
      ) : (
        <div className="movieListItems row">
          {movies.map((movie, index) => (
            <MovieListItem movie={movie} key={index} listMode={true} />
          ))}
        </div>
      )}

      <Pagination
        totalPage={totalPage}
        type={type}
        path={path}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Lists;

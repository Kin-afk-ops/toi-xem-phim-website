"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import MovieListItem from "../../../components/movieListItem/MovieListItem";
import "./list.scss";
import "./responsive.scss";
import Pagination from "../../../components/pagination/Pagination";
import Loading from "../../../components/loading/Loading";

import axiosInstance from "../../../config";

const Lists = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  const slugMovie = params.slug.split(".")[0];

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  useEffect(() => {
    const fetchNewMovie = async () => {
      const res = await axiosInstance.get(
        `/movie?qNew=${true}&qPage=${currentPage}`
      );

      setMovies(res.data.movies);
      setTotalPage(res.data.totalPage);
    };

    const fetchSeriesMovie = async () => {
      const res = await axiosInstance.get(`/movie?qCategory=${type}&qPage=1`);

      setMovies(res.data.movies);
      setTotalPage(res.data.totalPage);
    };

    switch (slugMovie) {
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
  }, [slugMovie, currentPage]);

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
        path={params.slug}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Lists;

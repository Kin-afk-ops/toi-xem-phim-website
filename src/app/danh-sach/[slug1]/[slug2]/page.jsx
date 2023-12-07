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
  const moviesPerPage = 25;
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
    const fetchMovie = async () => {
      const res = await axiosInstance.get(`/movie/${type}?q=${path}`);

      setMovies(res.data);
    };

    const fetchAnimeMovie = async () => {
      const res = await axiosInstance.get(`/movie/${type}?q=anime&t=movie`);
      setMovies(res.data);
    };

    const fetchAnimeSeries = async () => {
      const res = await axiosInstance.get(`/movie/${type}?q=anime&t=series`);
      setMovies(res.data);
    };

    const fetchAllMovie = async () => {
      const res = await axiosInstance.get("/movie");
      setMovies(res.data);
    };

    const fetchSearchMovie = async () => {
      const res = await axiosInstance.get(`/search?search=${path}`);

      setMovies(res.data);
    };

    if (type === "all") {
      fetchAllMovie();
      setTitle("Tất cả phim");
    } else if (type === "search") {
      fetchSearchMovie();
      setTitle(`Kết quả tìm kiếm cho:  "${path.toUpperCase()}"`);
    } else {
      fetchMovie();
      setTitle(`Danh sách cho phim: "${path.toUpperCase()}"`);
    }

    if (path === "animeMovie") {
      fetchAnimeMovie();
      setTitle("Danh sách Anime chiếu rạp");
    }

    if (path === "animeSeries") {
      fetchAnimeSeries();
      setTitle("Danh sách series Anime");
    }
  }, [path, type]);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

  return (
    <div className="lists">
      <h1>{title}</h1>

      {currentMovies.length === 0 ? (
        <Loading movies={movies} />
      ) : (
        <div className="movieListItems row">
          {currentMovies.map((movie, index) => (
            <MovieListItem movie={movie} key={index} listMode={true} />
          ))}
        </div>
      )}

      <Pagination
        totalMovie={movies.length}
        moviesPerPage={moviesPerPage}
        type={type}
        path={path}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Lists;

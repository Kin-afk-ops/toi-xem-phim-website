"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../config";
import Loading from "@/components/loading/Loading";
import MovieLists from "@/components/movieLists/MovieLists";

export default function Home() {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axiosInstance.get("/movie/home");

      setMovies({
        data: res.data,
        name: "Phim mới cập nhật",
        path: "all/all",
      });
    };

    fetchMovies();
  }, []);

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <div>
      {isEmptyObject(movies) ? <Loading /> : <MovieLists movies={movies} />}
    </div>
  );
}

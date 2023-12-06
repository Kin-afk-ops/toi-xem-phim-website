"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../config";
import Loading from "@/components/loading/Loading";
import "./page.scss";
import GoodMovie from "@/components/goodMovie/GoodMovie";
import HomeList from "@/components/homeList/HomeList";

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
    <div className="home grid wide">
      {isEmptyObject(movies) ? (
        <Loading />
      ) : (
        <div className="row no-gutters">
          <HomeList movies={movies} />
          <GoodMovie />
        </div>
      )}
    </div>
  );
}

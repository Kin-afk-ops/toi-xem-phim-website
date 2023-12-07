"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../config";
import Loading from "@/components/loading/Loading";
import "./page.scss";
import GoodMovie from "@/components/goodMovie/GoodMovie";
import HomeList from "@/components/homeList/HomeList";
import Posts from "@/components/posts/Posts";

export default function Home() {
  const [movies, setMovies] = useState({});
  const [seriesMovies, setSeriesMovies] = useState({});

  useEffect(() => {
    const fetchNewMovies = async () => {
      const res = await axiosInstance.get("/home");

      setMovies({
        data: res.data,
        name: "Phim mới cập nhật",
        path: "phim-moi-cap-nhat/phim-moi",
      });
    };

    const fetchSeriesMovies = async () => {
      const res = await axiosInstance.get(`/home?qHome=${"series"}`);

      setSeriesMovies({
        data: res.data,
        name: "Phim bộ mới cập nhật",
        path: "phim-moi-cap-nhat/series",
      });
    };

    fetchNewMovies();
    fetchSeriesMovies();
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
          <div className="c-9">
            <HomeList movies={movies} />
            <HomeList movies={seriesMovies} />
            <Posts />
          </div>
          <GoodMovie />
        </div>
      )}
    </div>
  );
}

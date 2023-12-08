"use client";

import Loading from "../../../components/loading/Loading";
import Video from "../../../components/video/Video";
import "./singleMovie.scss";
import "./responsive.scss";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axiosInstance from "../../../config";
import GoodMovie from "@/components/goodMovie/GoodMovie";

const SingleMovie = ({ params }) => {
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);

  const searchParams = useSearchParams();

  const slug = params?.slug;

  useEffect(() => {
    const getMovie = async () => {
      const res = await axiosInstance.get("https://ophim1.com/phim/" + slug);
      setMovie(res.data);
      setCategory(res.data.movie.category);
      setCountry(res.data.movie.country);
    };

    getMovie();
  }, [slug]);

  const infoMovie = movie?.movie;

  const ep = searchParams.get("ep") || "";

  const episode_current = infoMovie?.episode_current;
  const cateMovie = [];
  const countryMovie = [];
  let nameTitle = "";
  if (typeof infoMovie !== "undefined") {
    nameTitle = infoMovie?.name;
  }

  category?.forEach((c) => {
    const { name } = c;
    cateMovie.push(" " + name);
  });

  country?.forEach((c) => {
    const { name } = c;
    countryMovie.push(" " + name);
  });

  return (
    <div className="singleMovie">
      {!infoMovie ? (
        <Loading />
      ) : (
        <div className="row no-gutters">
          <div className="singleMovieVideo c-9">
            <Video movie={movie} ep={ep} />
          </div>
          <GoodMovie />
        </div>
      )}
    </div>
  );
};

export default SingleMovie;

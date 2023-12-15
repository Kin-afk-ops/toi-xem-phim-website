"use client";

import Loading from "../../../components/loading/Loading";
import Video from "../../../components/video/Video";
import "./videoPage.scss";
import "./responsive.scss";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axiosInstance from "../../../config";

const VideoPage = ({ params }) => {
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);

  const searchParams = useSearchParams();

  const slug = params?.slug.split(".")[0];

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

  const ep = searchParams.get("tap") || "";

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
        <div className="singleMovieVideo">
          <Video movie={movie} ep={ep} />
        </div>
      )}
    </div>
  );
};

export default VideoPage;

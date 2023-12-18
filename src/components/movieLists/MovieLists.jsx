"use client";

import Link from "next/link";
import MovieListItem from "../movieListItem/MovieListItem";
import "./movieLists.scss";
import "./responsive.scss";
import slugify from "slugify";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieLists = ({ movies }) => {
  let { data } = movies;
  const [screenWidth, setScreenWidth] = useState(5);
  let windowWidth = 0;

  useEffect(() => {
    windowWidth = window && window.screen.width;
    if (windowWidth < 740) {
      setScreenWidth(2);
    } else if (windowWidth >= 740 && windowWidth < 1024) {
      setScreenWidth(3);
    } else {
      setScreenWidth(5);
    }
  }, [windowWidth]);

  return (
    <div className="movieList main-container">
      <div className="movieListTitle">
        <h2 className="mainTitle">{movies?.name}</h2>
        <Link
          href={{
            pathname: `danh-sach/${slugify(movies?.name, {
              lower: true,
            })}.html`,
            query: {
              page: "1",
            },
          }}
          className="link linkList"
        >
          Xem thêm
        </Link>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={screenWidth}
        loop={true}
        navigation
      >
        {data &&
          data?.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieListItem movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieLists;

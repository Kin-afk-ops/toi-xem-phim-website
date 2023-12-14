"use client";

import Link from "next/link";
import MovieListItem from "../movieListItem/MovieListItem";
import "./movieLists.scss";
import "./responsive.scss";
import slugify from "slugify";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieLists = ({ movies }) => {
  let { data } = movies;

  return (
    <div className="movieList main-container">
      <div className="movieListTitle">
        <h2 className="mainTitle">{movies?.name}</h2>
        <Link
          href={{
            pathname: `danh-sach/${slugify(movies?.name, {
              lower: true,
              locale: "vi",
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
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data?.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieListItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieLists;

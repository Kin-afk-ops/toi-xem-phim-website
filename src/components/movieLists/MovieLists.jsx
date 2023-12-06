"use client";

import Link from "next/link";
import MovieListItem from "../movieListItem/MovieListItem";
import "./movieLists.scss";
import "./responsive.scss";

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
    <div className="movieList grid main-container">
      <div className="movieListTitle">
        <h3>{movies?.name}</h3>
        <Link
          href={{
            pathname: `danh-sach/${movies?.path}`,
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
        spaceBetween={25}
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

      <hr />
    </div>
  );
};

export default MovieLists;

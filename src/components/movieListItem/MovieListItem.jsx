"use client";

import "./movieListItem.scss";
import "./responsive.scss";
import Link from "next/link";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import tam from "../../assets/images/tam.jpg";
import Image from "next/image";

const MovieListItem = ({ movie }) => {
  const slug = movie?.slug;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`/xem-phim/${slug}/1`}
      className="link movieListItem"
      onClick={handleClick}
    >
      <div className="movieListItemPoster">
        <Image
          src={`https://img.ophim9.cc/uploads/movies/${slug}-thumb.jpg`}
          alt="thumb"
          // effect="blur"
          // threshold="100"
          // placeholderSrc={tam}
          width={160}
          height={210}
          className="movieListItemImg"
        />

        <i className="fa-solid fa-play playIcon"></i>
        <div className="movieListItemStatus">Trang thai</div>
      </div>

      <div className="movieListItemName">
        <span>{movie?.name}</span>
        <span className="movieOriginName">{movie?.origin_name}</span>
      </div>
    </Link>
  );
};

export default MovieListItem;

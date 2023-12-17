"use client";

import "./movieListItem.scss";
// import "./responsive.scss";
import Link from "next/link";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import tam from "../../assets/images/tam.jpg";
import Image from "next/image";

const MovieListItem = ({ movie, listMode }) => {
  const slug = movie?.slug;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`/phim/${slug}.html`}
      className={
        listMode
          ? "link movieListItem col m-2-4 l-2-4 s-6"
          : "link movieListItem"
      }
      onClick={handleClick}
    >
      <div className="movieListItemPoster">
        <Image
          src={`https://img.ophim9.cc/uploads/movies/${slug}-thumb.jpg`}
          alt="thumb"
          // effect="blur"
          // threshold="100"
          // placeholderSrc={tam}
          fill
          style={{
            objectFit: "cover",
          }}
          className="movieListItemImg"
        />

        <i className="fa-solid fa-play playIcon"></i>
        {movie?.status && (
          <div className="movieListItemStatus">{movie?.status}</div>
        )}
      </div>

      <div className="movieListItemName">
        <span>{movie?.name}</span>
        <span className="movieOriginName">{movie?.origin_name}</span>
      </div>
    </Link>
  );
};

export default MovieListItem;

"use client";

import React from "react";
import Image from "next/image";
import "./goodMovie.scss";
import "./responsive.scss";

const GoodMovie = () => {
  return (
    <div className="goodMovieTitle">
      <h2>Phim nổi bật</h2>
      <ul>
        <li>
          <Image
            src="https://img.ophim9.cc/uploads/movies/power-rangers-vu-tru-cuong-no-thumb.jpg"
            alt="thumb"
            width={80}
            height={90}
          />
          <div>
            <p>Vu tru cuong no thumb</p>
            <p>full</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GoodMovie;

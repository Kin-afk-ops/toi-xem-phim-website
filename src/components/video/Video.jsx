"use client";

import { useState } from "react";
import "./video.scss";
import "./responsive.scss";
import Link from "next/link";

const Video = (props) => {
  const { movie, ep } = props;
  const infoMovie = movie.episodes;
  let dataArray = [];
  const [serverMovie, setServerMovie] = useState(infoMovie[0].server_name);

  let urlMovie = "";
  let fileName = "";
  const severName = [];

  infoMovie?.forEach((i) => {
    severName.push(i.server_name);
  });

  infoMovie?.forEach((infoData) => {
    if (infoData.server_name === serverMovie) {
      dataArray = infoData.server_data;
    }
  });

  if (dataArray.length !== 0) {
    dataArray.forEach((data) => {
      if (data.slug === ep || data.slug === "full") {
        urlMovie = data.link_embed;
        fileName = data.filename;
      }
    });
  }

  const handleClick = (d) => {
    if (window.screen.width <= 480) {
      window.scrollTo({
        top: 1000,
      });
    } else {
      window.scrollTo({
        top: 850,
      });
    }
    urlMovie = d.link_embed;
    fileName = d.filename;
    window.location.replace(`/xem-phim/${name}/${d.slug}`);
  };

  return (
    <div className="video">
      {ep ? (
        <h3>{`${movie.movie.name} tập ${ep}`}</h3>
      ) : (
        <h3>{`${movie.movie.name} `}</h3>
      )}

      <div className="container">
        <iframe
          className="responsive-iframe"
          style={{ border: "none" }}
          allowFullScreen={true}
          width="720"
          height="480"
          src={urlMovie}
          loading="lazy"
        ></iframe>
      </div>
      <div className="videoServer">
        {severName.map((s, index) => (
          <button
            className={s === serverMovie ? "active" : " "}
            onClick={() => setServerMovie(s)}
            key={index}
          >
            {s}
          </button>
        ))}
      </div>
      {ep !== "" && (
        <>
          <span>Hãy chọn tập phim để xem phim nhé!</span>
          <div className="singleMovieEp">
            {dataArray.map((d, index) => (
              <Link
                key={index}
                href={`/xem-phim/${movie?.movie.slug}?ep=${d.name}`}
                className={
                  d.name === ep
                    ? "link singleMovieEpBtn epActive"
                    : "link singleMovieEpBtn"
                }
              >
                {d.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Video;

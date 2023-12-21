"use client";

import { useState } from "react";
import "./video.scss";
import "./responsive.scss";
import Link from "next/link";
const Video = (props) => {
  const { movie, ep } = props;
  const [load, setLoad] = useState(false);
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
      if (data.name === ep || data.name === "Full") {
        urlMovie = data.link_embed;
        fileName = data.filename;
      }
    });
  }

  // const fhandleClick = (d) => {
  //   if (window.screen.width <= 480) {
  //     window.scrollTo({
  //       top: 1000,
  //     });
  //   } else {
  //     window.scrollTo({
  //       top: 850,
  //     });
  //   }
  //   urlMovie = d.link_embed;
  //   fileName = d.filename;
  //   window.location.replace(`/xem-phim/${name}/${d.slug}`);
  // };

  return (
    <div className="video">
      {urlMovie && ep ? (
        <h1>{`${movie.movie.name} tập ${ep}`}</h1>
      ) : (
        <h1>{`${movie.movie.name} `}</h1>
      )}

      <div className={urlMovie ? "container" : "containerNoUrl"}>
        {urlMovie ? (
          <iframe
            className="responsive-iframe"
            style={{ border: "none" }}
            allowFullScreen={true}
            width="720"
            height="480"
            src={urlMovie}
            loading="lazy"
          ></iframe>
        ) : (
          <h4>Chọn tập phim ở phía dưới</h4>
        )}
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
                href={`/xem-phim/${movie?.movie.slug}?tap=${d.name}`}
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

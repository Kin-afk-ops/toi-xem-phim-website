"use client";

import Loading from "../../../components/loading/Loading";
import "./infoMovie.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InfoMovie = ({ movie }) => {
  const router = useRouter();
  const infoMovie = movie.movie;
  const cateMovie = [];
  const countryMovie = [];
  const [serverMovie, setServerMovie] = useState(movie.episodes[0].server_name);
  let serverName = [];
  let episodes = [];

  infoMovie?.category.forEach((c) => {
    const { name } = c;
    cateMovie.push(" " + name);
  });

  infoMovie?.country.forEach((c) => {
    const { name } = c;
    countryMovie.push(" " + name);
  });

  movie?.episodes.forEach((e) => {
    serverName.push(e.server_name);
  });

  movie?.episodes.forEach((e) => {
    if (e.server_name === serverMovie) {
      episodes = e.server_data;
    }
  });

  const handleClick = () => {
    if (movie.episodes[0].server_data[0].slug === "full") {
      router.push(`/xem-phim/${infoMovie.slug}`);
    } else {
      router.push(`/xem-phim/${infoMovie.slug}?ep=1`);
    }
  };

  return (
    <div className="infoMovie">
      <div className="infoMovieCard grid wide">
        <div className="row">
          <div className="infoMovieTop l-9 row">
            <div className="c-3 leftWrap">
              <img src={infoMovie?.thumb_url} alt="" onClick={handleClick} />
              <button className="infoMovieWatch" onClick={handleClick}>
                Xem phim ngay
              </button>
              <i class="fa-regular fa-circle-play infoMovieIcon"></i>
            </div>

            <div className="infoMovieContent c-9">
              <div className="infoMovieName">{infoMovie?.name}</div>
              <div className="infoMovieDesc">
                <p dangerouslySetInnerHTML={{ __html: infoMovie?.content }}></p>
              </div>

              {/* <div className="infoMovieEp">
                <p>Chọn server:</p>
                <div className="infoMovieBtn">
                  {serverName?.map((s, index) => (
                    <button
                      key={index}
                      className={
                        s === serverMovie
                          ? "infoMovieServerBtn active"
                          : "infoMovieServerBtn"
                      }
                      onClick={() => setServerMovie(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="infoMovieEp">
                <p>Chọn tập phim:</p>
                <div className="infoMovieBtn">
                  {episodes?.map((d, index) => (
                    <Link
                      key={index}
                      href={`/xem-phim/${infoMovie.slug}?server=${serverMovie}&ep=1`}
                      className="link infoMovieEpBtn"
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div> */}

              <div className="infoMovieInfo">
                <p className="mainTitle">Thông tin phim:</p>
                <div>
                  <div className="infoMovieInfoText">
                    <span>Trạng Thái: </span>
                    <span>{infoMovie?.episode_current}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Số tập: </span>
                    <span>{infoMovie?.episode_total}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Thời lượng: </span>
                    <span>{infoMovie?.time}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Năm phát hành: </span>
                    <span>{infoMovie?.year}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Chất lượng: </span>
                    <span>{infoMovie?.quality}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Ngôn ngữ: </span>
                    <span>{infoMovie?.lang}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Đạo diễn: </span>
                    <span>{infoMovie?.director.toString()}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Diễn viên: </span>
                    <span>{infoMovie?.actor.toString()}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Thể loại: </span>
                    <span>{cateMovie?.toString()}</span>
                  </div>
                </div>

                <div>
                  <div className="infoMovieInfoText">
                    <span>Quốc gia: </span>
                    <span>{countryMovie?.toString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMovie;

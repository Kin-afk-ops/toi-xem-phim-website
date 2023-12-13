"use client";

import Loading from "../../../components/loading/Loading";
import "./infoMovie.scss";
import { useRouter } from "next/navigation";

const InfoMovie = ({ movie }) => {
  const router = useRouter();
  const infoMovie = movie.movie;
  const cateMovie = [];
  const countryMovie = [];

  infoMovie?.category.forEach((c) => {
    const { name } = c;
    cateMovie.push(" " + name);
  });

  infoMovie?.country.forEach((c) => {
    const { name } = c;
    countryMovie.push(" " + name);
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
      <div className="infoMovieCard grid ">
        <div className="infoMovieTop  row">
          <div className="c-3 leftWrap">
            <img src={infoMovie?.thumb_url} alt="" onClick={handleClick} />
            <button className="infoMovieWatch" onClick={handleClick}>
              Xem phim ngay
            </button>
            <i class="fa-regular fa-circle-play infoMovieIcon"></i>
          </div>

          <div className="infoMovieContent c-9">
            <div className="infoMovieName">{infoMovie?.name}</div>

            <div className="infoMovieInfo">
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
            <h3 className="mainTitle infoMovieDescTitle">Mô tả</h3>
            <div className="infoMovieDesc">
              <p dangerouslySetInnerHTML={{ __html: infoMovie?.content }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMovie;

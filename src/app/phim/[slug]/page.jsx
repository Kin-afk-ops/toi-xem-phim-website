"use client";

import Loading from "../../../components/loading/Loading";
import Video from "../../../components/video/Video";
import "./infoMovie.scss";
import { useRouter } from "next/navigation";

const InfoMovie = ({ movie }) => {
  const router = useRouter();
  const infoMovie = movie.movie;
  const name = infoMovie?.slug;
  const cateMovie = [];
  const countryMovie = [];
  const nameTitle = infoMovie?.name;
  const episodes = movie.episodes[0];

  infoMovie?.category.forEach((c) => {
    const { name } = c;
    cateMovie.push(" " + name);
  });

  infoMovie?.country.forEach((c) => {
    const { name } = c;
    countryMovie.push(" " + name);
  });

  return (
    <div className="infoMovie">
      {!infoMovie ? (
        <Loading />
      ) : (
        <>
          <div className="infoMovieCard">
            <div className="row">
              <div className="infoMovieTop l-9">
                <img src={infoMovie?.thumb_url} alt="" />
                {/* <div className="infoMovieInfo">
                  <div>
                    <div className="infoM   ovieInfoText">
                      <span>Trạng Thái: </span>
                      <span>{infoMovie?.episode_current}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Số tập: </span>
                      <span>{infoMovie?.episode_total}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Thời lượng: </span>
                      <span>{infoMovie?.time}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Năm phát hành: </span>
                      <span>{infoMovie?.year}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Chất lượng: </span>
                      <span>{infoMovie?.quality}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Ngôn ngữ: </span>
                      <span>{infoMovie?.lang}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Đạo diễn: </span>
                      <span>{infoMovie?.director.toString()}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Diễn viên: </span>
                      <span>{infoMovie?.actor.toString()}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Thể loại: </span>
                      <span>{cateMovie?.toString()}</span>
                    </div>
                    <hr />
                  </div>
  
                  <div>
                    <div className="infoMovieInfoText">
                      <span>Quốc gia: </span>
                      <span>{countryMovie?.toString()}</span>
                    </div>
                    <hr />
                  </div>
                </div> */}
                <div className="infoMovieContent">
                  <div className="infoMovieName">{infoMovie?.name}</div>
                  <div className="infoMovieDesc">
                    <p
                      dangerouslySetInnerHTML={{ __html: infoMovie?.content }}
                    ></p>
                  </div>

                  <div className="infoMovieEp">
                    <p>Chọn tập phim:</p>
                    <div className="infoMovieBtn">
                      {episodes?.server_data.map((d, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            router.push(`/xem-phim/${infoMovie.slug}/${d.slug}`)
                          }
                        >
                          {d.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoMovie;

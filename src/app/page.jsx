import axiosInstance from "../config";
import "./page.scss";
import GoodMovie from "@/components/goodMovie/GoodMovie";
import HomeList from "@/components/homeList/HomeList";
import Posts from "@/components/posts/Posts";

export default async function Home() {
  const res = await axiosInstance.get("/home");
  const resSeries = await axiosInstance.get(`/home?qHome=${"series"}`);
  const resMovies = await axiosInstance.get(`/home?qHome=${"movie"}`);
  const resHot = await axiosInstance.get(`/home?qHot=${true}`);

  const hotMovies = {
    data: resHot.data,
    name: "Phim hot mới cập nhật",
    path: "phim-hot-moi-cap-nhat/phim-hot",
  };

  const movies = {
    data: res.data,
    name: "Phim mới cập nhật",
    path: "phim-moi-cap-nhat/phim-moi",
  };
  const seriesMovies = {
    data: resSeries.data,
    name: "Phim bộ mới cập nhật",
    path: "phim-bo-moi-cap-nhat/series",
  };
  const movieMovies = {
    data: resMovies.data,
    name: "Phim lẻ mới cập nhật",
    path: "phim-le-moi-cap-nhat/movie",
  };

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <div className="home grid wide">
      <div className="row no-gutters">
        <div className="c-9">
          {isEmptyObject(hotMovies) && <HomeList movies={hotMovies} />}

          <HomeList movies={movies} />
          <HomeList movies={seriesMovies} />
          <HomeList movies={movieMovies} />
          <Posts />
        </div>
        <GoodMovie />
      </div>
    </div>
  );
}

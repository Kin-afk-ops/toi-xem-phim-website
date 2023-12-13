import axiosInstance from "../config";
import "./page.scss";
import HomeList from "@/components/homeList/HomeList";

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
  };
  const seriesMovies = {
    data: resSeries.data,
    name: "Phim bộ mới cập nhật",
  };
  const movieMovies = {
    data: resMovies.data,
    name: "Phim lẻ mới cập nhật",
  };

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <div>
      <HomeList movies={movies} />
      <HomeList movies={seriesMovies} />
      <HomeList movies={movieMovies} />
    </div>
  );
}

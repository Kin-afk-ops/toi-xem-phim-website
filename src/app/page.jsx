import Loading from "@/components/loading/Loading";
import axiosInstance from "../config";
import HomeList from "@/components/homeList/HomeList";

export default async function Home() {
  const res = await axiosInstance.get("/home");
  const resSeries = await axiosInstance.get(`/home?qHome=${"series"}`);
  const resMovies = await axiosInstance.get(`/home?qHome=${"movie"}`);

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

  return (
    <div>
      {movies.data.length === 10 &&
      seriesMovies.data.length === 10 &&
      movieMovies.data.length === 10 ? (
        <>
          <HomeList movies={movies} />
          <HomeList movies={seriesMovies} />
          <HomeList movies={movieMovies} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

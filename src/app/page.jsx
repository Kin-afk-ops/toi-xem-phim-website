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

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <div>
      {isEmptyObject(movies) ||
      isEmptyObject(seriesMovies) ||
      isEmptyObject(movieMovies) ? (
        <Loading />
      ) : (
        <>
          <HomeList movies={movies} />
          <HomeList movies={seriesMovies} />
          <HomeList movies={movieMovies} />
        </>
      )}
    </div>
  );
}

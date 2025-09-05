"use client";
import MovieListItem from "../../../components/movieListItem/MovieListItem";
import { useState, useEffect } from "react";
import "./list.scss";
import "./responsive.scss";
import Pagination from "../../../components/pagination/Pagination";

import axiosInstance from "../../../config";
import { useParams, useSearchParams } from "next/navigation";
import LoadingScreen from "../../../components/loading/Loading";

const Lists = () => {
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page");
  const [movies, setMovies] = useState([]);
  const [title, seTitle] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const slugMovie = params?.slug.split(".")[0];

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  const country = searchParams.get("country");
  const category = searchParams.get("category");

  const query = searchParams.get("q");

  useEffect(() => {
    let isMounted = true; // tránh memory leak khi component unmount
    setMovies([]);
    setLoading(true);

    const fetchMovies = async () => {
      try {
        let res;
        switch (slugMovie) {
          case "phim-moi-cap-nhat":
            res = await axiosInstance.get(
              `/movie?qNew=true&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);
            setTotalPage(res?.data.totalPage);
            seTitle("Phim mới cập nhập");
            break;

          case "phim-bo-moi-cap-nhat":
            res = await axiosInstance.get(
              `/movie?qCategory=series&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);
            setTotalPage(res?.data.totalPage);
            seTitle("Phim bộ mới cập nhật");
            break;

          case "phim-le-moi-cap-nhat":
            res = await axiosInstance.get(
              `/movie?qCategory=movie&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);
            setTotalPage(res?.data.totalPage);
            seTitle("Phim lẻ mới cập nhật");
            break;

          case "quoc-gia":
            res = await axiosInstance.get(
              `/movie?qCountry=${country}&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);

            setTotalPage(res?.data.totalPage);
            seTitle(`Phim ${country?.toUpperCase()}`);
            break;

          case "the-loai":
            res = await axiosInstance.get(
              `/movie?qCategory=${category}&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);
            setTotalPage(res?.data.totalPage);
            seTitle(`Phim ${category}`);
            break;

          case "tim-kiem":
            res = await axiosInstance.get(
              `/search/movie?search=${query}&qPage=${currentPage}`
            );
            if (!isMounted) return;
            setMovies(res?.data.movies);
            setTotalPage(res?.data.totalPage);
            seTitle(`Kết quả của "${query}"`);
            break;

          default:
            console.log("Không có slug phù hợp");
            break;
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false; // cleanup khi unmount
    };
  }, [slugMovie, currentPage, country, query, category]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="lists">
        <h1 className="mainTitle">{title}</h1>

        <div className="movieListItems row sm-gutter">
          {movies?.length > 0 ? (
            movies?.map((movie, index) => (
              <MovieListItem movie={movie} key={index} listMode={true} />
            ))
          ) : (
            <div className="movieListNoItems">Không có dữ liệu</div>
          )}
        </div>

        {movies?.length > 9 && (
          <Pagination
            totalPage={totalPage}
            path={params.slug}
            currentPage={currentPage}
            category={category}
            country={country}
            search={query}
          />
        )}
      </div>
    </>
  );
};

export default Lists;

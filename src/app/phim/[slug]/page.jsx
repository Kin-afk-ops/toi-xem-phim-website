import { convert } from "html-to-text";
import InfoMovie from "./InfoMovies";
import axiosInstance from "../../../config";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;

  const slugMovie = slug?.split(".")[0];

  const res = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_SOURCE_URL}/${slugMovie}`
  );
  const movie = await res.data;

  const title = "Xem phim " + movie?.movie.name;
  const description = convert(movie?.movie.content);
  const image = movie.movie.thumb_url;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      images: [image],
    },
  };
}

const InfoLayout = async ({ params }) => {
  const { slug } = await params;

  const slugMovie = slug?.split(".")[0];
  const res = await fetch(`${process.env.NEXT_PUBLIC_SOURCE_URL}/${slugMovie}`);

  const movie = await res.json();

  return <InfoMovie movie={movie} />;
};

export default InfoLayout;

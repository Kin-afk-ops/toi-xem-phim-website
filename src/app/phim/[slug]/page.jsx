import { convert } from "html-to-text";
import InfoMovie from "./InfoMovies";
import axiosInstance from "../../../config";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug.split(".")[0];

  // fetch data
  const res = await axiosInstance.get("https://ophim1.com/phim/" + slug);

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
  const slugMovie = params.slug.split(".")[0];
  const res = await axiosInstance.get("https://ophim1.com/phim/" + slugMovie);
  const movie = await res.data;

  return (
    <div>
      <InfoMovie movie={movie} />
    </div>
  );
};

export default InfoLayout;

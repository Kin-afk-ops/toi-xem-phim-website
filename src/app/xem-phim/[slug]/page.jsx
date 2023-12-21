import { convert } from "html-to-text";
import VideoPage from "./VideoPage";
import axiosInstance from "../../../config";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug.split(".")[0];
  const ep = searchParams.tap;

  // fetch data
  const res = await axiosInstance.get("https://ophim1.com/phim/" + slug);

  const movie = await res.data;

  let title = "";
  if (ep) {
    title = "Xem phim " + movie?.movie.name + " tập " + ep;
  } else {
    title = "Xem phim " + movie?.movie.name;
  }

  const description = convert(movie?.movie.content);

  return {
    title: title,
    description: description,
  };
}

const VideoLayout = ({ params }) => {
  return <VideoPage params={params} />;
};

export default VideoLayout;

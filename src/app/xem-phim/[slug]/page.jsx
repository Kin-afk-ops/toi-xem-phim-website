import { convert } from "html-to-text";
import VideoPage from "./VideoPage";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;
  const slugMovie = slug?.split(".")[0];

  const { tap: ep } = await searchParams;
  let movie;

  // fetch data
  if (slugMovie) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SOURCE_URL}/${slugMovie}`
    );

    movie = await res.json();
  }

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

const VideoLayout = () => {
  return <VideoPage />;
};

export default VideoLayout;

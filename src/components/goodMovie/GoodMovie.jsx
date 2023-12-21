import Image from "next/image";
import "./goodMovie.scss";
import "./responsive.scss";
import Link from "next/link";

const GoodMovie = ({ movies }) => {
  return (
    <div className="goodMovie l-3 m-0 s-0">
      <h2 className="mainTitle">PHIM HOT</h2>
      <ul>
        {movies?.map((movie, index) => (
          <Link className="link" href={`/phim/${movie.slug}.html`}>
            <li key={index}>
              <Image
                src={`https://img.ophim9.cc/uploads/movies/${movie.slug}-thumb.jpg`}
                alt="thumb"
                width={80}
                height={90}
              />
              <div>
                <p>{movie.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default GoodMovie;

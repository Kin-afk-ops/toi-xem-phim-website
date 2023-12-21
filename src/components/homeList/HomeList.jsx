import MovieLists from "../movieLists/MovieLists";

const HomeList = ({ movies }) => {
  return (
    <div>
      <MovieLists movies={movies} />
    </div>
  );
};

export default HomeList;

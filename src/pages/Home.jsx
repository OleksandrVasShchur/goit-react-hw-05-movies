import MoviesList from '../components/MoviesList/MoviesList';
import useFetchTrendMovies from '../hooks/useFetchTrendMovies';

import Loader from '../components/Loader/Loader';
import css from '../../src/pageStyle/pageStyle.module.css';
const Home = () => {
  const { movies, error, isLoading } = useFetchTrendMovies();

  return (
    <>
      <h1 className={css.mainText}>Trending today </h1>
      {error && <p textAlign="center">Something went wrong ...</p>}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;

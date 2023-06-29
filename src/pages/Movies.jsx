import useGetByQuery from '../hooks/useGetByQuery';
import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
const Movies = () => {
  const { movies, error, setSearchParams } = useGetByQuery();

  return (
    <>
      {' '}
      {error && <p textAlign="center">Something went wrong ...</p>}
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

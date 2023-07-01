import useGetByQuery from '../hooks/useGetByQuery';
import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import css from '../pageStyle/pageStyle.module.css';


const Movies = () => {
  const { movies, error, isEmpty, setSearchParams } = useGetByQuery();

  return (
    <>
      {' '}
      {error && <p textAlign="center">Something went wrong ...</p>}
      {isEmpty && (
       <p className={css.noFaundText}>No results...</p>
      )}
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

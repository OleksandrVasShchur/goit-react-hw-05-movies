import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../services/getInfo';

const useGetByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const currentQuery = searchParams.get('query');
    if (!currentQuery) {
      return;
    }

    const getMoviesByQ = async () => {
      try {
        const movieByQ = await getMovieByQuery(currentQuery);
        if(movieByQ.length === 0) {
          setIsEmpty(true);
          setMovies([]);
          return;

        }
        setMovies(movieByQ);
        setIsEmpty(false);

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQ();
  }, [searchParams, isEmpty]);
  return { movies, error, isLoading, isEmpty, setSearchParams };
};

export default useGetByQuery;

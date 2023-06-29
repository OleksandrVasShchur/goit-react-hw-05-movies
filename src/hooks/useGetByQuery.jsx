import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../services/getInfo';

const useGetByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const currentQuery = searchParams.get('query');
    if (!currentQuery) {
      return;
    }

    const getMoviesByQ = async () => {
      try {
        const movieByQ = await getMovieByQuery(currentQuery);
        setMovies(movieByQ);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQ();
  }, [searchParams]);
  return { movies, error, isLoading, setSearchParams };
};

export default useGetByQuery;

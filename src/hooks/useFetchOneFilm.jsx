import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/getInfo';

const UseFetchOneFilm = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getOneMovie = async () => {
      try {
        const film = await getMovieById(movieId);
        setMovie(film);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getOneMovie();
  }, [movieId]);
  return { movie, error, isLoading };
};

export default UseFetchOneFilm;

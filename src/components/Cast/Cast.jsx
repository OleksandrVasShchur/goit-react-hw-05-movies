import { BASE_POSTER_URL, PLACEHOLDER } from '../../services/getInfo';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getCast } from '../../services/getInfo';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchTotalCast = async () => {
      try {
        const cast = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTotalCast();
  }, [movieId]);

  return (
    <>
      {error && <p textAlign="center">Something went wrong ...</p>}
      {isLoading && <Loader />}
      <section>
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </ul>
      </section>
    </>
  );
};

export default Cast;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/getInfo';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const ReviewInfo = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    ReviewInfo();
  }, [movieId]);

    
    return ( 
    <>
      {error && <p textAlign="center">Something went wrong ...</p>}
      {isLoading && <Loader />}
      <section>
        {reviews.length === 0 && <p>There is no reviews...</p>}
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <span>Author:</span> {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </section>
    </>
  );
};

export default Reviews;

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
   
<div className={css.container}>
    {movies && movies.map(({id, original_title}) => (
    <li key={id}>
    <Link className={css.listLi} state={{from: location}} to={`/movies/${id}`}>
        {original_title}
    </Link>
    </li>
    ))}
   
</div>

  )
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
  }))
}

export default MoviesList;

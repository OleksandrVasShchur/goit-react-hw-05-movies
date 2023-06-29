import { Link, useLocation } from 'react-router-dom';
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



export default MoviesList;

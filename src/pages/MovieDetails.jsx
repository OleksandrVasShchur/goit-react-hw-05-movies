import { Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import UseFetchOneFilm from '../hooks/useFetchOneFilm';
import { BASE_POSTER_URL, PLACEHOLDER } from '../services/getInfo';

import Loader from 'components/Loader/Loader';
import css from '../pageStyle/pageStyle.module.css';
const MovieDetails = () => {
  const { movie, error, isLoading } = UseFetchOneFilm();

  const location = useLocation();
  const linkToBackHref = location.state?.from ?? '/movies';

  const { original_title, poster_path, vote_average, overview, genres } = movie;
  
  
  return (
    <section className={css.sectionMowDet}>
      <div>
        <Link className={css.goBackButton} to={linkToBackHref}>Go back</Link>
      </div>
      <div>
        {error && <p textAlign="center">Something went wrong ...</p>}
        {isLoading && <Loader />}

        <img className={css.imgMov}
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + poster_path
              : PLACEHOLDER + '?text=' + original_title
          }`}
          alt={movie.original_title}
        />
      </div>
      <div>
        <h1>{original_title}</h1>
        <p className={css.raiting}>
          User score: {(vote_average * 10).toFixed()} <span>%</span>
        </p>
        <p className={css.overview}>Overview</p>
        <p>{overview}</p>
        <p className={css.genress}>Genres:</p>
        <ul className={css.genressList}>
          {genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link className={css.castReviews} to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.castReviews} to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};
export default MovieDetails;

// import {
//     CountryWrapper,
//     CountryDescription,
//     Flag,
//     Image,
//     CountryTitle,
//     CountryCapital,
//     CountryDetail,
//     Accent,
//   } from './CountryInfo.styled';

//   export const CountryInfo = ({ country: {
//     flag,
//     capital,
//     countryName,
//     id,
//     languages = [],
//     population,
//   } }) => {
//     return (
//       <CountryWrapper >
//         <Flag>
//           <Image src={flag} alt={countryName} />
//         </Flag>
//         <CountryDescription>
//           <CountryCapital>
//             Capital: <Accent>{capital}</Accent>
//           </CountryCapital>

//           <CountryTitle>{countryName === 'Russian Federation' ? 'MORDOR' : countryName}</CountryTitle>

//           <CountryDetail>
//             Population: <Accent>{population}</Accent>
//           </CountryDetail>

//           <CountryDetail>
//             Languages: <Accent>{languages.join(', ')}.</Accent>
//           </CountryDetail>
//         </CountryDescription>
//       </CountryWrapper>
//     );
//   };

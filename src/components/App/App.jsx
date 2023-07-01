import {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFound = lazy(() => import('pages/NotFound'));
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const Movies = lazy(() => import('pages/Movies'));
const Home = lazy(() => import('pages/Home'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

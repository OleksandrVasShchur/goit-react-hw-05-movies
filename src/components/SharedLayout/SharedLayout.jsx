import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={css.navBox}>
          <NavLink className={css.navLinkStyle} to="/">Home</NavLink>
          <NavLink className={css.navLinkStyle} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

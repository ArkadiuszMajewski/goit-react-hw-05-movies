// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './componentLayout/ComponentLayout';

// const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}></Route>
    </Routes>
  );
};

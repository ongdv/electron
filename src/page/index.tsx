import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';

const IndexRouter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default IndexRouter;

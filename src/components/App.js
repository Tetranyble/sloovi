import React from 'react';
import { Routes } from "react-router-dom";

import Header from './Header';

export default function App({ children }) {
  return (
    <div>
      <Header />
      <Routes>
        {children}
      </Routes>
     
    </div>
  );
};

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterApp } from './router/RouterApp';

export const JournalApp = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
};

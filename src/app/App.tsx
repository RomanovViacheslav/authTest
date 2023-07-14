import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Router } from '../router';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import PageLinks from './pages/PageLinks';
import PageRouter from './pages/PageRouter';

function App() {
  return (
    <BrowserRouter>
    <div>
      <PageLinks />
      <PageRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;

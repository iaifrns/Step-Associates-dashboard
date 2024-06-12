import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// auth provider

import { DataProvider } from './contexts/DataContext';
import routes, { renderRoutes } from './routes';

const App = () => {

  return (
    <React.Fragment>
      <DataProvider>
        <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>{renderRoutes(routes)}</BrowserRouter>
      </DataProvider>
    </React.Fragment>
  );
};

export default App;

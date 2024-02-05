import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {privateRoutes} from './routes/browserRouter';

const App = () => {

  return (
      <RouterProvider router={ createBrowserRouter(privateRoutes) } />
  )
}

export default App;

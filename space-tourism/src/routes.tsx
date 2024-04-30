import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { Homepage } from './components/pages/Homepage';
import { Destination } from './components/pages/Destination';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        path: 'destination',
        element: <Destination />,
      },
    ],
  },
]);

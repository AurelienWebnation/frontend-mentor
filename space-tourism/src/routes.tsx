import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { Homepage } from './components/pages/Homepage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
    ],
  },
]);

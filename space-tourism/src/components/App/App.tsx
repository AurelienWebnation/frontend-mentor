import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}

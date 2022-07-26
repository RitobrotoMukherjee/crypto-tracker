import { Outlet } from 'react-router';
import Nav from './nav';

const mainLayout = () => (
  <>
    <Nav />
    <main>
      <Outlet />
    </main>
  </>

);

export default mainLayout;

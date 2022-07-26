import { Outlet } from 'react-router';
import Nav from './nav';

const mainLayout = () => (
  <div className="bg-primary text-white h-screen">
    <Nav />
    <main>
      <Outlet />
    </main>
  </div>

);

export default mainLayout;

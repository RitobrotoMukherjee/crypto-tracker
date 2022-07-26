import { Outlet } from 'react-router';
import Nav from './nav';

const mainLayout = () => (
  <div className="bg-primary text-white h-full font-body">
    <Nav />
    <main>
      <Outlet />
    </main>
  </div>

);

export default mainLayout;

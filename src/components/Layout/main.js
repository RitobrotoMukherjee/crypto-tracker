import { Outlet } from 'react-router';
import Nav from './nav';

const mainLayout = () => (
  <div className="bg-primary text-white min-h-screen h-full w-full font-body">
    <Nav />
    <main className="h-full bg-primary">
      <Outlet />
    </main>
  </div>

);

export default mainLayout;

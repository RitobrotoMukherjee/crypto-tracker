import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header className="p-2 shadow-lg">
    <nav className="flex justify-between items-center">
      <div className="flex-[1_1_25%]">
        <NavLink to="/">
          <i className="far fa-angle-left" />
        </NavLink>
      </div>
      <div className="flex-[1_1_25%] text-center">
        <p>Crypto List</p>
      </div>
      <ul className="flex flex-row justify-end items-center flex-[1_1_25%]">
        <li className="mr-5">
          <NavLink to="/">
            <i className="far fa-microphone" />
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink to="/">
            <i className="fal fa-cog" />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;

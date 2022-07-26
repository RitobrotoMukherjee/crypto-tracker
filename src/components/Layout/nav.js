import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <NavLink to="/">
        <i className="far fa-angle-left" />
      </NavLink>
      <div>
        <p>Crypto List</p>
      </div>
      <ul>
        <NavLink to="/">
          <li>

            <i className="far fa-microphone" />

          </li>
        </NavLink>
        <NavLink to="/">
          <li>

            <i className="fal fa-cog" />

          </li>
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default Nav;

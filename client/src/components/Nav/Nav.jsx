import React, { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            VPN Morda
          </Link>
          <div className=" navbar-collapse ms-10" id="navbarNav">
            <ul className="navbar-nav">
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/auth/signout"
                      className="nav-link"
                    >
                      Выход
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/personalarea"
                      className="nav-link"
                    >
                      Личный кабинет
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Документация
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

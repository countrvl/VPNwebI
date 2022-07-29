/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';

function Main() {
  const user = useSelector((store) => store.user);

  return (
    <div>
      {user ? (
        <div className="d-flex justify-content-center align-items-center">
          <h1>
            Добро пожаловать
            {' '}
            {user.userName}
            {' '}
            в лучший VPN сервис
          </h1>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className={`${styles.div}`}>
            <img className="rounded-circle" src="https://img.freepik.com/premium-vector/vpn-icon-with-shield-vector_116137-3682.jpg?w=360" />
            <div className={`d-flex justify-content-center mt-3 ${styles.div}`}><h3 className={`${styles.colorMainText}`}>VPN MORDA</h3></div>
            <div className={`row ${styles.div}`}>
              <button className="col btn btn-primary ms-1" type="button">
                <NavLink
                  to="/auth/signin"
                  className={`nav-link ${styles.colorBut}`}
                >
                  Вход
                </NavLink>
              </button>
              <button className="col btn btn-primary ms-1" type="button">
                <NavLink
                  to="/auth/signUp"
                  className={`nav-link ${styles.colorBut}`}
                >
                  Регистрация
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default Main;

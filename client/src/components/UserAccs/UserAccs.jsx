/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as endPoints from '../../config/endPoints';

function UserAccs() {
  const [list, setList] = useState();

  useEffect(() => {
    fetch(endPoints.getUserAllAcc(), { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="card">
        <form className="p-1 d-flex flex-column">
          <input type="text" placeholder="Логин" className="from-control" />
          <input type="password" placeholder="Пароль" className="from-control mt-1" />
          <button type="submit" className="btn btn-primary">Создать Аккаунт</button>
        </form>
      </div>
      <div className="mt-3">
        <label htmlFor="listAccs" className="text-danger fs-4">Мои аккаунты:</label>
        <div className="list-group" id="listAccs">
          {list?.map((acc) => (
            <div className="list-group-item mt-1" key={acc.id}>
              Логин:
              {' '}
              <strong>{acc.ac_name}</strong>
              {' '}
              , Пароль:
              {' '}
              <strong>**********</strong>
              <Link to={`/admacc/${acc.id}`}><button className="btn btn-primary ms-2" type="button">изменить</button></Link>
              <button className="btn btn-danger ms-2" type="button">удалить</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserAccs;

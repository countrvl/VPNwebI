/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAllAccsThunk, getAllAccsThunk } from '../../redux/actions/allAccsActions&Thunks/allAccsThunks';

import * as endPoints from '../../config/endPoints';


function UserAccs() {
  const list = useSelector((store) => store.allAccs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccsThunk());
  }, []);

  useEffect(() => {
    console.log(list);
  });

  const deleteHandler = (id) => {
    dispatch(deleteAllAccsThunk(id));
  };

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
              <button onClick={() => deleteHandler(acc.id)} className="btn btn-danger ms-2" type="button">удалить</button>

           //   <button className="btn btn-danger ms-2" type="button">удалить</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserAccs;

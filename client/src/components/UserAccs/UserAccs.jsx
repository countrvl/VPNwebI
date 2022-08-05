/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllAccsThunk, deleteAllAccsThunk, getAllAccsThunk } from '../../redux/actions/allAccsActions&Thunks/allAccsThunks';
import styles from './UserAccs.module.css';

function UserAccs() {
  const [input, setInput] = useState({
    acname: '',
    pass: '',
  });

  const list = useSelector((store) => store.allAccs);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccsThunk());
  }, []);

  const deleteHandler = (id) => {
    dispatch(deleteAllAccsThunk(id));
  };

  return (
    <div className="mt-3 d-flex flex-column align-items-center w-75">
      <h3><label htmlFor="listAccs" className="text fs-4">Мои аккаунты:</label></h3>
      {list.length
        ? (
          <div className={`list-group ${styles.scroll}`} id="listAccs">
            {list?.map((acc) => (
              <div className="myAccText list-group-item mt-1 w-100" key={acc.id}>
                Логин:
                {' '}
                <strong>{acc.ac_name}</strong>
                {' '}
                , Пароль:
                {' '}
                <strong>**********</strong>
                <Link to={`/accs/${acc.id}`}><button className="btn btn-primary ms-2" type="button">изменить</button></Link>
                <button onClick={() => deleteHandler(acc.id)} className="btn btn-danger ms-2" type="button">удалить</button>
              </div>
            )).reverse()}
          </div>
        ) : <h1>СПИСОК ПУСТ</h1>}
    </div>
  );
}

export default UserAccs;

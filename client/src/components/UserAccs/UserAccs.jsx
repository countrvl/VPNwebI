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

  const changeHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user?.status) {
      dispatch(addAllAccsThunk(input));
    }
    alert('Вы заблокированы, обратитесь к Администратору');
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="createAcc card">
        <form onSubmit={submitHandler} className="p-1 d-flex flex-column">
          <input type="text" onChange={changeHandler} name="acname" value={input.acname} placeholder="Логин" className="from-control" />
          <input type="password" onChange={changeHandler} name="pass" value={input.pass} placeholder="Пароль" className="from-control mt-1" />
          <button type="submit" className="btn btn-primary">Создать Аккаунт</button>
        </form>
      </div>
      <div className="mt-3 d-flex flex-column align-items-center">
        <h3><label htmlFor="listAccs" className="fs-4">Мои аккаунты:</label></h3>
        {list.length
          ? (
            <div className={`list-group ${styles.scroll}`} id="listAccs">
              {list?.map((acc) => (
                <div className="myAccText list-group-item mt-1" key={acc.id}>
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
    </div>
  );
}

export default UserAccs;

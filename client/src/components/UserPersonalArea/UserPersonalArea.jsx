/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllAccsThunk } from '../../redux/actions/allAccsActions&Thunks/allAccsThunks';
import UserAccs from '../UserAccs/UserAccs';

function UserPersonalArea() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    acname: '',
    pass: '',
  });

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
    } else {
      alert('Вы заблокированы, обратитесь к Администратору');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-evenly align-items-center w-75">
        <div className="userAcc card" id="myCard" style={{ width: '20vw' }}>
          <div className="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 className="card-title">{user.userName}</h5>
            <div className="card-text">
              Email:
              {' '}
              {user.email}
            </div>
            <Link to="/myuser"><button type="button" className="btn btn-primary mt-2">Изменить</button></Link>
          </div>
        </div>
        <div className="createAcc card">
          <form onSubmit={submitHandler} className="p-1 d-flex flex-column justify-content-between">
            <input type="text" onChange={changeHandler} name="acname" value={input.acname} placeholder="Логин" className="from-control" />
            <input type="password" onChange={changeHandler} name="pass" value={input.pass} placeholder="Пароль" className="from-control mt-1" />
            <button type="submit" className="btn btn-primary">Создать Аккаунт</button>
          </form>
        </div>
      </div>
      <UserAccs />
    </div>
  );
}

export default UserPersonalArea;

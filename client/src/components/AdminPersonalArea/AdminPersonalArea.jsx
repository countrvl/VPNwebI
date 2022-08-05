/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllAccsThunk } from '../../redux/actions/allAccsActions&Thunks/allAccsThunks';
import UserAccs from '../UserAccs/UserAccs';
import UserList from './UserList/UserList';

function PersonalAreaAdmin() {
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
      <div className="d-flex justify-content-evenly w-75">
        <div className="adminForm card" id="myCard">
          <div className="card-body p-1 d-flex flex-column justify-content-between">
            <h5 className="text card-title fixUserInfo">{user.userName}</h5>
            <div className="text card-text fixUserInfo">
              Email:
              {' '}
              {user.email}
            </div>
            <Link to="/myuser" className="d-flex justify-content-center"><button type="button" className="btn btn-primary mt-2 fixUserInfo">Изменить</button></Link>
            <Link to="/personalarea/userslist" className="d-flex justify-content-center"><button type="button" className="btn btn-primary mt-2 fixUserInfo">Учётные записи</button></Link>
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

export default PersonalAreaAdmin;

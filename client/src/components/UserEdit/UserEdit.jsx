/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { disableLoader, enableLoader } from '../../redux/actions/loaderAction';
import Loader from '../Loader/Loader';
import * as endPoints from '../../config/endPoints';

function UserEdit() {
  const [checkButt, setCheckButt] = useState();

  const [userEdit, setUserEdit] = useState({
    email: '',
    userName: '',
    password: '',
    status: '',
  });

  const loader = useSelector((state) => state.loader);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableLoader());
    fetch(endPoints.getUser(user.id), { credentials: 'include' })
      .then((response) => response.json())
      .then((userData) => setUserEdit((prev) => ({
        ...prev,
        email: userData.email,
        userName: userData.userName,
        password: userData.password,
        status: userData.status,
      })))
      .finally(() => {
        dispatch(disableLoader());
      });
  }, []);

  const changeHandler = (e) => {
    setUserEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userEdit);
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(endPoints.editUser(payload, navigate));
    }
  };

  const submitHandlerBlock = (e) => {
    e.preventDefault();
    setCheckButt(!checkButt);
  };

  if (loader) return <Loader />;

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3"
      >
        <legend className="text text-center mb-4">User Edit</legend>
        <div className="mb-3">
          <label htmlFor="userEditInput0" className="form-label">Электронная почта:</label>
          <input
            onChange={changeHandler}
            id="userEditInput0"
            className="form-control"
            value={userEdit.email}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userEditInput1" className="form-label">Имя пользователя:</label>
          <input
            onChange={changeHandler}
            id="userEditInput1"
            className="form-control"
            value={userEdit.userName}
            type="text"
            name="userName"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userEditInput2" className="form-label">Пароль:</label>

          <input
            onChange={changeHandler}
            id="userEditInput2"
            className="form-control"
            value={userEdit.password}
            type="text"
            name="password"
            placeholder="Pass"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" onClick={submitHandlerBlock} className={checkButt ? 'btn btn-primary' : 'btn btn-danger'}>
            {checkButt ? 'Разблокировать' : 'Заблокировать'}
          </button>
          <button type="submit" className="btn btn-primary ms-1">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;

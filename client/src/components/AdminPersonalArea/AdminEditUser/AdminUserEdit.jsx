/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { disableLoader, enableLoader } from '../../../redux/actions/loaderAction';
import Loader from '../../Loader/Loader';
import * as endPoints from '../../../config/endPoints';

function AdminUserEdit() {
  const { id } = useParams();

  const [checkButt, setCheckButt] = useState(false);

  const [userEdit, setUserEdit] = useState({
    email: '',
    userName: '',
    password: '',
    adm: '',
    status: '',
  });

  const loader = useSelector((state) => state.loader);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableLoader());
    fetch(endPoints.getUser(id), { credentials: 'include' })
      .then((response) => response.json())
      .then((userData) => setUserEdit((prev) => ({
        ...prev,
        email: userData.email,
        userName: userData.userName,
        password: userData.password,
        adm: userData.adm,
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
      // dispatch(editUser(payload, navigate));
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
        <legend className="text-center mb-4">User Edit</legend>
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

        <div className="mb-3">
          <label htmlFor="userEditInput3" className="form-label">Статус админа:</label>

          <input
            onChange={changeHandler}
            id="userEditInput3"
            className="form-control"
            value={userEdit.adm}
            type="text"
            name="adm"
            placeholder="Admin"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userEditInput4" className="form-label">Статус учётной записи:</label>

          <input
            onChange={changeHandler}
            id="userEditInput4"
            className="form-control"
            value={userEdit.status}
            type="text"
            name="status"
            placeholder="Status"
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

export default AdminUserEdit;
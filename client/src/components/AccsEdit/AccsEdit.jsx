/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AccsEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [checkButt, setCheckButt] = useState(false);

  const [userEdit, setUserEdit] = useState({
    ac_name: '',
    pass: '',
    status: '',
  });

  const changeHandler = (e) => {
    setUserEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userEdit);
    if (payload.length) {
      payload = Object.fromEntries(payload);
      // dispatch(editUser(payload, navigate));
      console.log(id, navigate);
    }
  };

  const submitHandlerBlock = (e) => {
    e.preventDefault();
    setCheckButt(!checkButt);
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3"
      >
        <legend className="text-center mb-4">User Edit</legend>
        <div className="mb-3">
          <label htmlFor="userEditInput0" className="form-label">Имя аккаунта:</label>
          <input
            onChange={changeHandler}
            id="userEditInput0"
            className="form-control"
            value={userEdit.ac_name}
            type="text"
            name="ac_name"
            placeholder="Логин"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userEditInput1" className="form-label">Пароль:</label>
          <input
            onChange={changeHandler}
            id="userEditInput1"
            className="form-control"
            value={userEdit.pass}
            type="password"
            name="pass"
            placeholder="Пароль"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" onClick={submitHandlerBlock} className={checkButt ? 'btn btn-primary' : 'btn btn-danger'}>
            {checkButt ? 'Разблокировать' : 'Заблокировать'}
          </button>
          <button type="submit" className="btn btn-primary ms-1">
            Изменить
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccsEdit;

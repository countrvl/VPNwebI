/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as endPoints from '../../config/endPoints';
import { editAllAccsThunk } from '../../redux/actions/allAccsActions&Thunks/allAccsThunks';

function AccsEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [checkButt, setCheckButt] = useState(false);

  const [acccEdit, setAccEdit] = useState({
    ac_name: '',
    pass: '',
  });

  useEffect(() => {
    axios.get(endPoints.getOneAcc(id))
      .then((response) => setAccEdit((prev) => ({
        ...prev,
        ac_name: response.data.ac_name,
        pass: response.data.pass,
      })));
  }, []);

  const changeHandler = (e) => {
    setAccEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(acccEdit);
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(editAllAccsThunk(id, payload, navigate));
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
        className="userEdit d-flex flex-column align-items-center"
      >
        <legend className="text-center mb-4">Изменение аккаунта</legend>
        <div className="mb-3">
          <label htmlFor="userEditInput0" className="form-label">Имя аккаунта:</label>
          <input
            onChange={changeHandler}
            id="userEditInput0"
            className="form-control"
            value={acccEdit.ac_name}
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
            value={acccEdit.pass}
            type="text"
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

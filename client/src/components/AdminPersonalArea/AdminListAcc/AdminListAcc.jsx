/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sha256 from 'sha256';
import * as endPoints from '../../../config/endPoints';

function AdminListAcc() {
  const { id } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(endPoints.getAllAccAdm(id), { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error(error));
  }, []);

  if (list.length === 0) return <p>ПУСТО</p>;
  return (
    <div className="d-flex justify-content-center">
      <div className="list-group">
        {list.map((acc) => (
          <div className="list-group-item mt-1">
            Логин:
            {' '}
            <stron>{acc.ac_name}</stron>
            {' '}
            , Пароль:
            {' '}
            <strong>{sha256(acc.pass)}</strong>
            <button className="btn btn-primary ms-2" type="button">изменить</button>
            <button className="btn btn-danger ms-2" type="button">удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminListAcc;
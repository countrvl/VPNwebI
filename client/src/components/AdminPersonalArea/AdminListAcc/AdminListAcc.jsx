/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
          <div className="list-group-item mt-1" key={acc.id}>
            Логин:
            {' '}
            <strong>{acc.ac_name}</strong>
            {' '}
            , Пароль:
            {' '}
            <strong>**********</strong>
            <Link to={`/admacc/${acc.id}`}><button className="btn btn-primary ms-2" type="button">изменить</button></Link>
            <button className="btn btn-danger ms-2" type="button">удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminListAcc;

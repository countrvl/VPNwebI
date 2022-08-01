import React, { useEffect, useState } from 'react';
import * as endPoints from '../../../config/endPoints';

function UserAccs() {
  const [list, setList] = useState();

  useEffect(() => {
    fetch(endPoints.getUserAllAcc(), { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  console.log(list);
  return (
    <div className="d-flex justify-content-center">
      <div className="list-group">
        {list?.map((acc) => (
          <div className="list-group-item mt-1" key={acc.id}>
            Логин:
            {' '}
            <strong>{acc.ac_name}</strong>
            {' '}
            , Пароль:
            {' '}
            <strong>**********</strong>
            <button className="btn btn-primary ms-2" type="button">изменить</button>
            <button className="btn btn-danger ms-2" type="button">удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserAccs;

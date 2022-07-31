import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as endPoints from '../../../config/endPoints';
import { disableLoader, enableLoader } from '../../../redux/actions/loaderAction';
import Loader from '../../Loader/Loader';

function UserList() {
  const currentUser = useSelector((store) => store.user);
  const [list, setList] = useState([]);

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(enableLoader());
    fetch(endPoints.getAllUsers(), { credentials: 'include' })
      .then((response) => response.json())
      .then((users) => setList(users))
      .catch((e) => console.error('>>>>>>>>>', e))
      .finally(() => {
        dispatch(disableLoader());
      });
  }, []);

  if (loader) return <Loader />;

  if (list.length === 0) return <p>ПУСТО</p>;

  return (

    <div className="d-flex justify-content-center">
      <div className="list-group">
        {list.map((user) => (
          <div
            key={user.id}
            className={`list-group-item list-group-item-action ${
              userId === user.id ? 'active' : ''
            } mt-1`}
          >
            Имя:
            {' '}
            <strong>{user.userName}</strong>
            , E-Mail:
            {' '}
            <strong>{user.email}</strong>
            {' '}
            , Статус:
            {' '}
            <strong>{user.status ? 'разблокирован' : 'заблокирован'}</strong>
            {user.email === currentUser.email ? (
              <Link to="/myuser">
                {' '}
                <button className="btn btn-light text-primary ms-2" type="button">изменить</button>
              </Link>
            ) : (
              <>
                <Link to={`/user/${user.id}`}><button className="btn btn-primary ms-2" type="button">изменить</button></Link>
                <Link to={`/admaccs/${user.id}`}><button className="btn btn-primary ms-2" type="button">аккаунты</button></Link>
                <button className="btn btn-danger ms-2" type="button">удалить</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;

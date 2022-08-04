import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { disableLoader, enableLoader } from '../../../redux/actions/loaderAction';

import Loader from '../../Loader/Loader';
import { deleteAllUserThunk, getAllUserThunk } from '../../../redux/actions/allUsersActions&Thunks/allUsersThunks';

function UserList() {
  console.log('UserList');
  const currentUser = useSelector((store) => store.user);
  let list = useSelector((store) => store.allUsers);

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);
  const userId = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(enableLoader());
    dispatch(getAllUserThunk());
    dispatch(disableLoader());
  }, []);

  const deleteHandler = (id) => {
    dispatch(deleteAllUserThunk(id));
  };

  if (loader && currentUser) return <Loader />;

  if (list.length === 0) return <p className="text">Not users</p>;

  list = list.filter((obj) => obj.id !== userId.id);

  return (

    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-75 align-items-center">
        <h3><label className="text" htmlFor="list1">Учетные записи всех пользователей:</label></h3>
        <div className="list-group" id="list1">
          {list.map((user) => (
            <div
              key={user.id}
              className="list-group-item list-group-item mt-2"
            >
              Имя:
              {' '}
              <strong className="text">{user.userName}</strong>
              , E-Mail:
              {' '}
              <strong className="text">{user.email}</strong>
              {' '}
              , Статус:
              {' '}
              <strong className="text">{user.status ? 'разблокирован' : 'заблокирован'}</strong>
              {user.email === currentUser.email ? (
                <Link to="/myuser"><button className="btn btn-light text-primary ms-2" type="button">изменить</button></Link>
              ) : (
                <>
                  <Link to={`/personalarea/user/${user.id}`}><button className="btn btn-primary ms-2" type="button">изменить</button></Link>
                  {user.status ? <Link to={`/personalarea/admaccs/${user.id}`}><button className="btn btn-primary ms-2" type="button">аккаунты</button></Link>
                    : <button onClick={() => alert('Разблокируйте учетную запись')} className="btn btn-primary ms-2" type="button">аккаунты</button>}
                  <button onClick={() => deleteHandler(user.id)} className="btn btn-danger ms-2" type="button">удалить</button>
                </>
              )}
            </div>
          )).reverse()}
        </div>
      </div>
    </div>
  );
}

export default UserList;

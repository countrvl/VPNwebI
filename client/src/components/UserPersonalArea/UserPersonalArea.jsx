import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UserPersonalArea() {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <div className="card " style={{ width: '18rem' }}>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{user.userName}</h5>
        <div className="card-text">
          Email:
          {' '}
          {user.email}
        </div>
        <Link to="/myuser"><button type="button" className="btn btn-primary mt-2">Изменить</button></Link>
      </div>
    </div>
  );
}

export default UserPersonalArea;

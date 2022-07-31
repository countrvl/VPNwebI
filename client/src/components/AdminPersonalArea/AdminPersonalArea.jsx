import React from 'react';
import UserList from './UserList/UserList';

function PersonalAreaAdmin() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Учетные записи всех пользователей
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="mb-3"><UserList /></div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAreaAdmin;
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import UserEdit from './components/UserEdit/UserEdit';
import SignOut from './components/Forms/SignOut/SignOut';
import Nav from './components/Nav/Nav';
import SignUp from './components/Forms/SignUp/SignUp';
import SignIn from './components/Forms/SignIn/SignIn';
import Main from './components/Main/Main';
import AdminPersonalArearea from './components/AdminPersonalArea/AdminPersonalArea';
import AdminUserEdit from './components/AdminPersonalArea/AdminEditUser/AdminUserEdit';
import { checkAuth } from './redux/actions/userAction';
import AdminListAcc from './components/AdminPersonalArea/AdminListAcc/AdminListAcc';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <Nav />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personalarea" element={<PrivateRoute><AdminPersonalArearea /></PrivateRoute>} />
          <Route path="/myuser" element={<PrivateRoute><UserEdit /></PrivateRoute>} />
          <Route path="/user/:id" element={<PrivateRoute><AdminUserEdit /></PrivateRoute>} />
          <Route path="/admaccs/:id" element={<PrivateRoute><AdminListAcc /></PrivateRoute>} />
          <Route path="/auth/signout" element={<PrivateRoute><SignOut /></PrivateRoute>} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

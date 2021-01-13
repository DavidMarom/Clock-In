import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import frontlogo from '../assets/img/front-page-logo.png';

import { login, logout } from '../store/actions/userActions';

export const Login = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [msg, setMsg] = useState('');
  const [loginCred, setLoginCred] = useState({ email: '', password: '' });

  const loginHandleChange = ev => {
    const { name, value } = ev.target;
    setLoginCred({ ...loginCred, [name]: value })
  };

  const doLogin = async ev => {
    ev.preventDefault();
    const { email, password } = loginCred;
    if (!email || !password) { return setMsg('Please enter user/password'); }
    const userCreds = { email, password };
    dispatch(login(userCreds));
    setLoginCred({ email: '', password: '' });
  };

  let loginSection = (
    <form onSubmit={doLogin}>
      <input className="login-input" type="text" name="email" value={loginCred.email} onChange={loginHandleChange} placeholder="Email" /><br />
      <input className="login-input" type="password" name="password" value={loginCred.password} onChange={loginHandleChange} placeholder="Password" /><br />
      <div><button className="login-btn">Login</button><br /></div>
    </form>
  );

  return (
    <div className="cb">
      <img className=" img-356p" src={frontlogo} alt="" />
      <h2>{msg}</h2>
      {loggedInUser && (
        <div>
          <h2>Welcome: {loggedInUser.email} </h2>
          <button onClick={dispatch(logout)}>Logout</button>
        </div>
      )}
      <div className="ca h200">{!loggedInUser && loginSection}</div>
    </div>
  );
}
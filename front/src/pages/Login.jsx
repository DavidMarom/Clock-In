import React, { useState } from 'react';
import { connect } from 'react-redux';
import frontlogo from '../assets/img/front-page-logo.jpg';

import { loadUsers, removeUser, login, logout, signup } from '../store/actions/userActions';

const _Login = (props) => {
  const [msg, setMsg] = useState('');
  const [loginCred, setLoginCred] = useState({ email: '', password: '' });

  const loginHandleChange = ev => {
    const { name, value } = ev.target;
    setLoginCred({ ...loginCred, [name]: value })
  };

  const doLogin = async ev => {
    ev.preventDefault();
    const { email, password } = loginCred;
    if (!email || !password) {
      return setMsg('Please enter user/password');
    }
    const userCreds = { email, password };
    props.login(userCreds);
    setLoginCred({ email: '', password: '' });
  };


  let loginSection = (
    <form onSubmit={doLogin}>
      <input type="text" name="email" value={loginCred.email} onChange={loginHandleChange} placeholder="Email" />
      <br />
      <input type="password" name="password" value={loginCred.password} onChange={loginHandleChange} placeholder="Password" />
      <br />
      <button>Login</button>
    </form>
  );

  const { loggedInUser } = props;
  return (
    <div className="ca">
      <img className=" img-100p" src={frontlogo} alt="" />
      <h1>Login</h1>
      <h2>{msg}</h2>
      {loggedInUser && (
        <div>
          <h2>Welcome: {loggedInUser.email} </h2>
          <button onClick={props.logout}>Logout</button>
        </div>
      )}
      <div className="ca h100">
        {!loggedInUser && loginSection}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
    isLoading: state.system.isLoading
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,
  removeUser,
  loadUsers
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);

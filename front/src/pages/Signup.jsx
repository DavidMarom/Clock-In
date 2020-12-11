import React, { useState } from 'react';
import { connect } from 'react-redux';
import frontlogo from '../assets/img/front-page-logo.jpg';

import { loadUsers, removeUser, login, logout, signup } from '../store/actions/userActions';

const _Signup = (props) => {
  const [msg, setMsg] = useState('');
  const [signupCred, setSignupCred] = useState({ email: '', password: '' });

  const signupHandleChange = ev => {
    const { name, value } = ev.target;
    setSignupCred({ ...signupCred, [name]: value })
  };

  const doSignup = async ev => {
    ev.preventDefault();
    const { email, password } = signupCred;
    if (!email || !password) {
      return setMsg('All inputs are required!');
    }
    const signupCreds = { email, password };
    props.signup(signupCreds);
    setSignupCred({ email: '', password: '' });
  };

  let signupSection = (
    <form onSubmit={doSignup}>
      <input className="login-input" type="text" name="email" value={signupCred.email} onChange={signupHandleChange} placeholder="Email" />
      <br />
      <input  className="login-input" name="password" type="password" value={signupCred.password} onChange={signupHandleChange} placeholder="Password" />
      <br />
      <button className="login-btn">Signup</button>
    </form>
  );

  const { loggedInUser } = props;
  return (
    <div className="ca">
      <img className=" img-100p" src={frontlogo} alt="" />
      <h1>Signup</h1>
      <h2>{msg}</h2>
      {loggedInUser && (
        <div>
          <h2>Welcome: {loggedInUser.email} </h2>
          <button onClick={props.logout}>Logout</button>
        </div>
      )}
      <div className="ca h200">
        {!loggedInUser && signupSection}
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

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup);

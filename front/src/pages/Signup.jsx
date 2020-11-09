import React, { Component } from 'react';
import { connect } from 'react-redux';
import frontlogo from '../assets/img/front-page-logo.jpg';

import {
  loadUsers,
  removeUser,
  login,
  logout,
  signup
} from '../store/actions/userActions';

class Test extends Component {
  state = {
    msg: '',
    
    signupCred: {
      email: '',
      password: '',
      username: ''
    }
  };


  signupHandleChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      signupCred: {
        ...prevState.signupCred,
        [name]: value
      }
    }));
  };


  doSignup = async ev => {
    ev.preventDefault();
    const { email, password } = this.state.signupCred;
    if (!email || !password) {
      return this.setState({ msg: 'All inputs are required!' });
    }
    const signupCreds = { email, password };
    this.props.signup(signupCreds);
    this.setState({ signupCred: { email: '', password: '' } });
  };


  render() {
    let signupSection = (

      <form onSubmit={this.doSignup}>
        <input
          type="text"
          name="email"
          value={this.state.signupCred.email}
          onChange={this.signupHandleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          type="password"
          value={this.state.signupCred.password}
          onChange={this.signupHandleChange}
          placeholder="Password"
        />

        <br />
        <button>Signup</button>
      </form>
    );
    

    const { loggedInUser } = this.props;
    return (
      <div className="ca">
        <img className=" img-100p" src={frontlogo} alt="" />

        <h1>Signup</h1>
        <h2>{this.state.msg}</h2>

        {loggedInUser && (
          <div>
            <h2>Welcome: {loggedInUser.email} </h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )}

        <div className="ca h100">

          {!loggedInUser && signupSection}
        </div>


      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);

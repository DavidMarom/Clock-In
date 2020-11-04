import React from 'react';
import { connect } from "react-redux";
import { loadUsers } from "./store/actions/userActions";

import { page01 } from './pages/page01.jsx';
import { page02 } from './pages/page02.jsx';
import { Home } from './pages/Home.jsx';
import { Admin } from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import editProfile from "./pages/editProfile.jsx";

import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { NavBar } from "./cmps/NavBar.jsx";
import { SideBar } from './cmps/SideBar.jsx';

import ui_img from './assets/img/ui.png';

function _App(props) {
  if (props.loggedInUser){
  return (
    <div className="App">
      <NavBar />
      <div className="outter-container">
        <div className="inner-container">
          <div className="ra">

            <div className="w200">
              {props.loggedInUser.name}
              <SideBar />
            </div>
            <div className="bg-01 center-part">
              <Switch>
                <Route exact component={Home} path={'/'} />
                <Route exact component={page01} path={'/page-01'} />
                <Route exact component={page02} path={'/page-02'} />
                <Route exact component={Admin} path={'/admin'} />
                <Route exact component={Login} path={'/login'} />
                <Route exact component={editProfile} path={'/profile'} />
              </Switch>
            </div>
          </div>
        </div>
      </div >

      {/* <img src={ui_img} alt="" /> */}

    </div >
  );}
  else{
    return <Login />
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser

  };
};

const mapDispatchToProps = {
  loadUsers
};


export default _App = connect(mapStateToProps, mapDispatchToProps)(withRouter(_App));

// export default withRouter(_App);

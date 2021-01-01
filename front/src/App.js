
import React, { useState } from "react";
import { connect } from "react-redux";
import { loadUsers, login } from "./store/actions/userActions";

import { Punch } from "./pages/Punch.jsx";
import { Home } from "./pages/Home.jsx";
import { Admin } from "./pages/Admin.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Reports } from "./pages/Reports.jsx";
import { Announcments } from "./pages/Announcments.jsx";
import { Documents } from "./pages/Documents.jsx";
import { TimeOff } from "./pages/TimeOff.jsx";
import editProfile from "./pages/editProfile.jsx";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { NavBar } from "./cmps/NavBar.jsx";
import { SideBar } from "./cmps/SideBar.jsx";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


function _App(props) {
  const [loginOrSignup, setLoginOrSignup] = useState(true);

  if (props.loggedInUser) {
    return (
      <div className="App">
        <NavBar />
        <div className="outter-container">
          <div className="inner-container">
            <div className="rb-top bg-deep-blue">
              <div className="cb">
                <SideBar />
              </div>

              <div className="main-container">
                <Switch>
                  <Route exact component={Home} path={"/"} />
                  <Route exact component={Punch} path={"/clockin"} />
                  <Route exact component={Admin} path={"/employees"} />
                  <Route exact component={Login} path={"/login"} />
                  <Route exact component={editProfile} path={"/profile"} />
                  <Route exact component={Reports} path={"/reports"} />
                  <Route exact component={Announcments} path={"/announcments"} />
                  <Route exact component={Documents} path={"/documents"} />
                  <Route exact component={TimeOff} path={"/timeoff"} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="outter-container">
        <div className="inner-container">
          {loginOrSignup ? <Login /> : <Signup />}



          <div className="cb">
            <button className="login-btn2" onClick={() => props.login({ email: "demo@user.com", password: 'qwerty' })}>Login as a guest</button>
            <div className="lnk-btn" onClick={() => { setLoginOrSignup(!loginOrSignup); }}>
              {loginOrSignup ? (<p>Dont have an account? Signup now!</p>) : (<p>Back to login page</p>)}
            </div>
          </div>



        </div>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
  };
};

const mapDispatchToProps = {
  loadUsers, login
};

export const App = connect(mapStateToProps, mapDispatchToProps)(withRouter(_App));

// export default withRouter(_App);

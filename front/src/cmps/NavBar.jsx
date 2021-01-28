import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadSettings } from '../store/actions/settingsActions'

import { logout } from '../store/actions/userActions'
import { UserAndRole } from './UserAndRole'
let tmp =
  'https://res.cloudinary.com/dojmo7vcc/image/upload/v1610371061/clock/profile_wgiuu9.png'

function _NavBar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadSettings())
  }, [])
  var settings = useSelector((state) => state.settingsReducer.settings)

  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  const pageName = useSelector((state) => state.user.pageName)
  return (
    <div>
      <div className="rb bg-07">
        <NavLink to="/">
          <div className="logo-cube">
            <div className="center-cropped2">
              {settings ? <img src={settings[0].img[0]} alt=""></img> : null}
            </div>
          </div>
        </NavLink>
        <div className="rb pad-2rem-l">
          <div className="ca">
            <div className="ral w200">
              <h2>{pageName}</h2>
            </div>
          </div>
          <div className="rar">
            <NavLink to="/profile">
              <UserAndRole />
            </NavLink>
            <div className="w100 pad-1rem">
              <NavLink to="/profile">
                <div className="center-cropped">
                  {loggedInUser.img ? (
                    <img src={loggedInUser.img[0]} alt=""></img>
                  ) : (
                    <img src={tmp} alt=""></img>
                  )}
                </div>
              </NavLink>
            </div>
            <button
              className="logout-btn w200"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const NavBar = _NavBar

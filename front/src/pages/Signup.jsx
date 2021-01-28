import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import frontlogo from '../assets/img/front-page-logo.png'

import {
  signup
} from '../store/actions/userActions'

const _Signup = (props) => {
  const [msg, setMsg] = useState('')
  const [signupCred, setSignupCred] = useState({ email: '', password: '' })

  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  // const users = useSelector(state => state.user.users)
  // const isLoading = useSelector(state => state.system.isLoading)

  const signupHandleChange = (ev) => {
    const { name, value } = ev.target
    setSignupCred({ ...signupCred, [name]: value })
  }

  const doSignup = async (ev) => {
    ev.preventDefault()
    const { email, password } = signupCred
    if (!email || !password) {
      return setMsg('All inputs are required!')
    }
    const signupCreds = { email, password }
    dispatch(signup(signupCreds))
    setSignupCred({ email: '', password: '' })
  }

  let signupSection = (
    <form onSubmit={doSignup}>
      <input
        className="login-input"
        type="text"
        name="email"
        value={signupCred.email}
        onChange={signupHandleChange}
        placeholder="Email"
      />
      <br />
      <input
        className="login-input"
        name="password"
        type="password"
        value={signupCred.password}
        onChange={signupHandleChange}
        placeholder="Password"
      />
      <br />
      <button className="login-btn">Signup</button>
    </form>
  )

  return (
    <div className="ca">
      <img className=" img-356p" src={frontlogo} alt="" />
      {/* <h3>Signup</h3> */}
      <h2>{msg}</h2>
      {loggedInUser && (
        <div>
          <h2>Welcome: {loggedInUser.email} </h2>
          <button onClick={props.logout}>Logout</button>
        </div>
      )}
      <div className="ca h200">{!loggedInUser && signupSection}</div>
    </div>
  )
}

export const Signup = _Signup

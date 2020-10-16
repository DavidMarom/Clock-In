import { userService } from '../../services/userService';

export function updateUser(user) {
  return async dispatch => {
    const _user = await userService.update(user);
    dispatch({ type: 'UPDATE_USER', _user })
  };
}


export function loadUsers(filterBy = {}) {
  return async dispatch => {
    const users = await userService.getUsers(filterBy);
    dispatch({ type: 'SET_USERS', users })
  };
}


// THUNK
export function removeUser(userId) {
  return async dispatch => {
    try {
      await userService.remove(userId);
      dispatch({ type: 'REMOVE_USER', userId });
    } catch (err) {
      console.log('UserActions: err in removeUser', err);
    }
  };
}
// THUNK
export function login(userCreds) {
  return async dispatch => {
    const user = await userService.login(userCreds);
    dispatch({ type: 'SET_USER', user });
  };
}
export function signup(userCreds) {
  return async dispatch => {
    const user = await userService.signup(userCreds);
    dispatch({ type: 'SET_USER', user });
  };
}
export function logout() {
  return async dispatch => {
    await userService.logout();
    dispatch({ type: 'SET_USER', user: null });
  };
}

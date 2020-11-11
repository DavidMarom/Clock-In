import { userService } from '../../services/userService';
import { loading, doneLoading } from './systemActions';

export function updateUser(user) {
  return async dispatch => {
    const _user = await userService.update(user);
    dispatch({ type: 'UPDATE_USER', _user })
  };
}

export function loadUsers(filter) {
  return async dispatch => {
    try {
      dispatch(loading());
      const users = await userService.getUsers(filter);
      dispatch({ type: 'SET_USERS', users });
    } catch (err) {
      console.log('UserActions: err in loadUsers', err);
      
    } finally {
      dispatch(doneLoading());
    }
  };
}

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

export function signup(userCreds) {
  return async dispatch => {
    const user = await userService.signup(userCreds);
    dispatch({ type: 'SET_USER', user });
  };
}

export function logout() {
  return async dispatch => {
    try {
      await userService.logout();
      dispatch({ type: 'SET_USER', user: null });
    } catch (err) {
      console.log('Log out problem: ', err)
    }
  };
}

export function login(userCreds) {
  return async dispatch => {
    const user = await userService.login(userCreds);
    dispatch({ type: 'SET_USER', user });
  };
}

export function getUserById(userId) {
  return async dispatch => {
    try {
      await userService.getById(userId);
      dispatch({ type: 'GET_USER', userId });
    } catch (err) {
      console.log('UserActions: err in getUser', err);
    }
  };
}
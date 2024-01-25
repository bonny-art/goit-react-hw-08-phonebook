import { connections } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = connections.BASE_URL;

export const signUpUser = async body => {
  const { data } = await axios.post(connections.USER_SIGNUP_ENDPOINT, body);

  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post(connections.USER_LOGIN_ENDPOINT, body);

  return data;
};

export const logOutUser = async body => {
  const { data } = await axios.post(connections.USER_LOGOUT_ENDPOINT, body);

  return data;
};

export const currentUser = async body => {
  const { data } = await axios.post(connections.USER_CURRENT_ENDPOINT, body);

  return data;
};

import { connections } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = connections.BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    delete axios.defaults.headers.common.Authorization;
  },
};

export const signUpUser = async body => {
  const { data } = await axios.post(connections.USER_SIGNUP_ENDPOINT, body);

  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post(connections.USER_LOGIN_ENDPOINT, body);

  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post(connections.USER_LOGOUT_ENDPOINT);

  return data;
};

export const currentUser = async () => {
  const { data } = await axios.get(connections.USER_CURRENT_ENDPOINT);

  return data;
};

export const updateAvatar = async file => {
  const { data } = await axios.patch(
    connections.USER_UPDATE_AVATAR_ENDPOINT,
    file,
    { headers: 'Content-Type: multipart/form-data' }
  );
  return data;
};

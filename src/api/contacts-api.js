import { connections } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = connections.BASE_URL;

export const getContacts = async () => {
  const { data } = await axios.get(connections.CONTACTS_ENDPOINT);

  return data;
};

export const postContact = async body => {
  const { data } = await axios.post(connections.CONTACTS_ENDPOINT, body);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${connections.CONTACTS_ENDPOINT}/${id}`);

  return data;
};

export const updateContact = async ({ id, body }) => {
  const { data } = await axios.patch(
    `${connections.CONTACTS_ENDPOINT}/${id}`,
    body
  );

  return data;
};

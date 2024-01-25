import { mockapi } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = mockapi.BASE_URL;

export const getContacts = async () => {
  const { data } = await axios.get(mockapi.CONTACTS_ENDPOINT);

  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post(
    mockapi.CONTACTS_ENDPOINT,
    JSON.stringify(contact),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${mockapi.CONTACTS_ENDPOINT}/${id}`);

  return data;
};

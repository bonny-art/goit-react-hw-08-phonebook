import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsList } from 'components';

import {
  ContactsListContainer,
  Message,
} from 'components/ContactsList/ContactsList.styled';

import { Loader } from 'components/Loader/Loader';

import {
  contactsSelectors,
  contactsActions,
} from 'store/contacts/contactsSlice';
import { selectFilteredContacts } from 'store/contacts/contactsSelectors';

export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsActions.fetchContactsAction());
  }, [dispatch]);

  const sortedContacts = contacts.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ContactsListContainer>
      {isLoading && <Loader />}
      {error && <Message>{error}</Message>}
      {contacts && <ContactsList contacts={sortedContacts} />}
    </ContactsListContainer>
  );
};

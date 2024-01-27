import React from 'react';

import { PhoneInputForm, Filter, Contacts } from 'components';
import { Header, Title } from 'components/Section/Section.styled';

export const ContactsPage = () => {
  return (
    <>
      <Header>Phonebook</Header>
      <PhoneInputForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </>
  );
};

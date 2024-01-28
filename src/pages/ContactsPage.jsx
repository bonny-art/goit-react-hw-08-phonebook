import React from 'react';

import { PhoneInputForm, Filter, Contacts } from 'components';
import { Header, Title } from 'components/Section/Section.styled';

const ContactsPage = () => {
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

export default ContactsPage;

import React from 'react';

import { PhoneInputForm, Filter, Contacts } from 'components';
import { Header, Section, Title } from 'components/Section/Section.styled';

export const ContactsPage = () => {
  return (
    <Section>
      <Header>Phonebook</Header>
      <PhoneInputForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Section>
  );
};

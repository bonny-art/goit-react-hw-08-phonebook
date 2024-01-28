import React from 'react';

import { ContactsListItem } from 'components';

export const ContactsList = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactsListItem>
        );
      })}
    </>
  );
};

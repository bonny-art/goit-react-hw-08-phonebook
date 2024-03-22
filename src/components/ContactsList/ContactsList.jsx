import React from 'react';

import { ContactsListItem } from 'components';

export const ContactsList = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ _id, name, number }) => {
        return (
          <ContactsListItem
            key={_id}
            id={_id}
            name={name}
            number={number}
          ></ContactsListItem>
        );
      })}
    </>
  );
};

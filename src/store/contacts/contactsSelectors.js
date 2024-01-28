export const selectFilteredContacts = state => {
  const { items } = state.contacts.contacts;
  const { filter } = state.filter;

  return items.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

// import { createSelector } from '@reduxjs/toolkit';

// import { handleFilter } from 'store/filter/filterHandlers';
// import { handleContacts } from './contactsHandlers';

// export const getFilteredContacts = createSelector(
//   [handleContacts, handleFilter],
//   (items, filter) => {
//     return items.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// );

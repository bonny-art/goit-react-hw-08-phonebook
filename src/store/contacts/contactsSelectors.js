import { createSelector } from '@reduxjs/toolkit';

const handleContacts = state => state.contacts.contacts.items;
const handleFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [handleContacts, handleFilter],
  (items, filter) => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);

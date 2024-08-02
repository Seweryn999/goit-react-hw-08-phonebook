import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.sandbox.contacts;
export const selectFilter = state => state.filter;
export const selectLoading = state =>state.sandbox.isLoading;
export const selectError = state => state.sandbox.error;

export const selectFiltered = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

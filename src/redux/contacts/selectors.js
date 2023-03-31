import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state =>  state.contacts.filter;

export const findedContacts = createSelector([selectContacts, selectFilter], (contacts, filterName) => {
    return contacts.filter( element => element.name.toLowerCase().includes(filterName.toLowerCase()))
})

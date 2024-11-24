import { createSelector } from 'reselect';
import { selectNameFilter } from "../filters/selectors";
import { selectNumFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  },
);

export const selectFilteredContactsByNum = createSelector(
  [selectContacts, selectNumFilter], (contacts, filter) => {
    return contacts.filter(contact =>
  contact.number.includes(filter));
  },
);
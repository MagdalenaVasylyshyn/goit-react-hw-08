import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";
export const selectNameFilter = state => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
      return contacts.length > 0
        ? contacts.filter(
            (contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) ||
              contact.number.includes(filter)
          )
        : [];
  }
);
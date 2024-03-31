import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return nameFilter === ""
      ? contacts
      : contacts.filter(
          (contact) =>
            contact.name
              .toLowerCase()
              .includes(nameFilter.filter.toLowerCase()) ||
            contact.number.includes(nameFilter.filter)
        );
  }
);
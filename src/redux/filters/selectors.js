import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";
export const selectFilter = (state) => state.filters.values;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    {
      return contacts.length > 0
        ? contacts.filter(
            (contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) ||
              contact.number.includes(filter)
          )
        : [];
    }
  }
);

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, nameFilter) => {
//       return contacts.filter(
//         (contact) =>
//           contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
//           contact.number.toLowerCase().includes(nameFilter.toLowerCase())
//       );
//     }
// );



// import { createSelector } from "@reduxjs/toolkit";
// import { selectContacts } from "../contacts/selectors";

// export const selectNameFilter = (state) => state.filters.name;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, nameFilter) => {
//     return nameFilter === ""
//       ? contacts
//       : contacts.filter(
//           (contact) =>
//             contact.name
//               .toLowerCase()
//               .includes(nameFilter.filter.toLowerCase()) ||
//             contact.number.includes(nameFilter.filter)
//         );
//   }
// );
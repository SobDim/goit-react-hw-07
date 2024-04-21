import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contactsOps';
import { selectedName } from './filtersSlice';

// const initialContacts = {
//   contacts: {
//     items: [],
//   },
// };

const initialContacts = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          deleteContactThunk.fulfilled,
          addContactThunk.fulfilled
        ),
        state => {
          state.loading = false;
        }
      );
  },
});

export const selectContacts = state => state.contacts.contacts;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectedName],
  (contacts, filter) => {
    const searchData = filter.toLowerCase();
    return contacts?.filter(
      contact =>
        contact.name.toLowerCase().includes(searchData) ||
        contact.number.includes(searchData)
    );
  }
);
export const contactsReducer = contactsSlice.reducer;
// export const { deleteContact, addContact } = contactsSlice.actions;
// export const { selectContacts } = contactsSlice.selectors;

import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsData from '../components/contacts.json';

// const initialContacts = {
//   contacts: {
//     items: [],
//   },
// };

const initialContacts = {
  contacts: contactsData,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  selectors: { selectContacts: state => state.contacts },
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    addContact: {
      prepare: newContact => {
        return {
          payload: {
            id: nanoid(),
            name: newContact.name,
            number: newContact.number,
          },
        };
      },

      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;

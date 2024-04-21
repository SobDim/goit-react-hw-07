// import { useEffect, useState } from 'react';

import './App.css';

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
// import contactsData from '../components/contacts.json';

function App() {
  // const [contactsList, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(
  //     window.localStorage.getItem('contactsList')
  //   );
  //   if (savedContacts?.length) {
  //     return savedContacts;
  //   }
  //   return contactsData;
  // });
  // const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contactsList', JSON.stringify(contactsList));
  // }, [contactsList]);

  // const handleDelete = id => {
  //   setContacts(prev => prev.filter(item => item.id !== id));
  // };

  // const addContact = contact => {
  //   setContacts(prev => [contact, ...prev]);
  // };

  // const getFilteredData = () => {
  //   return contactsList.filter(
  //     item =>
  //       item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  //       item.number.includes(searchInput)
  //   );
  // };

  // const filteredData = getFilteredData();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

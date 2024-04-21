import { selectContacts } from '../../redux/contactsSlice';
import { selectedName } from '../../redux/filtersSlice';
import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactFilter = useSelector(selectedName);
  const contacts = useSelector(selectContacts);

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  if (!filteredContacts.length) {
    return <h2>No Data</h2>;
  }

  return (
    <ul>
      {filteredContacts.map(contactItem => (
        <Contact key={contactItem.id} item={contactItem} />
      ))}
    </ul>
  );
};

export default ContactList;

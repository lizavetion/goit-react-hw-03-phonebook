import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList

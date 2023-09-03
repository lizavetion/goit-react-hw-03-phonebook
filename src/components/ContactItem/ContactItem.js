import { ContactItems } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { ContactName, ContactNumber, Button } from '../ContactList/ContactList.styled';

export function ContactItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <Button onClick={handleDelete}>Delete</Button>
    </ContactItems>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};



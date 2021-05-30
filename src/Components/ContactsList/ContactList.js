import React from "react";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

const ContactsList = ({ contacts, onRemove }) => {
  // if (contacts.length === 0) return null
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;

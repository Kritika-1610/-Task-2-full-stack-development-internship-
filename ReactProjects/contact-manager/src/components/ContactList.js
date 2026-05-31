import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  return (
    <div className="card-container">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contact={contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
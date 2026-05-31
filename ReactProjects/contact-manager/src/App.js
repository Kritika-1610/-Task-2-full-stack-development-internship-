import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Contact Cards Manager</h1>

      <input
        type="text"
        placeholder="Search by name or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <ContactForm addContact={addContact} />

      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
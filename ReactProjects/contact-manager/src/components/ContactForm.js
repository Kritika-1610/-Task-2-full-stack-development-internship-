import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(formData);

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Short Bio"
        value={formData.bio}
        onChange={handleChange}
      ></textarea>

      <input
        type="text"
        name="avatar"
        placeholder="Avatar URL"
        value={formData.avatar}
        onChange={handleChange}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
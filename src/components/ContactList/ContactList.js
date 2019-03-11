import React, { Component } from "react";
import Faker from "faker";
import Contact from "../Contact/Contact";

import "./ContactList.scss";
let contacts = [];
for (let i = 1; i <= 10; i++) {
  contacts.push({
    name: Faker.name.findName() + " " + Faker.name.lastName(),
    imageUrl: Faker.image.avatar(),
    role: Faker.name.jobTitle()
  });
}
export class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {contacts.map((contact, i) => (
          <Contact
            imageUrl={contact.imageUrl}
            name={contact.name}
            key={i}
            role={contact.role}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;

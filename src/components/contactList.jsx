import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactsContext from '../context/ContactsContext';
import { useNavigate } from 'react-router-dom';

function ContactList() {
  const { contacts, setContacts } = useContext(ContactsContext); 
  const navigate = useNavigate();

  const dummyContacts = [
    { name: "John Doe", phone: "555-555-5555" },
    { name: "Jane Doe", phone: "555-867-5309" }
  ];

  const handleContactClick = (phone) => {
    alert(`Phone number: ${phone}`);

  };

  const handleContactList = () => {
    setContacts(dummyContacts); 
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={5}>
          <h2>Dummy Contacts</h2>
          <ul>
            {dummyContacts.map((contact, index) => (
              <li key={index} onClick={() => handleContactClick(contact.phone)}>
                <button className="contact-name-button">{contact.name}</button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactList;
import React, { Component } from "react";
import Container from "./Container/container";
import Form from "./Form/form";
import Contacts from "./Contacts/contacts";
import Filter from "./Filter/filter";

class App extends Component {
    
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
  
  addNewContacts = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  onDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  }
  

  render() {
    const { filter, contacts } = this.state;
    const arrContacts = this.getVisibleContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form
          submit={this.addNewContacts}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.handleChange}
        />
        <Contacts
          arrContacts={arrContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}

export default App;


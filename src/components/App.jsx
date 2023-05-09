import React, { Component } from "react";
import Form from "./Form/form";
import Contacts from "./Contacts/contacts";
// import { object } from "prop-types";


class App extends Component {
    
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  addNewContacts = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log(this.state)
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  // render() {
  //   const { inputValue } = this.state;
  //   return (
  //     <input type="text" value={inputValue} onChange={this.handleChange} />
  //   );
  // }
  


  render() {
    const { filter } = this.state;
    return (
      <>
        <Form onSubmit={this.addNewContacts} />
        <Contacts
          state={this.state.contacts}
          input={filter}
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default App;


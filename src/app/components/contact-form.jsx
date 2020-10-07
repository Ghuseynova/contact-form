import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContact: { type: '', value: '' },
      contacts: [
        { type: 'email', value: 'test@mail.ru' },
        { type: 'phone', value: '+79949929292' },
        { type: 'url', value: 'https://www.google.com/' },
      ],
    };
  }

  render() {
    console.log('GUller');
    return <h1>Helllo dear</h1>;
  }
}

export default ContactForm;

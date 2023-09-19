import { useState } from 'react';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';

import React from 'react';

const PhonebookForm = ({ onSubmit }) => {
  //   state = {
  //     contacts: [],
  //     name: '',
  //     number: '',
  //   };

  // const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameLabelId = nanoid();
  const numberLabelId = nanoid();

  const handleChanged = event => {
    // console.log(event.currentTarget.value);

    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    // this.setState({ number: '', name: '' });
  };

  return (
    <form type="submit" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameLabelId} className={css.nameLabel}>
        Name
        <input
          value={name}
          onChange={handleChanged}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameLabelId}
        />
      </label>
      <label htmlFor={numberLabelId} className={css.telLabel}>
        Number
        <input
          value={number}
          onChange={handleChanged}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberLabelId}
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;

// class PhonebookForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

// nameLabelId = nanoid();
// numberLabelId = nanoid();

// handleChanged = event => {
//   // console.log(event.currentTarget.value);
//   this.setState({ [event.currentTarget.name]: event.currentTarget.value });
// };

// handleSubmit = event => {
//   event.preventDefault();
//   // console.log(this.state);
//   this.props.onSubmit(this.state);
//   this.reset();
// };

// reset = () => {
//   this.setState({ number: '', name: '' });
// };

//   render() {
// return (
//   <form type="submit" className={css.form} onSubmit={this.handleSubmit}>
//     <label htmlFor={this.nameLabelId} className={css.nameLabel}>
//       Name
//       <input
//         value={this.state.name}
//         onChange={this.handleChanged}
//         className={css.input}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         id={this.nameLabelId}
//       />
//     </label>
//     <label htmlFor={this.numberLabelId} className={css.telLabel}>
//       Number
//       <input
//         value={this.state.number}
//         onChange={this.handleChanged}
//         className={css.input}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         id={this.numberLabelId}
//       />
//     </label>
//     <button className={css.addBtn} type="submit">
//       Add contact
//     </button>
//   </form>
// );
//   }
// }

// export default PhonebookForm;

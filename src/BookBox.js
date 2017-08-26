import React, { Component } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import DATA from '../data';
import style from './style';

class BookBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div style={ style.bookBox}>
      <h2>Books:</h2>
      <BookList data={ DATA }/>
      <BookForm />
      </div>
    )
  }
}

export default BookBox;

import React, { Component } from 'react';
import Book from './Book';
import style from './style';

class BookList extends Component {
  render() {
    let bookNodes = this.props.data.map(book => {
      return (
        <Book title={ book.title } author={ book.author } key={ book['_id'] }>
        { book.author }
        </Book>
      )
    })
    return (
      <div style={ style.bookList }>
      { bookNodes }
      </div>
    )
  }
}

export default BookList;

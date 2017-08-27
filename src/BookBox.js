import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import BookForm from './BookForm';
import style from './style';

class BookBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadBooksFromServer = this.loadBooksFromServer.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }
  loadBooksFromServer(){
    axios.get(this.props.url)
    .then(res => {
      this.setState({ data: res.data });
    })
  }
  handleBookSubmit(book) {
    let books = this.state.data;
    book.id = Date.now();
    let newBooks = books.concat([book]);
    this.setState({ data: newBooks });
    axios.post(this.props.url, book)
    .catch(err => {
      console.error(err);
      this.setState({ data: books });
    });
  }
  componentDidMount() {
    this.loadBooksFromServer();
    setInterval(this.loadBooksFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.bookBox }>
      <h2 style={ style.title }>Books:</h2>
      <BookList data={ this.state.data }/>
      <BookForm onBookSubmit={ this.handleBookSubmit }/>
      </div>
    )
  }
}

export default BookBox;

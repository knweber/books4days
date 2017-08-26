import React, { Component } from 'react';
import style from './style';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(`${this.state.title} by ${this.state.author}`)
  }
  render() {
    return (
      <form style={ style.bookForm } onSubmit={ this.handleSubmit }>
      <input type='text' placeholder="Title" style={ style.bookFormText }
      value= { this.state.title }
      onChange={ this.handleTitleChange } />
      <input type="submit" style={ style.bookFormPost } value="Post" />
      </form>
    )
  }
}

export default BookForm;

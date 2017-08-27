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
    let title = this.state.title.trim();
    let author = this.state.author.trim();
    if (!title || !author) {
      return;
    }
    this.props.onBookSubmit({ title: title, author: author });
    this.setState({ title: '', author: ''});
    console.log(`${this.state.title} by ${this.state.author}`)
  }
  render() {
    return (
      <form style={ style.bookForm } onSubmit={ this.handleSubmit }>
      <input type='text' placeholder="Title" style={ style.bookFormText }
      value= { this.state.title }
      onChange={ this.handleTitleChange } />
      <input type='text' placeholder="Author" style={ style.bookFormText }
      value= { this.state.author }
      onChange={ this.handleAuthorChange } />
      <input type="submit" style={ style.bookFormPost } value="Post" />
      </form>
    )
  }
}

export default BookForm;

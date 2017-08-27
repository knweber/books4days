import React from 'react';
import ReactDOM from 'react-dom';
import BookBox from './BookBox';

ReactDOM.render(<BookBox
  url='http://localhost:3000/api/books' pollInterval={2000} />,
  document.getElementById('root'));

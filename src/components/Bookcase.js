import React from 'react';
import Shelf from './Shelf';

class Bookcase extends React.Component {
  render() {
    return(
      <div >
        <h1>BOOKCASE COMPONENT</h1>
        <Shelf title = 'Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')}/>
        <Shelf title = 'Want To Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')}/>
        <Shelf title = 'Read' books={this.props.books.filter(book => book.shelf === 'read')}/>
      </div>
    )
  }
}

export default Bookcase;

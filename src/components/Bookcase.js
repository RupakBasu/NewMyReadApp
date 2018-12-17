import React from 'react';
import Shelf from './Shelf';

class Bookcase extends React.Component {
  render() {
    return(
      <div >
        <h1>BOOKCASE COMPONENT</h1>
        <Shelf title = 'Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')} updateBookLocation={this.props.updateBookLocation} />
        <Shelf title = 'Want To Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')} updateBookLocation={this.props.updateBookLocation}/>
        <Shelf title = 'Read' books={this.props.books.filter(book => book.shelf === 'read')} updateBookLocation={this.props.updateBookLocation}/>
      </div>
    )
  }
}

export default Bookcase;

import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  componentDidMount(){
    console.log(this);
    // the console.log helps us identify what props are passed.
  }
  constructor(){
    super();
    this.state = {

    }
  }
  // The portion that says :{this.props.books.map(book => <Book book={book} key={book.id} /> )} helped to display the books on the page
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => <Book book={book} key={book.id} updateBookLocation={this.props.updateBookLocation} /> )}            
          </ol>
        </div>
      </div>

    )
  }
}

export default Shelf;

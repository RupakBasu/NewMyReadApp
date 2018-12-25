import React from "react";

import * as BooksAPI from "../../BooksAPI";

import Header from "../Header";
import Bookcase from "../Bookcase";
import AddBookButton from "../AddBookButton";

class Mainpage extends React.Component {
  render() {
    const { books } = this.props;
    const { updateBookLocation } = this.props;

    // Would like to compare this new array mainpagebookList with the one on the search page
    const mainpageBooklist = books.map(booksOnShelf => {
      console.log(booksOnShelf.title)
      console.log(booksOnShelf.id)
      console.log(booksOnShelf.shelf)
    })

    return (
      <div className="app">
        <div className="list-books">
          <Header />
          <Bookcase books={books} updateBookLocation={updateBookLocation} />
          <AddBookButton />
        </div>
      </div>
    );
  }
}

export default Mainpage;

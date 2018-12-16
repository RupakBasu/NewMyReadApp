import React from "react";

import * as BooksAPI from "../../BooksAPI";

import Header from "../Header";
import Bookcase from "../Bookcase";
import AddBookButton from "../AddBookButton";

class Mainpage extends React.Component {
  render() {
    const { books } = this.props;
    const { updateBookLocation } = this.props;
    return (
      <div className="app">
        <div className="list-books">
          <Header />
          <Bookcase books={books} updateBookLocation={updateBookLocation}/>
          <AddBookButton />
        </div>
      </div>
    );
  }
}

export default Mainpage;

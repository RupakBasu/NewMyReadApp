import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import { Route } from "react-router-dom";
import Mainpage from "./components/Page/mainpage";
import Searchpage from "./components/Page/Searchpage";


class BooksApp extends React.Component {
  state = {
    books: []
  };

  updateBookLocation = (book, shelf) => {
    BooksAPI.update(book,shelf)
    .then (response => {
      book.shelf = shelf;
      BooksAPI.getAll().then((books) => {
      this.setState({books})
      })
    })
  };

  updateSearchBookLocationShelf= (book, shelf) => {
    BooksAPI.update(book,shelf)
    .then (response => {
      book.shelf = shelf;
      BooksAPI.getAll().then((books) => {
      this.setState({books})
      })
    })
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books }, () => console.log(this.state.books));
    });
  };
  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => <Mainpage books={this.state.books} updateBookLocation={this.updateBookLocation}/>}
        />
        <Route
          path="/Searchpage"
          exact
          render={() => <Searchpage books={this.state.books} updateBookLocation={this.updateBookLocation} updateSearchBookLocationShelf={this.updateSearchBookLocationShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;

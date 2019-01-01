import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import { Route } from "react-router-dom";
import Mainpage from "./components/Page/mainpage";
import Search from "./components/Page/Search";


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
          path="/Search"
          exact
          render={() => <Search books={this.state.books} updateBookLocation={this.updateBookLocation} updateBookStates={this.updateBookStates} />}
        />
      </div>
    );
  }
}

export default BooksApp;

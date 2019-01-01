import React from "react";
// import {getAll} from '../../BooksAPI';
import * as BooksAPI from "../../BooksAPI";

import AddBookButton from "../BackToMainPage";
import Book from "../Book";

const api = "https://reactnd-books-api.udacity.com/books"

class Search extends React.Component {
  // componentDidMount() {
  //   console.log(this);
  // }

  state = {
    booksInSearch: [],
    query: ""
  };

  searchBarChange = e => {
    const query = e.target.value;
    this.setState({ [e.target.name]: query }, () => this.searchBooks(query));
  };

  searchBooks = query => {
    const {books}= this.props;
    if (query === "") {
      this.setState({ booksInSearch: [] });
    } else {
      {/* This is what makes all the books populate */}
      BooksAPI.search(query).then(res => {
        if (!res.error) {
          Promise.all(this.updateBookStates(res)).then(updatedBooks => {
            console.log("Updated", updatedBooks);
            this.setState({
              booksInSearch: updatedBooks
            });
          });
        } else {
          this.setState({ booksInSearch: [] });  
        }
      });
    }
  };

  updateBookStates(searchBooks) {
    return searchBooks.map(book => BooksAPI.get(book.id));
  }

  render() {

    const {books}= this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <AddBookButton />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              name="query"
              placeholder="Search by title or author"
              onChange={e => this.searchBarChange(e)}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {console.log(this.props.books)}
          {console.log(this.state.booksInSearch)}
          {this.state.booksInSearch.length > 0 && this.state.booksInSearch.map(book => (
              <Book book={book} key={book.id} shelf={book.shelf}updateBookLocation={this.props.updateBookLocation}/> ))}
              {/*
                The below code shows the books on myshelf with the correct shelf location on the dropdown but then I cannot get all my
                books in the libaray to show up
                {this.props.books.map(book => <Book book={book} key={book.id} updateBookLocation={this.props.updateBookLocation} /> )}
              */}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

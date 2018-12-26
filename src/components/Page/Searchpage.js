import React from "react";
// import {getAll} from '../../BooksAPI';
import * as BooksAPI from "../../BooksAPI";

import AddBookButton from "../BackToMainPage";
import Book from "../Book";

class Searchpage extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  state = {
    booksInSearch: [],
    query: ""
  };

  searchBarChange = e => {
    const query = e.target.value;
    this.setState({ [e.target.name]: query }, () => this.searchBooks(query));
  };


  searchBooks = query => {
    if (query === "") {
      this.setState({ booksInSearch: [] });
    } else {
      BooksAPI.search(query).then(res => {
        if (!res.error) {
          this.setState({
            booksInSearch: res
          });
        }
      });
    }
  };

  render() {
    const {books}= this.props;

    const bookList = this.props.books.map(foundBooks => {
      if (this.props.books.id === foundBooks.id) {
          foundBooks.shelf = this.props.books.shelf;
      } else {
        foundBooks.shelf === 'none';
      }

      console.log(booksOnShelf.title)
      console.log(books.id)
      console.log(books.shelf)
      console.log(foundBooks.title)
      console.log(foundBooks.id)
      console.log(foundBooks.shelf)
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <AddBookButton />
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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

            {this.state.booksInSearch.length > 0 &&
              this.state.booksInSearch.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  shelf={book.shelf}
                  updateBookLocation={this.props.updateBookLocation}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Searchpage;

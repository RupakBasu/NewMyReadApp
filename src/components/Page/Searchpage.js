import React from 'react';
// import {getAll} from './BooksAPI';
import * as BooksAPI from "../../BooksAPI";

import AddBookButton from '../BackToMainPage';
import Book from "../Book";


class Searchpage extends React.Component {
  componentDidMount() {
    console.log(this);

  }
  state = {
    books: [],
    query:''
  };

  searchBarChange =(e)=>{
    this.setState({query:e.target.value});
  }

  // updateBooksBasedSearchBar = SearchBarQueryedBooks => {
  //   const {query} = this.state;
  //
  //   if ( query ! == '' && this.props.book.title.indexOf (query) === -1){
  //     return null
  //   }
  // }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <AddBookButton/>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"onChange={this.searchBarChange} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books.map(book => <Book book={book} key={book.id} updateBookLocation={this.props.updateBookLocation} /> )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Searchpage;

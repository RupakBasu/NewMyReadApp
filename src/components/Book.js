import React from "react";

class Book extends React.Component {
  componentDidMount() {
    console.log(this);
    // the console.log helps us identify what props are passed.    
  }
  constructor() {
    super();
    this.state = {};
  }

  handleChange = e => {
    const newShelf = e.target.value;
    this.props.updateBookLocation(this.props.book, newShelf);
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                 this.props.book.imageLinks
                   ? this.props.book.imageLinks.thumbnail
                  : ""
              })`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf || "none"}
              onChange={this.handleChange}>
              // adding the above value helped to select the shelf on the drop
              down. if no shelf is listed it will be none
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {this.props.book.title !== "" ? this.props.book.title : ""}
        </div>
        <div className="book-authors">
          {this.props.book.authors
            ? [...this.props.book.authors].join(", ")
            : 'No Authors'}
        </div>
      </div>
    );
  }
}

export default Book;

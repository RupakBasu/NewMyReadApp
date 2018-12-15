import React from 'react';
import {Redirect } from 'react-router'


class AddBookButton extends React.Component {
  constructor(){
    super();
    this.state = {
      toSearchpage : false,
    };
  }
  render() {
    if (this.state.toSearchpage === true) {
      return <Redirect to='/Searchpage' />
    }
    return(
      <div>
        <div className="open-search">
          <a onClick={() => this.setState({ toSearchpage : true })}>Add a book </a>
        </div>
      </div>
    );
  }
}

export default AddBookButton;

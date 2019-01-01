import React from 'react';
import {Redirect } from 'react-router'


class AddBookButton extends React.Component {
  constructor(){
    super();
    this.state = {
      toSearch : false,
    };
  }
  render() {
    if (this.state.toSearch === true) {
      return <Redirect to='/Search' />
    }
    return(
      <div>
        <div className="open-search">
          <a onClick={() => this.setState({ toSearch : true })}>Add a book </a>
        </div>
      </div>
    );
  }
}

export default AddBookButton;

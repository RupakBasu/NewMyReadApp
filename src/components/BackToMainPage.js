import React from 'react';
import { Redirect } from 'react-router'


class BackToMainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      toMainpage : false,
    };
  }
  render() {
    if (this.state.toMainpage === true) {
      return <Redirect to='/' />
    }
    return(
      <div>
        <a className="close-search" onClick={() => this.setState({ toMainpage : true })}>Close</a>
      </div>
    );
  }
}

export default BackToMainPage;

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Searchpage from './Searchpage';

class Routing extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path ='/' exact component={Searchpage}></Route>
          <Route path ='/Searchpage' exact component={Searchpage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routing;

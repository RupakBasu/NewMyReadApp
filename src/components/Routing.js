import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './Search';

class Routing extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path ='/' exact component={Search}></Route>
          <Route path ='/Search' exact component={Search}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routing;

import React, { Component } from 'react';

import Header from "./component/Header"
import Page from "./component/Page"
import Next from "./component/Next"
import { BrowserRouter as Router,  Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Header />
            <Switch>
             <Next   path="/next"/>
             <Page exact={false} path="/"/>
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

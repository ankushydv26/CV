import React, { Component } from 'react';

import Items from './component/Items';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Items/>
        </header>
      </div>
    );
  }
}

export default App;

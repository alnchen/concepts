import React from 'react';
import SearchBar from './search_bar';
import {Widget} from './widget';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <SearchBar />
        <Widget />
      </div>
    );
  }
}

export default App;

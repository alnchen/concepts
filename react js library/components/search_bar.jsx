import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      character: ''
    };
    this.handleChracterSubmit = this.handleChracterSubmit.bind(this);
  }

  handleChracterSubmit(e) {

  }

  render() {
    return (
      <span id='searchbar'>
        <form>
          <label>Name of Character:</label>
          <input type='text'></input>
          <button onClick={this.handleChracterSubmit}>Find</button>
        </form>
      </span>
    );
  }
}

export default SearchBar;

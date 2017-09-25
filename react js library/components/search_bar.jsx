import React from 'react';
import {Widget} from './widget';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      gifs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addWidget = this.addWidget.bind(this);
  }

  addWidget() {

  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      search: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var api = 'u8RD2rgLMN3gsbh26KWPetraRkAvjCj7',
        q = "'kobe'",
        data = [];

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=u8RD2rgLMN3gsbh26KWPetraRkAvjCj7&q=${this.state.search}&limit=5`)
    .then((res) => console.log(res.json()));
  }

  render() {
    return (
      <div className='search_bar'>
        <form>
          <label className='search_label'>Find Gifs:</label>
          <input type='text' onChange={this.handleInput}></input>
          <button onClick={this.handleSubmit}>Find</button>
        </form>
        <button onClick={this.addWidget}>Add Widget</button>
      </div>
    );
  }
}

export default SearchBar;

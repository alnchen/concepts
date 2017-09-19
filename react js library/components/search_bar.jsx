import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      gifs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

    // $.ajax({
    //     url: "https://www.api.giphy.com/v1/gifs/trending",
    //     dataType:'json',
    //     type: 'GET',
    //     success:function(response){
    //           console.log('success');
    //     }
    // });

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=u8RD2rgLMN3gsbh26KWPetraRkAvjCj7&q=${this.state.search}&limit=5`)
    .then((res) => console.log(res.json()));
  }

  render() {
    return (
      <span id='searchbar'>
        <form>
          <label>Find Gifs:</label>
          <input type='text' onChange={this.handleInput}></input>
          <button onClick={this.handleSubmit}>Find</button>
        </form>
      </span>
    );
  }
}

export default SearchBar;

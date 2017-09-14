import React from 'react';

class Box extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='box'>
        <form>
          <input type='text' placeholder={"What's up?"}>

          </input>
          <select className='select'>
            <option>1</option>
            <option>2</option>
          </select>
          <button className='button'>
            Click Me!
          </button>

        </form>
      </div>
    );
  }
}

export default Box;

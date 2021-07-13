import React, { Component } from 'react';

class Search extends Component {
  state = {
    term: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          id="term"
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';

class SearchBar extends Component{
    render() {
        return (
            <div>
              <input
                value = { this.state.term }
                onChange = { event => this.setState({ term: event.target.value }) }
              />
            </div>
    )

    }

  constructor(props) {
    super(props);

    this.state = { term: ''}
  }

}

export default SearchBar;
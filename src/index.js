import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyA61JUatGhbrCP_H_4LateWGI_cnZaQs0s";

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}
ReactDOM.render(<App/>, document.querySelector('.container'));

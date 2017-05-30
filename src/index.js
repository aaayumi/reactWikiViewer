import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar'

import WikiList from './components/wikiList';

/* 

call wikipedia API 
*/

ReactDOM.render(
 <div>
    <SearchBar />
    <WikiList />
</div>
  , document.querySelector('.container'));

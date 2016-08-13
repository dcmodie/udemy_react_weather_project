import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js'
import ForcastList from './forecast_list.js'
import TestContainer from '../containers/test_container.js'


export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <ForcastList />
      <TestContainer />

      </div>
    );
  }
}

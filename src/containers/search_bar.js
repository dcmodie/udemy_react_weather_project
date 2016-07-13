import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index.js';

class SearchBar extends Component {

  constructor(props) {
    super (props);

    this.state = {term:''}
    // bind, and then reassign the function
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event){
    var value = 'temp';
    event.preventDefault();
  //  this.props.selectBook(book)}
    //API key for openweathermap.org
    //955b244283db27f4be2a73fa648dd3b4
    // working example:
    //http://api.openweathermap.org/data/2.5/forecast?q=Chicago,us&mode=JSON&appid=955b244283db27f4be2a73fa648dd3b4
  }

  onInputChange (event){
    console.log(event.target.value)
     var value = event.target.value;
     this.setState({term:value});
   }


  render (){
    return (

      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
         placeholder="Get a five day forcast in city"
         className="form-control"
         value={this.state.term}
         onChange= {this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" > submit </button>
        </span>
        </form>

    );
  }


}
export default SearchBar

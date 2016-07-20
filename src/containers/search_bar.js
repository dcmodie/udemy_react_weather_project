import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index.js';
import {bindActionCreators} from 'redux'


class SearchBar extends Component {

  constructor(props) {
    super (props);
    this.state = {term:''}
    // bind, and then reassign the function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    console.log ("submitted")
    var value = 'temp';
    event.preventDefault();

    this.props.fetchWeather("heloo")
  //  this.props.selectBook(book)
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

//Anything returned from this function will end up as props on the SearchBar container
function mapDispatchToProps (dispatch){
  // whenever fetchWeather is called, result should be passed
  // to all of our reducers

  return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}

//Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapDispatchToProps)(SearchBar)

//export default SearchBar

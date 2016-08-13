import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {

  constructor(props) {
    super (props);
    this.state = {term:''}
    // bind, and then reassign the function
    // this makes it so 'this' in the function will refer
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    console.log ("submitted")
    var value = 'temp';
    event.preventDefault();

    this.props.fetchWeather(this.state.term)
  //  this.props.selectBook(book)
    //API key for openweathermap.org
    //955b244283db27f4be2a73fa648dd3b4
    // working example:
    //http://api.openweathermap.org/data/2.5/forecast?q=Chicago,us&mode=JSON&appid=955b244283db27f4be2a73fa648dd3b4
  }

  onInputChange (event){
    //console.log(event.target.value)
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

//export default BooksList
// if state changes, container will re-render
function mapStateToProps(state){
  //whatever gets returned will show up as props inside of
  return{
     forcasts: state.forcasts
   }
}




//Anything returned from this function will end up as props on the SearchBar container
function mapDispatchToProps (dispatch){
  // whenever fetchWeather is called, result should be passed
  // to all of our reducers

  return bindActionCreators({fetchWeather}, dispatch)
}

//Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect( mapStateToProps, mapDispatchToProps)(SearchBar)

//export default SearchBar

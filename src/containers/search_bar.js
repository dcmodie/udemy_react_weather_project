import React from 'react';
import { Component } from 'react';
class SearchBar extends Component {

  constructor(props) {
    super (props);

    this.state = {term:''}
    // bind, and then reassign the function
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
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

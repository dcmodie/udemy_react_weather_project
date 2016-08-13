import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index.js';

class TestContainer extends Component {

  constructor(props) {
    super (props);
  }
  render (){
    console.log("render in test container called " )

   console.log(this.props.forcasts)
    if (this.props["forcasts"]){
        return (
          <div>
            <h3>Details For: </h3>
            <div>
            {
              this.props.forcasts.statusText
            }
            </div>
            <div>
            {
              this.props.forcasts.data.city.name
            }
            </div>
          </div>
        );
      }
      else {
        return (
          <div>no data yet</div>
        )
      }
  }
}

//export default BooksList
// if state changes, container will re-render
function mapStateToProps(state){
  //whatever gets returned will show up as props inside of
  return{
     forcasts: state.forcastList
   }
}

//Anything returned from this function will end up as props on the SearchBar container
// function mapDispatchToProps (dispatch){
//   // whenever fetchWeather is called, result should be passed
//   // to all of our reducers
//   return bindActionCreators({fetchWeather}, dispatch)
// }

//Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect( mapStateToProps, null)(TestContainer)

//export default SearchBar
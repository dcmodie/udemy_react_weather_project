import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index.js';
import ForecastDetail from '../components/forecast_detail.js'

class ForcastList extends Component {
  constructor(props) {
    super (props);
  }
  render (){
    console.log("render in forcast list called " )
    console.log(this.props.forcasts)
    if (this.props["forcasts"]){
        return (
          <div>
            <h3>Forcast List: </h3>
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
            <div className='forcast-list'>
              <div><ForecastDetail/></div>
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

export default connect( mapStateToProps, null)(ForcastList)

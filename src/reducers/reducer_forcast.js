
  //state is not the appliction state, but rather the state that this
  export default function (state = null, action){
  //  console.log ("in reducer_forcast default function 0 " + action.type)
    switch (action.type){
      case 'FETCH_WEATHER':
       console.log ("need to add to the list, not replace it")
        return action.payload
        break;
    }
    return state
  }

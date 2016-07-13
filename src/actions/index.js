export function searchForCity(city){
  // selectBook an action creator and needs to return
  // an action.  an object with a type property
  return {
    type:'SEARCHED_CITY',
    payload:city
  }
}

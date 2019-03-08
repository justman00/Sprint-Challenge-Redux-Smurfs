/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 
*/
import { LOADING, ADD_SMURF, FETCH_SMURFS, DELETE_SMURF } from "../actions";

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ADD_SMURF:
      return { ...state, loading: false, smurfs: action.payload };
    case FETCH_SMURFS:
      return { ...state, loading: false, smurfs: action.payload };
    case DELETE_SMURF:
      return { ...state, loading: false, smurfs: action.payload };
    default:
      return state;
  }
};

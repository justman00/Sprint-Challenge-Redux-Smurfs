import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const LOADING = "LOADING";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => async dispatch => {
  dispatch({ type: LOADING });
  const res = await axios.get(`http://localhost:3333/smurfs`);
  dispatch({ type: FETCH_SMURFS, payload: res.data });
};

export const addSmurf = ({ name, age, height }) => async dispatch => {
  dispatch({ type: LOADING });
  const creds = { name, age: parseInt(age), height };
  const res = await axios.post(`http://localhost:3333/smurfs`, creds);
  console.log(res.data);
  dispatch({ type: ADD_SMURF, payload: res.data });
};

export const deleteSmurf = id => async dispatch => {
  dispatch({ type: LOADING });
  const res = await axios.delete(`http://localhost:3333/smurfs/${id}`);
  console.log(res.data);
  dispatch({ type: DELETE_SMURF, payload: res.data });
};

import {
  GET_CHARACTERS_FAIL,
  GET_CHARACTERS_SUCCESS
} from "../actions/actionTypes";

const INITIAL_STATE = {
  characters: [],
  isLoading: true,
  error: ""
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      console.log(action);
      return { characters: action.characters, isLoading: false, error: "" };

    case GET_CHARACTERS_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
export default characterReducer;

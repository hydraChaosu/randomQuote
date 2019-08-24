import types from "./types";
const initialState = {
  text: "",
  author: ""
};
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUOTE:
      return {
        ...state,
        text: action.payload.content,
        author: action.payload.author
      };
    default:
      return state;
  }
};
export default quoteReducer;

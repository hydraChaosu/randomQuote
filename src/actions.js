import types from "./types";
import axios from "axios";
export const getQuote = () => dispatch => {
  axios.get("https://api.quotable.io/random").then(res => {
    dispatch({
      type: types.GET_QUOTE,
      payload: res.data
    });
  });
};

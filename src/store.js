import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import quoteReducer from "./quoteReducer";

const initialState = {};
const middleware = [thunk];
//   rootReducer,
const store = createStore(
  quoteReducer,
  //   initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;

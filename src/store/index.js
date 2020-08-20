import { createStore, applyMiddleware, compose } from "redux";

// Logger with default options
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

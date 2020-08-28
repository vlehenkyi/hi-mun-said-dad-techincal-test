import { createStore, applyMiddleware, compose } from "redux";

// Logger with default options
import thunk from "redux-thunk";
import reducer from "./reducer";

export default () => createStore(reducer, compose(applyMiddleware(thunk)));

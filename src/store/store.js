import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./_reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

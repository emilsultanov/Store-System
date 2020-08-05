import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

// Routing::
import { BrowserRouter as Router } from "react-router-dom";

// Provider::
import { Provider } from "react-redux";

// Store::
import { store } from "./store/store";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,

	document.getElementById("root")
);

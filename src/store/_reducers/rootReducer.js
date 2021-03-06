import { combineReducers } from "redux";

import auth from "./authReducer";
import products from "./productsReducer";
import categories from "./categoriesReducer";
import cart from "./cartReducer";
import stockProducts from "./stockReducer";

export default combineReducers({
	auth,
	products,
	categories,
	cart,
	stockProducts,
});

import * as actionTypes from "../_actions/actionTypes";

const initial_state = [];

const productsReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS: {
			return [
				...action.payload.products.filter((product) => product.count > 0),
			];
		}

		default:
			return state;
	}
};
export default productsReducer;

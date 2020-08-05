import * as actionTypes from "../_actions/actionTypes";

const initial_state = [];

const stockReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.GET_INITIAL_STOCK_PRODUCTS: {
			return [
				...action.payload.stockProducts.filter(
					(product) => product.count > 0
				),
			];
		}

		default:
			return state;
	}
};
export default stockReducer;

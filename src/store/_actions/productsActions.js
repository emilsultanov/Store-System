import * as actionTypes from "./actionTypes";

export const get_products = (id) => {
	return async (dispatch, getState) => {
		try {
			let url =
				id > 0
					? `http://localhost:3004/products?category_id=${id}`
					: "http://localhost:3004/products";
			const response = await fetch(url);
			const data = await response.json();

			dispatch({
				type: actionTypes.GET_PRODUCTS,
				payload: {
					products: [...data],
				},
			});
		} catch (error) {}
	};
};

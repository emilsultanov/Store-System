import * as actionTypes from "../_actions/actionTypes";

export const get_initial_stock = () => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch("http://localhost:3004/products");
			const data = await response.json();
			dispatch({
				type: actionTypes.GET_INITIAL_STOCK_PRODUCTS,
				payload: {
					stockProducts: data,
				},
			});
		} catch (error) {}
	};
};

export const update_stock = (product) => {
	const { id } = product;
	let url = `http://localhost:3004/products/${id}`;
	return async (dispatch) => {
		try {
			const response = await fetch(url, {
				method: "PUT",
				credentials: "same-origin",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				body: JSON.stringify(product),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {}
	};
};

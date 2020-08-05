import * as actionTypes from "./actionTypes";

export const select_product = (product_id, product_price) => {
	return (dispatch, getState) => {
		const state = getState();

		dispatch({
			type: actionTypes.SELECT_PRODUCT,
			payload: {
				state: { ...state },
				product_id,
				product_price,
			},
		});
	};
};

export const remove_product = (product_id, product_price) => {
	return (dispatch, getState) => {
		const state = getState();

		dispatch({
			type: actionTypes.REMOVE_PRODUCT,
			payload: {
				state: { ...state },
				product_id,
				product_price,
			},
		});
	};
};

export const change_order_count = (
	product_id,
	product_price,
	prevOrderCount,
	currentOrderCount
) => {
	return (dispatch, getState) => {
		const state = getState();
		dispatch({
			type: actionTypes.CHANGE_ORDER_COUNT,
			payload: {
				state: { ...state },
				product_id,
				product_price,
				prevOrderCount,
				currentOrderCount,
			},
		});
	};
};

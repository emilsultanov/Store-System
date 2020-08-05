import * as actionTypes from "./actionTypes";

export const get_categories = () => {
	return async (dispatch) => {
		try {
			const response = await fetch("http://localhost:3004/categories");
			const data = await response.json();
			dispatch({
				type: actionTypes.GET_CATEGORIES,
				payload: {
					categories: data,
				},
			});
		} catch (error) {}
	};
};

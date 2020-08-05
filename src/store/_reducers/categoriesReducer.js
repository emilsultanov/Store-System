import * as actionTypes from "../_actions/actionTypes";

const initial_state = [];

const categoriesReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.GET_CATEGORIES:
			return [...action.payload.categories];

		default:
			return state;
	}
};
export default categoriesReducer;

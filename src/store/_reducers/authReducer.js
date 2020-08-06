import * as actionTypes from "../_actions/actionTypes";

const initial_state = {
	isLogin: localStorage.getItem("isLogin") ? true : false,
};

const authReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return { ...state, isLogin: true };

		case actionTypes.LOGOUT:
			return { ...state, isLogin: false };

		default:
			return state;
	}
};
export default authReducer;

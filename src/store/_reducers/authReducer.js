import * as actionTypes from "../_actions/actionTypes";

const initial_state = {
	isLogin: localStorage.getItem("isLogin") ? true : false,
	user: null,
};

const authReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return { ...state, isLogin: true, user: action.payload.user };

		case actionTypes.LOGOUT:
			return { ...state, isLogin: false, user: null };

		default:
			return state;
	}
};
export default authReducer;

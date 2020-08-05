import * as actionTypes from "./actionTypes";

// Login::
export const login = (user) => {
	return {
		type: actionTypes.LOGIN,
		payload: { user },
	};
};

// Logout::
export const logout = () => {
	localStorage.removeItem("isLogin");
	return {
		type: actionTypes.LOGOUT,
	};
};

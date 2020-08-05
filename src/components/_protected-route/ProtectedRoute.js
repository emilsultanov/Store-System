import React, { memo } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
	component: Comp,
	isLogin,
	path,
	redirectPath,
	...rest
}) {
	return (
		<Route
			path={path}
			{...rest}
			render={(props) => {
				return isLogin ? (
					<Comp {...props} />
				) : (
					<Redirect to={redirectPath} />
				);
			}}
		/>
	);
}

export default memo(ProtectedRoute);

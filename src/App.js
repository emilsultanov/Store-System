import React, { memo } from "react";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/_layout/Layout";
import Header from "./components/_header/Header";
import Login from "./pages/_login-page/Login";
import Products from "./pages/_products/Products";
import ProtectedRoute from "./components/_protected-route/ProtectedRoute";
import Cart from "./pages/_cart-page/Cart";

function App() {
	const auth = useSelector((state) => state.auth);

	return (
		<div className="app">
			<Header />
			<Layout>
				<Switch>
					<ProtectedRoute
						exact
						path="/"
						redirectPath="/products"
						isLogin={!auth.isLogin}
						component={Login}
					/>

					<ProtectedRoute
						path="/products"
						redirectPath="/"
						isLogin={auth.isLogin}
						component={Products}
					/>

					<ProtectedRoute
						path="/cart"
						redirectPath="/"
						isLogin={auth.isLogin}
						component={Cart}
					/>
				</Switch>
			</Layout>
		</div>
	);
}

export default memo(App);

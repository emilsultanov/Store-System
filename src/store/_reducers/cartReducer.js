import * as actionTypes from "../_actions/actionTypes";

const initial_state = {
	cartProducts: [],
	totalPriceOfProducts: 0,
	totalQuantityOfProducts: 0,
};

const cartReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.SELECT_PRODUCT: {
			const { state, product_id, product_price } = action.payload;

			// Get selected product::
			const selectedProduct = [...state.products].find(
				(product) => product.id === product_id
			);
			selectedProduct["order_count"] = 1;
			let { totalPriceOfProducts, totalQuantityOfProducts } = state.cart;

			totalPriceOfProducts += product_price;
			totalQuantityOfProducts++;

			return {
				...state.cart,
				totalPriceOfProducts,
				totalQuantityOfProducts,
				cartProducts: [...state.cart.cartProducts, selectedProduct],
			};
		}

		case actionTypes.REMOVE_PRODUCT: {
			const { state, product_id, product_price } = action.payload;

			// Get removed product::
			const removedProduct = [...state.cart.cartProducts].find(
				(product) => product.id === product_id
			);

			// Remove selected product from cart::
			const filteredCartProducts = [...state.cart.cartProducts].filter(
				(product) => product.id !== product_id
			);
			let { order_count } = removedProduct;
			let { totalPriceOfProducts, totalQuantityOfProducts } = state.cart;

			totalQuantityOfProducts -= order_count;
			totalPriceOfProducts -= order_count * product_price;

			return {
				...state.cart,
				totalPriceOfProducts,
				totalQuantityOfProducts,
				cartProducts: [...filteredCartProducts],
			};
		}

		case actionTypes.CHANGE_ORDER_COUNT: {
			const {
				state,
				product_id,
				product_price,
				prevOrderCount,
				currentOrderCount,
			} = action.payload;

			// Avoid Reference copy::
			const cartProducts = JSON.parse(
				JSON.stringify(state.cart.cartProducts)
			);

			// Get product increasing order count::
			const index = cartProducts.findIndex(
				(product) => product.id === product_id
			);
			cartProducts[index].order_count = currentOrderCount;

			let { totalPriceOfProducts, totalQuantityOfProducts } = state.cart;

			if (currentOrderCount > prevOrderCount) {
				totalQuantityOfProducts += currentOrderCount - prevOrderCount;
				totalPriceOfProducts +=
					(currentOrderCount - prevOrderCount) * product_price;
			} else {
				totalQuantityOfProducts -= prevOrderCount - currentOrderCount;
				totalPriceOfProducts -=
					(prevOrderCount - currentOrderCount) * product_price;
			}

			return {
				...state.cart,
				totalPriceOfProducts,
				totalQuantityOfProducts,
				cartProducts: [...cartProducts],
			};
		}

		case actionTypes.RESET_CART_PRODUCTS: {
			return {
				cartProducts: [],
				totalPriceOfProducts: 0,
				totalQuantityOfProducts: 0,
			};
		}

		default:
			return state;
	}
};
export default cartReducer;

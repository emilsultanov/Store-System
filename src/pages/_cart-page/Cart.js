import React, { memo } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import CartProduct from "../../components/_cart-product/CartProduct";
import { useSelector, useDispatch } from "react-redux";
import { update_stock } from "../../store/_actions/stockActions";
import { get_products } from "../../store/_actions/productsActions";
import { reset_cart_products } from "../../store/_actions/cartActions";
import { useHistory } from "react-router-dom";

function Cart() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state);
	const { cartProducts, totalPriceOfProducts, totalQuantityOfProducts } = cart;

	const handleOrderClick = (event) => {
		const filteredCartProducts = cartProducts.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				count: product.count - product.order_count,
				category_id: product.category_id,
			};
		});

		filteredCartProducts.forEach((product) => {
			dispatch(update_stock(product));
		});

		dispatch(get_products(0));
		dispatch(reset_cart_products());
		history.push("/products");
	};

	return (
		<div className="cart py-5">
			<Container>
				<Row>
					<Col lg={8}>
						<h4 className="py-2">Products</h4>

						<Row>
							{cartProducts.map((cartProduct) => (
								<Col
									md={6}
									lg={4}
									key={cartProduct.id}
									className="mb-4"
								>
									<CartProduct {...cartProduct} />
								</Col>
							))}
						</Row>
					</Col>

					<Col lg={4}>
						<h4 className="py-2">The total amount of</h4>
						<ListGroup as="ul" className="mb-3">
							<ListGroup.Item
								as="li"
								className="d-flex justify-content-between"
							>
								Price of Products{" "}
								<strong>US ${totalPriceOfProducts}</strong>
							</ListGroup.Item>

							<ListGroup.Item
								as="li"
								className="d-flex justify-content-between"
							>
								Quantity of Products{" "}
								<strong>{totalQuantityOfProducts}</strong>
							</ListGroup.Item>
						</ListGroup>
						<Button
							variant="success"
							className="w-100"
							onClick={handleOrderClick}
						>
							Order
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default memo(Cart);

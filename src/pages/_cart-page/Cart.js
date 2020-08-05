import React, { memo } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import CartProduct from "../../components/_cart-product/CartProduct";
import { useSelector } from "react-redux";

function Cart() {
	const cart = useSelector((state) => state.cart);
	const { cartProducts, totalPriceOfProducts, totalQuantityOfProducts } = cart;

	const handleOrderClick = (event) => {
		console.log(event);
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

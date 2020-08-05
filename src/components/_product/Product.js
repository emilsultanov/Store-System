import React, { useState, memo } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	select_product,
	remove_product,
} from "../../store/_actions/cartActions";

function Product({ name, price, id }) {
	const dispatch = useDispatch();
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const cartProductsId = cartProducts.map((product) => product.id);
	const isCurrentProduct = cartProductsId.includes(id);

	const [isSelected, setSelected] = useState(isCurrentProduct);

	const handleProductClick = (product_id) => {
		setSelected((prevState) => !prevState);

		if (!isSelected) {
			dispatch(select_product(product_id, price));
		} else {
			dispatch(remove_product(product_id, price));
		}
	};
	return (
		<Card bg={"light"}>
			<Card.Body>
				<Card.Text>{name}</Card.Text>
				<h6 className="mb-3">US ${price}</h6>
				{isCurrentProduct ? (
					<Button
						size="sm"
						variant="danger"
						className="w-100"
						onClick={(e) => handleProductClick(id)}
					>
						Remove
					</Button>
				) : (
					<Button
						size="sm"
						variant="secondary"
						className="w-100"
						onClick={(e) => handleProductClick(id)}
					>
						Add To Cart
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}

export default memo(Product);

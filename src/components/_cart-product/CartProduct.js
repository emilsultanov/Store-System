import React, { memo, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	remove_product,
	change_order_count,
} from "../../store/_actions/cartActions";

function CartProduct({ name, price, id, count }) {
	const dispatch = useDispatch();
	const [orderCount, setOrderCount] = useState(1);

	const handleRemoveClick = (product_id) => {
		dispatch(remove_product(product_id, price));
	};

	const handleOrderCountChange = (event) => {
		const currentOrderCount = Number(event.target.value);
		setOrderCount(currentOrderCount);
		dispatch(change_order_count(id, price, orderCount, currentOrderCount));
	};

	return (
		<Card bg={"light"}>
			<Card.Body>
				<Card.Text>{name}</Card.Text>
				<h6 className="mb-3">US ${price}</h6>
				<Form.Control
					size="sm"
					as="select"
					className="mb-3 w-auto"
					value={orderCount}
					onChange={handleOrderCountChange}
				>
					{[...Array(count)].map((item, index) => (
						<option key={index} value={index + 1}>
							{index + 1}
						</option>
					))}
				</Form.Control>
				<Button
					size="sm"
					variant="danger"
					className="w-100"
					onClick={(e) => handleRemoveClick(id)}
				>
					Remove
				</Button>
			</Card.Body>
		</Card>
	);
}

export default memo(CartProduct);

import React, { useState, useEffect, useCallback, memo } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { get_categories } from "../../store/_actions/categoriesActions";
import { get_products } from "../../store/_actions/productsActions";

function ProductCategories() {
	const dispatch = useDispatch();
	const [activeItem, setActiveItem] = useState(0);
	const categories = useSelector((state) => state.categories);

	const getCategories = useCallback(() => {
		dispatch(get_categories());
	}, [dispatch]);

	useEffect(() => {
		getCategories();
	}, [getCategories]);

	const handleCategoryClick = (id) => {
		dispatch(get_products(id));
		setActiveItem(id);
	};

	return (
		<>
			<h4 className="py-2">Categories</h4>
			<ListGroup as="ul">
				<ListGroup.Item
					as="li"
					className="list-item"
					active={activeItem === 0}
					onClick={(e) => handleCategoryClick(0)}
				>
					All
				</ListGroup.Item>
				{categories &&
					categories.map((category) => (
						<ListGroup.Item
							as="li"
							key={category.name}
							className="list-item"
							active={activeItem === category.id}
							onClick={(e) => handleCategoryClick(category.id)}
						>
							{category.name}
						</ListGroup.Item>
					))}
			</ListGroup>
		</>
	);
}

export default memo(ProductCategories);

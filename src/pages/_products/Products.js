import React, { useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../store/_actions/productsActions";
import { get_initial_stock } from "../../store/_actions/stockActions";
import { Container, Row, Col } from "react-bootstrap";
import ProductCategories from "../../components/_product-categories/ProductCategories";
import Product from "../../components/_product/Product";

function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	const getProducts = useCallback(() => {
		dispatch(get_products(0));
		dispatch(get_initial_stock());
	}, [dispatch]);

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<div className="products py-5">
			<Container>
				<Row>
					<Col md={9}>
						<h4 className="py-2">Products</h4>
						<Row>
							{products &&
								products.map((product) => (
									<Col md={6} lg={4} key={product.id} className="mb-4">
										<Product {...product} />
									</Col>
								))}
						</Row>
					</Col>
					<Col md={3}>
						<ProductCategories />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default memo(Products);

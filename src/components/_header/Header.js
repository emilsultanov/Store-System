import React, { memo } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/_actions/authActions";

function Header() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const handleLinkClick = (event) => {
		dispatch(logout());
	};
	return (
		<header>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Store System</Navbar.Brand>
					<Nav className="ml-auto">
						{auth.isLogin ? (
							<>
								<Link to="/products" className="nav-link">
									Products
								</Link>
								<Link to="/cart" className="nav-link">
									Cart
								</Link>
								<Link
									to="/"
									className="nav-link"
									onClick={handleLinkClick}
								>
									Logout
								</Link>
							</>
						) : null}
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}

export default memo(Header);

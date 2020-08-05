import React, { useState, memo } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../store/_actions/authActions";
import { useHistory } from "react-router-dom";

function Login() {
	const dispatch = useDispatch();
	const [user, setUser] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({ email: "", password: "" });
	const history = useHistory();

	const validate = (values) => {
		const _errors = {};
		let formIsValid = true;

		if (!values.email) {
			formIsValid = false;
			_errors.email = "Required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			formIsValid = false;
			_errors.email = "Invalid email address";
		}

		if (!values.password) {
			formIsValid = false;
			_errors.password = "Required";
		} else if (values.password.length <= 6) {
			formIsValid = false;
			_errors.password = "Password must be at least 6 characters long!";
		}

		setErrors({ ...errors, ..._errors });
		return formIsValid;
	};

	const handleInputChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (validate(user)) {
			dispatch(login(user));
			setUser({ email: "", password: "" });
			setErrors({ email: "", password: "" });
			history.push("/products");
		}
	};
	return (
		<div className="login-page">
			<Container>
				<Row>
					<Col sm={9} md={7} lg={5} className="mx-auto">
						<Card className="card-login my-5">
							<Card.Body className="card-body">
								<Card.Title className="card-title text-center">
									Login
								</Card.Title>
								<Form
									className="form-login"
									onSubmit={handleFormSubmit}
								>
									<Row className="mb-3">
										<Col>
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="text"
												name="email"
												value={user.email}
												onChange={handleInputChange}
												placeholder="Enter email address"
											/>
											{errors.email && <span>{errors.email}</span>}
										</Col>
									</Row>
									<Row className="mb-3">
										<Col>
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												name="password"
												value={user.password}
												onChange={handleInputChange}
												placeholder="Enter password"
											/>
											{errors.password && (
												<span>{errors.password}</span>
											)}
										</Col>
									</Row>
									<Button
										type="submit"
										variant="primary"
										className="w-100"
									>
										Login
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default memo(Login);

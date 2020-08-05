import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Home() {
	return (
		<section className="home">
			<Jumbotron>
				<Container>
					<h1>Welcome To My Store System</h1>
					<p>The technologies used are React, Redux, React-Router</p>
				</Container>
			</Jumbotron>
		</section>
	);
}

export default Home;

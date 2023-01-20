import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import FewImages from "../components/FewImages";
import Footers from "../components/Footers";
import MessageForGuest from "../components/MessageForGuest";
import { Searchs } from "../components/Searchs";
import "../scss/home.scss";

const Home = () => {
	return (
		<>
			<div className="main-hom-div">
				<Container>
					<Row className="home-row" xs={1} md={2}>
						<Col className="home-col p-0" >
							<div className="social-icon d-flex ">
								<Button
									variant="light"
									className="rounded-circle"
								>
									<i
										className="fa fa-facebook"
										aria-hidden="true"
									/>
								</Button>
								<Button
									variant="light"
									className="rounded-circle"
								>
									<i
										className="fa fa-instagram"
										aria-hidden="true"
									/>
								</Button>
								<Button
									variant="light"
									className="rounded-circle"
								>
									<i
										className="fa fa-youtube-play"
										aria-hidden="true"
									/>
								</Button>
							</div>
						</Col>
						<Col className="mt-5 col-right-hom py-5  p-0" >
							<Stack className="home-stack">
								<h5>About Us</h5>
								<p className="text-muted">
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to using 'Content here, content
									here', making it look like readable English.
									Many desktop publishing packages and web
									page editors now use Lorem Ipsum as their
									default model text.
								</p>
								<div className="border   p-1">
									<img
										src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
										alt="..."
										className=""
									/>
								</div>
								<h5 className="mt-3">Our Vision</h5>
								<p className="text-muted">
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to using 'Content here, content
									here',now use Lorem Ipsum as their default
									model text, and a search for 'lorem ipsum'
									will uncover many web sites still in their
									infancy. Various versions have evolved over
									the years, sometimes by accident, sometimes
									on purpose (injected humour and the like).
								</p>
								<FewImages />
								<MessageForGuest />
								<Footers />
							</Stack>
						</Col>

						<Searchs />
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Home;

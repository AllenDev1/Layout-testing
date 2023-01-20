import React from "react";
import { Col, Row } from "react-bootstrap";
import "../scss/images.scss";

const FewImages = () => {
	return (
		<>
			<Row className="few-img-row">
				<Col className="few-img-col">
					<img
						src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
						alt="..."
                        className="border   p-1"
					/>
				</Col>
				<Col className="few-img-col">
					<img
						src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
						alt="..."
                        className="border   p-1"
					/>
				</Col>
				<Col className="few-img-col">
					<img
						src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
						alt="..."
                        className="border   p-1"
					/>
				</Col>
			</Row>
		</>
	);
};

export default FewImages;

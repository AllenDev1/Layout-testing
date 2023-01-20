import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import "../scss/message.scss";
const MessageForGuest = () => {
	return (
		<>
			<h5 className="mt-3">Message For Guest</h5>
			<Row className="messageforguest-row">
				<Col className="messageforguest-col" sm={6}>
					<img
						src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
						alt="..."
					/>
				</Col>
				<Col className="py-3 message">
					<Stack>
						<div className="font-style-italic"> 
							"It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout."
						</div>
						<div className="font-weight-bold mt-3">Someone</div>
						<div className="font-weight-light text-muted">CEO</div >
					</Stack>
				</Col>
			</Row>
		</>
	);
};

export default MessageForGuest;

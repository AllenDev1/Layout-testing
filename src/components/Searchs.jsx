import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import "../scss/search.scss";

export const Searchs = () => {
	return (
		<>
			<Form className="main-fomr">
				<Row className="search-form  border">
					<Col className="my-3">
						<Button variant="outline-light text-dark">
							<i
								className="fa fa-arrow-left"
								aria-hidden="true"
							/>
						</Button>
					</Col>
					<Col className="col-boder-left my-3 ">
						<Button variant="outline-light text-dark">
							<i
								className="fa fa-arrow-right"
								aria-hidden="true"
							/>
						</Button>
					</Col>
					<Col className="col-boder-left my-3">
						<input
							type="date"
							id="birthday"
							name="birthday"
							className="border-0"
						/>
					</Col>
					<Col className="col-boder-left my-3 ">
						<input
							type="date"
							id="birthday"
							name="birthday"
							className="border-0"
						/>
					</Col>
					<Col className="col-boder-left col-width my-3">
						<FloatingLabel
							controlId="floatingSelect"
							label="Adults"
						>
							<Form.Select
								aria-label="Floating label select example"
								className="border-0 dropdown-width"
							>
								<option disabled> Adults</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col className="col-width my-3">
						<FloatingLabel
							controlId="floatingSelect"
							label="Children"
						>
							<Form.Select
								aria-label="Floating label select example"
								className="border-0 dropdown-width"
							>
								<option disabled> Children</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col className="p-0 with-btn rounded-0">
						<Button>Search</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};

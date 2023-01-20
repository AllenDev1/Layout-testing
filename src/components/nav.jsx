import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navs() {
	const [scrollTop, setScrollTop] = useState(0);

	window.onscroll = () => {
		setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
		if (scrollTop > 80) {
			document.getElementById("background-nav").style.backgroundColor =
				"#fff";
		} else if (scrollTop < 80) {
			document.getElementById("background-nav").style.backgroundColor =
				"transparent";
		}
	};

	return (
		<>
			<Navbar
				expand="xl"
				className="mb-3 background-nav"
				id="background-nav"
				fixed="top"
			>
				<Container>
					<Navbar.Brand href="#">Sam's INN</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
					<Navbar.Offcanvas
						id="offcanvasNavbar-expand-xl"
						aria-labelledby="offcanvasNavbarLabel-expand-xl"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel-expand-xl">
								Sam's INN
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 ">
								<Nav.Link href="#action1" className="px-4">
									Home
								</Nav.Link>
								<Nav.Link href="#action2" className="px-4">
									Abour
								</Nav.Link>
								<Nav.Link href="#action1" className="px-4">
									Services
								</Nav.Link>

								<Nav.Link href="#action2" className="px-4">
									Room
								</Nav.Link>
								<Nav.Link href="#action2" className="px-4">
									Gallery
								</Nav.Link>

								<Button className="rounded-0 bg-color-btn" style={{backgroundColor: "#090778"}}>Contact Us</Button>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Navs;

import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Container>
				<Navbar.Brand>
					<img
					alt=""
					src="../star-wars-logo.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Dropdown className="d-inline mx-2">
					<Dropdown.Toggle id="dropdown-autoclose-true">
					Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu>
					<Dropdown.Item href="#">Menu Item</Dropdown.Item>
					<Dropdown.Item href="#">Menu Item</Dropdown.Item>
					<Dropdown.Item href="#">Menu Item</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				{/*<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>*/}
			</Container>
		</nav>
	);
};

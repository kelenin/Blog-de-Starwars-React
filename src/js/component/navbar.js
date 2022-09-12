import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/star-wars-logo.png'
import { Context } from "../store/appContext";

export const Navbars = () => {
	const {store,actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Container>
				<Navbar.Brand>
					<img
					alt=""
					src={logo}
					width="100px"
					height="80px"
					className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Dropdown className="d-inline mx-2">
					<Dropdown.Toggle id="dropdown-autoclose-true">
					Favorites{" "}{store.favorites.length}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites.map((favorite,index) =>{
							return (
								<Dropdown.Item href="#" key={index}>{favorite.favName}
								<i className="far fa-trash-alt pe-2" onClick={()=>{actions.EliminarFavorite(index)}}></i>
								</Dropdown.Item>
							)
						})}
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</nav>
	);
};

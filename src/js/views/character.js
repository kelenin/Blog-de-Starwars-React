import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsImg from "../../img/starwars.jpg";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacter(params.uid, params.endpoint);
	}, []);
	

    /*useEffect(() => {
        actions.getCharacterByuid(params.uid);
    },[]);*/

	return (
		<div className="container">
			<div className="row">
				<div className="col">
				<img src={starWarsImg} className="img-details img-top" alt="..."  />
				</div>
				<div className="col">
				<h2 className="text-detail">
					{store.detalles && store.detalles.properties.name}
				</h2>
					<p className=" text-light">
					Sed quis posuere nulla. Donec vel nisl porta, volutpat ex
					ultrices, sollicitudin magna. Ut mattis, justo at ornare
					consequat, nunc erat tempus ex, et facilisis lectus metus a diam.
					Ut posuere dolor sed sapien volutpat commodo. Vestibulum placerat,
					massa eget bibendum sollicitudin, sem nulla commodo turpis, nec
					egestas ex libero eu leo. Sed viverra libero vel purus tincidunt
					efficitur. Integer elementum augue sed metus efficitur, ac viverra
					sem aliquam. Vivamus neque libero, placerat id luctus eu,
					consectetur nec ante. Nunc euismod tincidunt lacus at volutpat.
					Etiam ultricies, nulla quis vehicula bibendum, dolor augue
					eleifend nunc, quis bibendum lacus eros vitae lectus. Maecenas sit
					amet nibh vel felis posuere fermentum.
					</p>{""}
					
				</div>
			</div>
			<hr className="linea" style={{color:"#33E0FF", widht:"100%", height:"5px"}}></hr>
			<div className="row p-title" style={{color:"#33E0FF"}}>
			
				<div className="col">
					<h3 className="p-title">Name</h3>
					{store.detalles && store.detalles.properties.name}
				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Birth": params.endpoint == "planets" ? "Diameter": "Model"}</h3>
				{params.endpoint == "people" ? store.detalles && store.detalles.properties.birth_year : params.endpoint == "planets" ? store.detalles && store.detalles.properties.diameter : store.detalles && store.detalles.properties.model}
				</div>
			
				
				<div className="col">
				<h3 className="text-info">{params.endpoint == "people" ? "Gender": params.endpoint == "planets" ? "Gravity": "vehicle_class"}</h3>
				{params.endpoint == "people" ? store.detalles && store.detalles.properties.gender : params.endpoint == "planets" ? store.detalles && store.detalles.properties.gravity : store.detalles && store.detalles.properties.vehicle_class}

				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Height": params.endpoint == "planets" ? "Climate": "cargo_capacity"}</h3>
				{params.endpoint == "people" ? store.detalles && store.detalles.properties.height : params.endpoint == "planets" ? store.detalles && store.detalles.properties.climate : store.detalles && store.detalles.properties.cargo_capacity}

				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Skin color": params.endpoint == "planets" ? "Terrain": "manufacturer"}</h3>
				{params.endpoint == "people" ? store.detalles && store.detalles.properties.skin_color : params.endpoint == "planets" ? store.detalles && store.detalles.properties.terrain : store.detalles && store.detalles.properties.manufacturer}
				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Eye color": params.endpoint == "planets" ?"orbital_period": "length"}</h3>
				{params.endpoint == "people" ? store.detalles && store.detalles.properties.eye_color : params.endpoint == "planets" ? store.detalles && store.detalles.properties.orbital_period : store.detalles && store.detalles.properties.length}
				</div>

			
			</div>
    	</div>
	);
};

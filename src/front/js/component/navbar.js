import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Bored Todo-List</span>
				</Link>
				<div className="ml-auto pt-2">
					<Link to="/account" className="m-0">
						<i className="fas fa-list-alt fs-3 text userIcon d-flex">
							<p className="fs-6 pt-1 text ms-1">My List</p>
						</i>
					</Link>
				</div>
			</div>
		</nav>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Bored Todo-List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/account">
						<i className="fas fa-user fs-3 text userIcon"></i>
					</Link>
				</div>
			</div>
		</nav>
	);
};

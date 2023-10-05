import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const Footer = () => (

	
	<footer className="footerDiv mt-auto py-3 text-center">
			<div className="justify-content-around d-flex">
				<Link to={'/'} className="linkTags"><span>Home</span></Link>
				<span className="linkTags" onClick={() => swal("Email: Email || Password: Password")}>
				<span>How to Login</span></span>
				<Link to={'/about'} className="linkTags"><span>About</span></Link>
			</div>
			<div className="text-center mt-3">
				Copyright 2023
			</div>
	</footer>

);

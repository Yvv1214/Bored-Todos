import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footerDiv mt-auto py-3 text-center">
			<div className="justify-content-around d-flex">
				<Link to={'/'} className="linkTags"><span>Home</span></Link>
				<Link to={'/'}><span>How to Login</span></Link>
				<Link to={'/about'} className="linkTags"><span>About</span></Link>
			</div>
			<div className="text-center mt-3">
				Copyright 2023
			</div>
	</footer>
);

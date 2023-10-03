import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import sports from "../../img/sports.webp"
import creativity from "../../img/creativity.jpeg";
import social from "../../img/social.jpg";
import { LoginForm } from "../component/LoginForm";
import { useNavigate } from "react-router-dom";
import ReactConfetti from 'react-confetti'
import { Context } from "../store/appContext";


export const Home = () => {
	const {action, store} = useContext(Context)
	const Navigate = useNavigate();
	const [btn, setBtn] = useState(false)
	const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});

	const detectSize = () => {
		setDimension({width: window.innerWidth, height: window.innerHeight})
	}

	useEffect(() => {
		window.addEventListener('resize', detectSize)
		return () => {
			window.removeEventListener('resize', detectSize)
		}
	},[windowDimension])

	const fixed = {
		position: 'fixed'
	}


	return (
		<>
		<div className="text-center pt-5">
			<h1>Bored? Need Something todo?</h1>
		</div>

            <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active" style={{ backgroundImage: 'url(' + sports + ')' }} onClick={()=> Navigate('/sports')}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">Into Sports?</p>
				</div>

				<div className="carousel-item" style={{ backgroundImage: 'url(' + creativity + ')' }} onClick={()=> Navigate('/creative')}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">R U Creative?</p>
				</div>

				<div className="carousel-item" style={{ backgroundImage: 'url(' + social + ')' }} onClick={()=> Navigate('/social')}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">Have  Cabin Fever?</p>
				</div>
			</div>
			

				
                
				<div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselSlides" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselSlides" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
				</div>
				</div>

				<p className="ps-5 pe-5 mt-5 py-2">Looking for a handy list to keep track of all your tasks? Well, look no further! 
					Simply log in and start jotting down your to-dos. But wait, there's more! If you're feeling a bit adventurous, 
					let the list surprise you by randomly adding some exciting tasks for you to tackle. 
					Get ready to conquer your day with this dynamic and engaging to-do list!</p>

				{store.token && store.token != '' && store.token != undefined ? 
					<button className="btn btn-primary" onClick={() => Navigate('/yourList')}>To My List</button>
					: 
					<LoginForm/>
				}

				

				<div className="d-flex justify-content-center mb-5">
					<button onClick={()=> setBtn(!btn)} className="rounded">Confetti?</button>
					{btn && <ReactConfetti
						width={window.width}
						height={window.height}
						style={fixed}
						tweenDuration={1000}
					/>}
				</div>
			
		</>
	);
};

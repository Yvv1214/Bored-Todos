import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import sports from "../../img/sports.webp"
import creativity from "../../img/creativity.jpeg";
import social from "../../img/social.jpg";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState('')
	const [list, setList] = useState([])




	return (
		<>
		<div className="text-center mt-5">
			<h1>Bored? Need Something todo?</h1>
		</div>

            <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active" style={{ backgroundImage: 'url(' + sports + ')' }}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">Into Sports?</p>
				</div>

				<div className="carousel-item" style={{ backgroundImage: 'url(' + creativity + ')' }}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">R U Creative?</p>
				</div>

				<div className="carousel-item" style={{ backgroundImage: 'url(' + social + ')' }}>
					<p className="position-absolute bottom-0 end-0 pe-4 fs-4 text homePtags">Have Cabin Fever?</p>
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
		</>
	);
};

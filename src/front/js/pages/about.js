import React from "react";
import ReactConfetti from "react-confetti";
import { useState, useEffect } from "react";
import dog from "../../img/dog.webp";
import cat from "../../img/cat.webp";
import bunny from "../../img/bunny.webp"



export const About = () => {

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

        <div style={{height: '85.5vh'}}>
            <h1 className="text-center mt-5 mb-3">About</h1>

            <div className="d-flex row gx-0 justify-content-center">
                <div className="imgDiv col-6">
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
						<img src={dog} className="d-block w-100 center" alt="dog"/>
						</div>
						<div className="carousel-item">
						<img src={cat} className="d-block w-100 center" alt="cat"/>
						</div>
						<div className="carousel-item">
						<img src={bunny} className="d-block w-100 center" alt="bunny"/>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
					</div>
                </div>


                <div className="col-md-6 mt-2">
                    <p className="px-3">Hey there! Welcome to this website, perfect for anyone looking for something fun to do! 
                        Whether you're looking to be entertained or just need something to keep you occupied during your free time, 
                        this site has got you covered. So come on in and have some fun!</p>
                        
                    <div className="d-flex justify-content-center mb-5">
					<button onClick={()=> setBtn(!btn)} className="p-2 bg-danger rounded-circle">Confetti?</button>
					{btn && <ReactConfetti
						width={window.width}
						height={window.height}
						style={fixed}
						tweenDuration={1000}
					/>}
				</div>
                </div>
            </div>

            
        </div>
    )
}
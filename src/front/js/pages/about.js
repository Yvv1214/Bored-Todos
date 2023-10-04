import React from "react";
import ReactConfetti from "react-confetti";
import { useState, useEffect } from "react";



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

        <div style={{height: '79.5vh'}} className="aboutBody">
            <h1>About</h1>

            <div className="d-flex">
                <div className="imgDiv">
                    img
                </div>
                <div>
                    <p>Hey there! Welcome to this website, perfect for anyone looking for something fun to do! 
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
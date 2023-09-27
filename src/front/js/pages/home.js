import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import sports from 

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState('')
	const [list, setList] = useState([])


	const createTodo = () => {
		e.preventDefault()
		let newTodo = setTodo('e.target.todoInput.value')
		setList(...todo, newTodo)
		}


	const removeTodo = (index) => {
		e.preventDefault()
		let filtered = todo.filter((i) => i !== index)
		setList(filtered)
		}


	fetch('https://www.boredapi.com/api/activity')




	return (
		<div className="text-center mt-5">
			<h1>Bored? Need Something todo?</h1>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="sports"/>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="creativity"/>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="social"/>
                </div>
            </div>
            </div>
		</div>
	);
};

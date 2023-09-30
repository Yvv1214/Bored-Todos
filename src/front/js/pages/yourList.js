import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const YourList = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState('')
	const [list, setList] = useState([])


	const createTodo = (e) => {
		e.preventDefault()
		let newTodo = e.target.todoInput.value
		setList([...list, newTodo])
		}


	const removeTodo = (e, indexToRemove) => {
		e.preventDefault()
		let filtered = list.filter((item, index, i) => index !== indexToRemove)
		setList(filtered)
		}


	const randomTodo = () => {
		fetch('https://www.boredapi.com/api/activity')
		.then(Response => Response.json())
		.then(result => {setList([...list, result.activity]); console.log(result)})
		

	}
	




	return (
		<div className="text-center mt-5">
			<h1>Bored? Need Something todo?</h1>

			<div className="container bg-light">
				
				<form onSubmit={createTodo}>
				<input 
				className="input"
				name="todoInput" 
				type="text"
				placeholder="add new task" 
				>
				</input>
				</form>

				
				<ul>
					{list.map((item,index)=> {

						return(
							<li className="theList d-flex justify-content-between"
								key={index}>
								{item}
								<button className='button mr-1 float-right end-0' type="button" onClick={(e) => removeTodo(e,index)}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						)
					})}
				</ul>
			</div>

			<button onClick={randomTodo}>randomTodo</button>
		</div>
	);
};

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

			<div className="container bg-light p-0">
				
				<form onSubmit={createTodo} className="border-bottom-0 py-1">
				<input 
				className="listInput py-2"
				name="todoInput" 
				type="text"
				placeholder="add new task" 
				>
				</input>
				</form>

				
				<div className="listdiv">
					{list.map((item,index)=> {

						return(
							<div className="list d-flex justify-content-between align-middle" key={index}>
								<p className="itemP align-middle">{item}</p>
								<button className='button mr-1 float-right end-0 bg-danger rounded' type="button" onClick={(e) => removeTodo(e,index)}>
									<i className="fas fa-times"></i>
								</button>
							</div>
						)
					})}
				</div>
			</div>

			<button className="btn randomizeBTN" onClick={randomTodo}>Random Todo</button>
		</div>
	);
};

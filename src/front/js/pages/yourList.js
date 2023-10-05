import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const YourList = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState('')
	const [list, setList] = useState([])
	const navigate = useNavigate()

	useEffect(() =>{
		if(!store.token){
			navigate('/login')
		}
	},[store.token])


	const createTodo = (e) => {
		e.preventDefault()
		let newTodo = e.target.todoInput.value
		setList([...list, newTodo])
		store.actions.addTodo(newTodo)
		}


	const removeTodo = (e, indexToRemove) => {
		e.preventDefault()
		let filtered = list.filter((item, index, i) => index !== indexToRemove)
		setList(filtered)
		}

	const clearAll = (e) =>{
		e.preventDefault()
		setList([])

	}

	const randomTodo = () => {
		fetch('https://www.boredapi.com/api/activity')
		.then(Response => Response.json())
		.then(result => {setList([...list, result.activity]); console.log(result)})
	}
	

	const total = () => {
		if(list.length > 0){
			return 'Remaing Todos ' + list.length;
		}
		else{
			return 'No Todos'
		}
	}


	return (
		<div className="listBody text-center pt-5">
			<h1>Bored? Your Todos</h1>

			<div className=" listContainer container bg-light p-0 col-lg-5">
				
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
								<div>{index + 1}</div>
								<p className="itemP align-middle">{item}</p>
								<button className='button mr-1 float-right end-0 bg-danger rounded' type="button" onClick={(e) => removeTodo(e,index)}>
									<i className="fas fa-times"></i>
								</button>
							</div>
						)
					})}
				</div>
			</div>

			<div className="d-flex justify-content-center">
				<div className="listTotal rounded border border-dark">{total(list)}</div>
				<span className="sparkleBtn">
					<button className="btn randomizeBTN" onClick={randomTodo}>Random Todo</button>
				</span>
			</div>

			<div>
				<button className="btn btn-danger w-25 mt-4" onClick={clearAll}>Clear All</button>
			</div>
		</div>
	);
};

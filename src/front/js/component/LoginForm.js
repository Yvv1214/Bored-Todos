import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {actions, store} = useContext(Context)
    const navigate = useNavigate()



    const loginHandle = (e) => {
        e.preventDefault();
        actions.login(email, password)
        navigate('/yourList')
    }



    return (

        <div>
            <h2 className="text-center mt-4">Please Login</h2>

            <form className="container col-md-5 p-4 bg-light mb-5 login-form formDiv" onSubmit={(e) => loginHandle(e)} >
			<div className="form-group mt-3 ">
				<label for="email">Email</label>
				<input type="text" className="form-control" placeholder="Email@email.com" value={email} onChange={e => setEmail(e.target.value)}></input>
			</div>

			<div className="form-group mt-3">
				<label for="loginPassword">Password</label>
				<input type="password" className="form-control" autoComplete="on" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
			</div>

			<div className="form-check d-flex justify-content-center mb-2">
				<input type="checkbox" className="form-check-input me-1" id="dropdownCheck2"></input>
				<label className="form-check-label" for="dropdownCheck2">
				Remember me
				</label>
			</div>
			
			<button type="submit" className="btn btn-success mt-3 w-100">Sign in</button>

			</form>
        </div>
    )
}
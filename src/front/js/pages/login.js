import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {actions, store} = useContext(Context)
    const navigate = useNavigate


    useEffect = () => {
        if(!store.token){
            alert('wrong email or password')
        }
        else{
            navigate('/yourlist')
        }
    }

    // const login = () => {
    //     login: async (username, password) => {
    //         try {
    //             const response = await axios.post(process.env.BACKEND_URL + '/api/login',
    //                 { username, password },
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                       }
    //                 })

    //             if (response.status === 200) {
    //                 // Login successful
    //                 const data = response.data;
    //                 console.log(data)
    //                 sessionStorage.setItem('token', data.access_token)
    //                 sessionStorage.setItem('user', data.username)
    //                 sessionStorage.setItem('idUser', data.id)
    //                 setStore({ token: data.access_token, user: data.username, idUser: data.id });
    //                 return true; // Return a success indicator
    //             } else {
    //                 // Login failed, return the error message
    //                 console.log('Login failed:', response.statusText);
    //                 return { error: 'Login failed' };
    //             }
    //         } catch (error) {
    //             console.error('Error during login:', error);
    //             return { error: 'An error occurred during login' };
    //         }
    //     },
    // }



    return (

        <div>
            <h2 className="text-center mt-4">Please Login</h2>

            <form className="container col-md-5 p-4 bg-light mb-5 login-form formDiv" >
			<div className="form-group mt-3 ">
				<label for="email">Email</label>
				<input type="text" className="form-control" id="email" placeholder="Email@email.com" value={email} onChange={e => setEmail(e.target.value)}></input>
			</div>

			<div className="form-group mt-3">
				<label for="loginPassword">Password</label>
				<input type="password" className="form-control" id="loginPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
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
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},


			actions: {

				
				syncTokenfromLocalStorage: () => {
					const token = localStorage.getItem('token')
					if(token && token != '' && token != undefined)
					setStore({token: token});
				},



				logout: () => {
					const token = localStorage.removeItem('token');
					setStore({token: null});
				},


			
				// make it async so u can use it with .then() on the login page actions.login.then()
					login: async (email, password) => {
						const options = {
							method:'POST',
							headers: {
								"Access-Control-Allow-Origin": "*",
								"Content-Type": "application/json"
						},
							mode: 'no-cors',
							body: JSON.stringify({
								"email": email,
								"password": password
							})
						};
		
				//'try' this if it doesnt work it moves to catch
						try{
						const resp = await fetch(process.env.BACKEND_URL+'api/login', options);
								if(resp.status !== 200) {
								alert('an error occured');
								return false;
								 }

						const data = await resp.json()
							console.log(data)
							sessionStorage.setItem('token', data.access_token);
							setStore({token: data.access_token})	
							console.log(token )
							
							return true;}
				// access_token comes from the postman where u post/login that has the hash and the token being used is the one thats null atop
				//the login() also stores the token with setStore and making token: null into token:hash#
									
						
						catch(error) {
							  console.error('There was an error', error)
							  }
						
				
					},
			



			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				const store = getStore()
				const opts = {
					headers: {
						"Authorization" : "Bearer" + store.token
					}
				}
				
					// fetching data from the backend
					fetch(process.env.BACKEND_URL+"api/private", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => 
					console.log("Error loading message from backend", error))
			},


			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	}};


export default getState;

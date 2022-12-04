const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			button: [],
			characters: {},
			character: {},
			planets: {},
			planet: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addElement: (element)=>{
				const store = getStore();
				setStore({button: [...store.button, element]}) //3 puntos array.push

			},

			deleteElement: (index) =>{
				const store = getStore()
				setStore({button: store.button.filter((buttonFav, i, arr)=> i !== index)})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


				
				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () =>{
				fetch("https://swapi.tech/api/people/")
				.then(response => response.json())
				.then(result => setStore({characters: result}))
				.catch(error => console.log('error', error));
			},
			loadCharactersById: (id) =>{
				fetch("https://swapi.tech/api/people/"+id)
				.then(response => response.json())
				.then(result => setStore({character: result}))
				.catch(error => console.log('error', error));
			},
			loadPlanets:()=>{
				fetch("https://swapi.tech/api/planets/")
				.then(response => response.json())
				.then(result => setStore({planets: result}))
				.catch(error => console.log('error', error));
			},
			loadPlanetsById:(id)=>{
			fetch("https://swapi.tech/api/planets/"+id)
            .then(response => response.json())
            .then(data => setStore({planet: data}))
            .catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;

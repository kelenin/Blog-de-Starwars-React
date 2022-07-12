const BASEURL = "https://swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: null,
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			getCharacterByUid: (id)=>{
				fetch(BASEURL + 'people/'+id).then(response => response.json()).then(data => setStore({character: data.result})).catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
		}
	};
};

export default getState;

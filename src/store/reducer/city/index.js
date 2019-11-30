import initCityList from "../../state/city"
export default function(state=initCityList,{type,payload}){
	state= JSON.parse(JSON.stringify(state))
	if(type==="GET_CITIES"){
		state.cities =  payload.cities
	}
	// console.log(state.cities)
	return state
}
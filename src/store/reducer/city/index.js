import initCityList from "../../state/city"
export default function(state=initCityList,{type,payload}){
	state= JSON.parse(JSON.stringify(state))
	if(type==="GET_CITIES"){
		state.cities =  payload.cities
	}
	return state
}
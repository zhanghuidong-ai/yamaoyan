import SearchInit from "../../state/search"
export default function(state=SearchInit,{type,payload}){
	state = JSON.parse(JSON.stringify(state))
	console.log(state)
	return state
}
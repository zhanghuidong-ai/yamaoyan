import stateInit from "../../state/login"

export  default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
	
	if(type === "TAB_GOBACK"){
		state.isgoback=payload.bool
    }
	if(type === "ERROR"){
		state[payload.info]=true
	}
	if(type==="PASS"){
		state[payload.info]=false
	}
	if(type==="CHANGE_GET"){
		state.isget=true
	}
	if(type==="UPUSERINFO"){
		state[payload.info]=payload.text
	}
    return state;
}
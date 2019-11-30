import stateInit from "../../state/login"

export  default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
	
	if(type === "TAB_GOBACK"){
		state.isgoback=payload.bool
    }
	if(type === "ERROR"){
		state[payload.info]=true
	}
	if(type==="CHANGEDISABLE"){
		state.disabled=payload.info
	}
	if(type==="PASS"){
		state[payload.info]=false
	}
	if(type==="UPUSERINFO"){
		state[payload.info]=payload.text
	}
	if(type==="CLEARINFO"){
		state.username=state.password=state.telid=""	
	}
    return state;
}
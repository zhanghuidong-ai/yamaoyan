import stateInit from "../../state/login"

export  default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    // if(type === "ADD_NEWS"){
    //     state.newsList.push(payload)
    // }else 
	if(type === "GET_DETAIL"){	
		state.newsList=payload.newsList	
  //       const id = payload.id/1;	
  //       const detail = state.newsList.find(v=>v.id === id);
		// if(detail) {
		// 	detail.clickNum++;		
		// }
		// state.detail = detail;
    }
    // localStorage.news = JSON.stringify(state);
    return state;
}
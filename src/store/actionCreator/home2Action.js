export default {
	upuserinfo(info,e){
		return {
			type:"UPUSERINFO",
			payload:{
				text:e.target.value,
				info
			}
		}
	},
	clearinfo(){
		return {
			type:"CLEARINFO",
			payload:{
				text:"",
			}
		}
	},
	changedisable(info){
		return {
			type:"CHANGEDISABLE",
			payload:{
				info
			}
		}
	},
	goback(bool){
		return {
			type:"TAB_GOBACK",
			payload:{
				bool
			}
		}
	},
	error(info){
		return {
			type:"ERROR",
			payload:{
				info,
			}
		}
	},
	pass(info){
		return {
			type:"PASS",
			payload:{
				info,
			}
		}
	}
}
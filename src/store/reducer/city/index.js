import initCityList from "../../state/city"
export default function(state=initCityList,{type,payload}){
	state= JSON.parse(JSON.stringify(state))
	if(type==="GET_CITIES"){
		state.cities =  payload.cities
	}
	return state
}

// const state = {
// 	formattedAddress:localStorage.formattedAddress || '定位中···',
// 	province:localStorage.province || '北京市',
// 	addressTips:[],
// }
// const mutations={
// 	CHANG_LOCATION(state,{formattedAddress,province}){
// 		state.formattedAddress = localStorage.formattedAddress = formattedAddress
// 		state.province = localStorage.province = province
// 	},
// 	CHANGE_TIPS(state,tips){
// 		state.addressTips = tips
// 	}
// }
// const actions={
// 	getlocations({state,commit}){
// 		// if(state.formattedAddress === "定位中···")
// 		AMap.plugin('AMap.Geolocation', function() {
// 			var geolocation = new AMap.Geolocation({
// 				// 是否使用高精度定位，默认：true
// 				enableHighAccuracy: true,
// 				// 设置定位超时时间，默认：无穷大
// 				timeout: 10000,
// 			})

// 			geolocation.getCurrentPosition()
// 			AMap.event.addListener(geolocation, 'complete', onComplete)
// 			AMap.event.addListener(geolocation, 'error', onError)

// 			function onComplete (data) {
// 				// data是具体的定位信息
// 				// console.log(data)
// 				commit('CHANG_LOCATION',{formattedAddress:data.formattedAddress,province:data.addressComponent.province})
// 			}

// 			function onError (data) {
// 				// 定位出错
// 				console.log(data)
// 			}
// 		})
// 	},
// 	getAddressTips({commit},keyword){
// 		AMap.plugin('AMap.Autocomplete', function(){
// 			// 实例化Autocomplete
// 			var autoOptions = {
// 			  //city 限定城市，默认全国
// 			  city: '全国'
// 			}
// 			var autoComplete= new AMap.Autocomplete(autoOptions);
// 			autoComplete.search(keyword, function(status, result) {
// 			  // 搜索成功时，result即是对应的匹配数据
// 			  commit('CHANGE_TIPS',result.tips)
// 			})
// 		  })
// 	}
// }
// export default {
// 	state,
// 	mutations,
// 	actions
// }
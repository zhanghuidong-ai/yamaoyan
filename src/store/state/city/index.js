export default {
	cities:localStorage.cities?JSON.parse(localStorage.cities):[],
	formattedAddress:localStorage.formattedAddress || '定位中···',
	province:localStorage.province || '北京市',
	addressTips:[],
}
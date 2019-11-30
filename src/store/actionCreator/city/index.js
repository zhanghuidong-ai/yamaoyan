export const getCityList = payload=>(
	{
		type:"GET_CITIES",
		payload
	}
)
export default {
	getCityList(){
		return async (dispatch)=>{
			const {data} = await this.$axios.get("/dianying/cities.json")
			console.log(data)
			localStorage.cities =  JSON.stringify(data.cts)
			dispatch(getCityList({
				cities: data.cts
			}))

		}
	}
}
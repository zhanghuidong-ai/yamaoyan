import React from "react"
export default class Store extends React.Component{

	render(){
        let  data =[
            {
                id:1,
                name:'商城订单1'
            },
            {
                id:2,
                name:'商城订单2'
            },
        ]
		return (
			<div >
               {
                data.map(function(item,key){
                    return(
                        <div key={key}>
                            商城订单名称:{item.name}
                        </div>
                        
                    ) 
                })
               }
			</div>
		)
	}
}

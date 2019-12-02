import Swiper from 'swiper/js/swiper.js' 
import pubsub from 'pubsub-js'
import 'swiper/css/swiper.min.css'
import React from 'react'
import imgurl from './filter_url.js'
import './diy_swiper.css'
class New extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
				movies:[]
			}
        }
    }
    componentDidMount() {
		var swiper = new Swiper('.swiper-container', {
			observer:true,
			observeParents:true,
			loop:true,
		  slidesPerView: 4,
		  spaceBetween: 30,
		  centeredSlides: true,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		});
		
		pubsub.subscribe('show_cinema',async (name,data)=>{
			console.log(333,data)
			this.setState({
				data
			})
		})
    }
    render(){
        return(
             <div className="swiper-container ">
               <div className="swiper-wrapper " >
			   {
				  this.state.data.movies.map(v=>(
					 <div className="swiper-slide " key={v.id}>
						<img  src={imgurl(v.img)}  style={{height:'135px'}} />
					 </div>
				  )) 
			   }
                               
               </div>
              
               
             </div>     
        )
    }
}

export default New


import '../assets/style/css/Download_app_bar.css' //  头部的 app 下载条
import React from 'react'
import ListenScroll from '../l-tools'
class Download_app_bar extends React.Component{
 
    render(){
        return(
            <div className='download-app-bar'> 
				<img src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png' alt='true'/>
				<div className='app-name-desc'>
					<div className="title">猫眼</div>
					<div className="desc">在线选座，热门影讯，爱上看电影</div>
				</div>
				<input type='button' value ="立即打开"/>
               
                <ListenScroll num={800} scrollCallback={()=>200<=document.querySelector(".page-wrap").scrollTop ? document.querySelector('.download-app-bar').style.display='none':document.querySelector('.download-app-bar').style.display='flex'}></ListenScroll>
            </div>
        )
    }
}
export default Download_app_bar
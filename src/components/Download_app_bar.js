import '../assets/style/css/Download_app_bar.css' //  头部的 app 下载条
import React from 'react'
import ListenScroll from '../l-tools'
class Download_app_bar extends React.Component{
    scrollHidden(num){
        // const wrapper = document.getElementsByClassName('download-app-bar')
        // console.log(window.scrollY)
        // if(num>650){
        //  wrapper[0].style.display='none'
        // console.log(wrapper[0].style.display)
        // }
      
    }
    render(){
        return(
            <div className=''> 
                <div className='download-app-bar'>
                    <img src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png'/>
                    <div className='app-name-desc'>
                        <div className="title">猫眼</div>
                        <div className="desc">在线选座，热门影讯，爱上看电影</div>
                    </div>
                    <input type='button' value ="立即打开"/>
                </div>
                <ListenScroll num={700} scrollCallback={this.scrollHidden.bind(this,700)}></ListenScroll>
            </div>
        )
    }
}
export default Download_app_bar
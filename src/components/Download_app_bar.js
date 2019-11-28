import '../assets/style/Download_app_bar.css' //  头部的 app 下载条
import React from 'react'

class Download_app_bar extends React.Component{
    render(){
        return(
            <div> 
                <div className='download-app-bar'>
                    <img src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png'/>
                    <div className='app-name-desc'>
                        <div className="title">猫眼</div>
                        <div className="desc">在线选座，热门影讯，爱上看电影</div>
                    </div>
                    <input type='button' value ="立即打开"/>
                </div>
            </div>
           
        )
    }
}
export default Download_app_bar
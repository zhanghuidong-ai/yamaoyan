// props：
//     num：{number} 设置的触底限制高度，默认值为0
//     scrollCallback：{function} 满足页面滚动到底的回调

import  React from 'react';
export default class ListenScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeType:true,  // 声明回调执行开关
        }
        this.bindScroll = this.bindScroll.bind(this);
    }
    componentDidMount() {
    
        document.querySelector(".page-wrap").addEventListener('scroll', ()=>this.bindScroll());
        // 挂载页面滚动监听
    }
    componentWillUnmount() {
        // 移除页面滚动监听
        document.querySelector(".page-wrap").removeEventListener('scroll', this.bindScroll.bind(this));
        
    }
    render() {
        return (
            <div />
        )
    }

     
    bindScroll() {
        let scrollTop = document.querySelector(".page-wrap").scrollTop;//滚动条卷去的高度
        // console.log(scrollTop)
        let clientHeight = document.querySelector(".page-wrap").clientHeight;//可视区域高度
        let scrollHeight = document.querySelector(".page-wrap").scrollHeight;//元素总高度
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;
        // console.log(height,scrollTop, clientHeight, scrollHeight)
       
        // 判断距离页面底部的高度
        if (height <= (this.props.num || 0)) {
            // 判断执行回调条件
            if (this.state.codeType) {
                // 执行回调
                this.props.scrollCallback();
                // 关闭判断执行开关
                this.setState(
                    {
                        codeType: false,
                    }
                );
            }
        } else {
            // 打开判断执行开关
            this.setState({
                codeType: true
            });
        }
        // console.log(this.props)
        // this.props.num<=document.querySelector('.page-wrap').scrollTop ? document.querySelector(('.download-app-bar')[0].style.display='none'):document.querySelector(('.download-app-bar')[0].style.display='flex')
        // console.log(document.querySelector('.download-app-bar').style.display)
    }
}


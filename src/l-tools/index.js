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
        // 挂载页面滚动监听
        window.addEventListener('scroll', this.bindScroll)
    }
    componentWillUnmount() {
        // 移除页面滚动监听
        window.removeEventListener('scroll', this.bindScroll.bind(this));
    }
    render() {
        return (
            <div />
        )
    }
    bindScroll(event) {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // 页面高度
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;
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
    }
}


import React, {Component} from 'react'
 

class Header extends Component {
    componentDidMount() {
        $('.ui.dropdown').dropdown();
    }

    render() {
        return (
            <header>
                <div className="bigcontainer">
                    <div id="logo">
                        <a href="./">首页</a>
                    </div>
                    <div className="user"> 
                        <div className="ui inline labeled icon top right pointing dropdown"> 欢迎，$用户名
                        <i className="dropdown icon"></i>
                            <div className="menu">
                                <a className="item" href="http://www.yeelink.net"><i className="reply mail icon"></i>返回首页</a>
                                <a className="item" href="/user/logout"><i className="sign out icon"></i>注销登录</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header

import React, {Component} from 'react'
import utils from '../../shared/utils'

class Header extends Component {
     constructor() {
        super()

         this.state = { 
           name : ''
           
        
        } 
    }
    componentDidMount() {
        let _this = this
        $('.ui.dropdown').dropdown();


        utils.ajax({url: '/api/isLogin'}).then(re => {
 
           if(re.name){
            _this.setState({name : "欢迎，"+re.name});
           }else{
            location.href='/login'
           }
        })
       
    }

    render() {
        return (
            <header>
                <div className="bigcontainer">
                    <div id="logo">
                        <a href="./">首页</a>
                    </div>
                    <div className="user"> 
                        <div className="ui inline labeled icon top right pointing dropdown">{this.state.name} 
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

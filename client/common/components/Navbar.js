import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

 

class Navbar extends Component {
    constructor() {
        super()
    }


    render() {
        return ( 
            <div className="ui teal inverted menu">
                <div className="bigcontainer">
                    <div className="right menu">
                        <IndexLink className="item" activeClassName="active" to="/"><i className="home icon"></i>首页</IndexLink> 
                        <Link className="item" activeClassName="active" to="/material"><i className="home icon"></i>素材管理</Link>
                        <Link className="item" activeClassName="active" to="/program"><i className="home icon"></i>节目管理</Link>
                        <Link className="item" activeClassName="active" to="/mession"><i className="home icon"></i>任务管理</Link>
                        <Link className="item" activeClassName="active" to="/sent"><i className="home icon"></i>发送管理</Link>
                        <Link className="item" activeClassName="active" to="/examine"><i className="home icon"></i>审核管理</Link>
                        <Link className="item" activeClassName="active" to="/user"><i className="home icon"></i>用户管理</Link>
                        <Link className="item" activeClassName="active" to="/setting"><i className="home icon"></i>系统设置</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

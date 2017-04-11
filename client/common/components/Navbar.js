import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
 

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            // <nav classNameName={styles.navbar}>
            //     <IndexLink classNameName={styles.link} activeClassNameName={styles.active} to="/">home</IndexLink>
            //     <Link classNameName={styles.link} activeClassNameName={styles.active} to="/explore">explore</Link>
            //     <Link classNameName={styles.link} activeClassNameName={styles.active} to="/about">about</Link>
            // </nav>

            <div className="ui teal inverted menu">
                <div className="bigcontainer">
                    <div className="right menu">
                        <a className="active item" href="./"><i className="home icon"></i>首页</a>
                        <a className="item" href="./devices_list.html"><i className="sitemap icon"></i>素材管理</a>
                        <a className="item" href="./product_list.html"><i className="cloud icon"></i>节目管理</a>
                        <a className="item" href="./user_profile.html"><i className="info icon"></i>任务管理</a>
                        <a className="item" href="./user_profile.html"><i className="info icon"></i>发送管理</a>
                        <a className="item" href="./user_profile.html"><i className="info icon"></i>审核管理</a>
                        <a className="item" href="./user_profile.html"><i className="info icon"></i>用户管理</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

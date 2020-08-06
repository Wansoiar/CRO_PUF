import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './nav.css';

export default class Nav extends Component{

    state = {
        isLogin: false,
        username: ''
    }

    componentDidMount(){
        //获取localStroage中的值，来更新state
        let stroage = window.localStorage;
        const logInfo = stroage.getItem('login');
        const username = stroage.getItem('username');
        this.setState({
            isLogin: logInfo,
            username: username
        });
    }

    logout = () => {
        //退出登录
        let storage = window.localStorage;
        storage.removeItem('login');
        storage.removeItem('username');
        storage.removeItem('pwd');
        let history = createBrowserHistory();
        history.push('/login');
    }

    render(){
        const { isLogin, username } = this.state;
        return(
            <nav className='navbar navbar-default navbar-fixed-top navbar-inverse myNav'>
                <div className='container'>
                    <ul className='nav navbar-nav nav-pills'>
                        <li><NavLink to='/welcome'><span className='glyphicon glyphicon-home'/> 首页</NavLink></li>
                        <li><NavLink to='/operation'><span className='glyphicon glyphicon-export'/> 密钥共享操作</NavLink></li>
                    </ul>
                    <ul className={`nav navbar-nav nav-pills navbar-right${isLogin? ' nav2': '  nav1'}`}>
                        <li><NavLink to='/login'><span className='glyphicon glyphicon-log-in'/> 登录</NavLink></li>
                        <li><a><span className='glyphicon glyphicon-option-vertical' aria-hidden="true"/></a></li>
                        <li><NavLink to='/register'>注册</NavLink></li>
                    </ul>
                    <ul className={`nav navbar-nav nav-pills navbar-right${isLogin? '  nav1': ' nav2'}`}>
                        <li className='users'><a href='#'><span className='glyphicon glyphicon-user'/> {username} </a></li>
                        <li><a href='#' onClick={this.logout}>退出<span className='glyphicon glyphicon-log-out'/></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}



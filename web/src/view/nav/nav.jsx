import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './nav.css';
import Login from '../login/login';

export default class Nav extends Component{

    state = {
        isLogin: false
    }

    componentDidMount(){
        //获取localStroage中的值，来更新state
        let stroage = window.localStorage;
        const logInfo = stroage.getItem('login');
        this.setState({isLogin: logInfo});
    }

    logout = () => {
        //退出登录
        let storage = window.localStorage;
        storage.removeItem('login');
        let history = createBrowserHistory();
        history.push('/login');
    }

    render(){
        return(
            <nav className='navbar navbar-default navbar-fixed-top navbar-inverse myNav'>
                <div className='container'>
                    <ul className='nav navbar-nav nav-pills'>
                        <li><NavLink to='/welcome'><span className='glyphicon glyphicon-home'/> 首页</NavLink></li>
                        <li><NavLink to='/operation'><span className='glyphicon glyphicon-export'/> 密钥共享操作</NavLink></li>
                    </ul>
                    <ul className='nav navbar-nav nav-pills navbar-right nav1' style={{display: this.state.isLogin?'none':'inline-block'}}>
                        <li><NavLink to='/login'><span className='glyphicon glyphicon-log-in'/> 登录</NavLink></li>
                        <li><a><span className='glyphicon glyphicon-option-vertical' aria-hidden="true"/></a></li>
                        <li><NavLink to='/register'>注册</NavLink></li>
                    </ul>
                    <ul className='nav navbar-nav nav-pills navbar-right nav2' style={{display: this.state.isLogin?'inline-block':'none'}}>
                        <li className='users'><a href='#'><span className='glyphicon glyphicon-user'/> xinan</a></li>
                        <li><a href='#' onClick={this.logout}>退出<span className='glyphicon glyphicon-log-out'/></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}



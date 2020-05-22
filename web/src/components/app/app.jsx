import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Welcome from '../../view/welcome/welcome';
import Operation from '../../view/operation/operation';
import Login from '../../view/login/login';
import Register from '../../view/register/register';

import './app.css';

export default class App extends Component{

    render(){
        return(
            <div style={{height: '100%'}}>
                <nav className='navbar navbar-default navbar-fixed-top navbar-inverse myNav'>
                    <div className='container'>
                        <ul className='nav navbar-nav nav-pills'>
                            <li><NavLink to='/welcome'><span className='glyphicon glyphicon-home'/> 首页</NavLink></li>
                            <li><NavLink to='/operation'><span className='glyphicon glyphicon-export'/> 密钥共享操作</NavLink></li>
                        </ul>
                        <ul className='nav navbar-nav nav-pills navbar-right'>
                            <li><NavLink to='/login'><span className='glyphicon glyphicon-log-in'/> 登录</NavLink></li>
                            <li><a><span className='glyphicon glyphicon-option-vertical' aria-hidden="true"/></a></li>
                            <li><NavLink to='/register'>注册</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <div style={{height: '100%'}} className='myContainer'>
                    <Switch>
                        <Route path='/welcome' component={Welcome}/>
                        <Route path='/operation' component={Operation}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Redirect to='/welcome'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Welcome from '../../view/welcome/welcome';
import Operation from '../../view/operation/operation';
import Login from '../../view/login/login';
import Register from '../../view/register/register';

export default class App extends Component{

    render(){
        return(
            <div style={{height: '100%'}}>
                <nav className='navbar navbar-default navbar-fixed-top'>
                    <div className='container'>
                        <ul className='nav navbar-nav nav-pills'>
                            <li><NavLink to='/welcome'>首页</NavLink></li>
                            <li><NavLink to='/operation'>密钥共享操作</NavLink></li>
                        </ul>
                        <ul className='nav navbar-nav nav-pills navbar-right'>
                            <li><NavLink to='/login'>登录</NavLink></li>
                            <li><a><span className='glyphicon glyphicon-option-vertical' aria-hidden="true"/></a></li>
                            <li><NavLink to='/register'>注册</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <div style={{height: '100%'}}>
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
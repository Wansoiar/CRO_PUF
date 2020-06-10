import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import PubSub from 'pubsub-js';

import Welcome from '../../view/welcome/welcome';
import Operation from '../../view/operation/operation';
import Login from '../../view/login/login';
import Register from '../../view/register/register';

import './app.css';

export default class App extends Component{

    state = {
        login: 0
    };

    changeState = (data) => {
        this.setState({
            login: data
        })
    }

    componentDidMount() {
        //订阅登录信息（login）
        PubSub.subscribe('login', (msg, data) => {
            let nav1 = document.getElementsByClassName('nav1')[0];
            let nav2 = document.getElementsByClassName('nav2')[0];
            if(data > 0){
                nav1.style.display = 'none';
                nav2.style.display = 'inline-block';
                console.log('变了');
            }else{
                nav1.style.display = 'inline-block';
                nav2.style.display = 'none';
                console.log('又变回去了');
            }
        })
    }

    render(){
        return(
            <div style={{height: '100%'}}>
                <nav className='navbar navbar-default navbar-fixed-top navbar-inverse myNav'>
                    <div className='container'>
                        <ul className='nav navbar-nav nav-pills'>
                            <li><NavLink to='/welcome'><span className='glyphicon glyphicon-home'/> 首页</NavLink></li>
                            <li><NavLink to='/operation'><span className='glyphicon glyphicon-export'/> 密钥共享操作</NavLink></li>
                        </ul>
                        <ul className='nav navbar-nav nav-pills navbar-right nav1'>
                            <li><NavLink to='/login'><span className='glyphicon glyphicon-log-in'/> 登录</NavLink></li>
                            <li><a><span className='glyphicon glyphicon-option-vertical' aria-hidden="true"/></a></li>
                            <li><NavLink to='/register'>注册</NavLink></li>
                        </ul>
                        <ul className='nav navbar-nav nav-pills navbar-right nav2'>
                            <li className='users'><a href='#'><span className='glyphicon glyphicon-user'/> xinan</a></li>
                            <li><a href='#'>退出<span className='glyphicon glyphicon-log-out'/></a></li>
                        </ul>
                    </div>
                </nav>
                <div style={{height: '100%'}} className='myContainer'>
                    <Switch>
                        <Route path='/welcome' component={Welcome} />
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
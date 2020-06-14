import React, {Component} from 'react';
import {createBrowserHistory} from 'history';


import './login.css';
import Nav from '../nav/nav';

export default class Login extends Component{

    state = {
        userName: '',
        pwd: ''
    };

    alertLogin = () => {
        // console.log(this.props.login);
        let history = createBrowserHistory();
        //提示框
        let alert = document.getElementsByClassName('alert-success');
        let claName = alert[0].className.split(' ');
        alert[0].className = claName[0] + ' ' + claName[1] + ' ' + claName[2] + ' in';
        let {userName} = this.state;
        let {pwd} = this.state;
        setTimeout(function () {
            alert[0].className = claName[0] + ' ' + claName[1] + ' ' + claName[2] + ' ' + claName[3];
            //将登陆信息储存到localStroage中
            let storage = window.localStorage;
            storage.setItem('login',true);
            storage.setItem('username',userName);
            storage.setItem('pwd',pwd);
            //页面跳转到操作页面
            history.push('/operation');
            history.go();
        },3000);
    };

    updateUsername = (e) => {
        this.setState({
            userName: e.target.value
        })
    };

    updatePwd = (e) => {
        this.setState({
            pwd: e.target.value
        })
    };


    render(){
        return(
            <div style={{height: '100%',width: '100%'}}>
                <Nav/>
                <div className='login'>
                    <div className="alert alert-success alert-success1 hide" role="alert">
                        <strong>登录成功！3秒后将跳转操作页面...</strong>
                    </div>
                    <div className='container login-log'>
                        <h3 className='log'>登录</h3>
                        <form>
                            <div className='form-group'>
                                <label htmlFor="userName">用户名：</label>
                                <input type='text' className='form-control' id='userName' placeholder='Name'  value={this.state.userName} onChange={this.updateUsername} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="userPwd">密码：</label>
                                <input type='password' className='form-control' id='userPwd' placeholder='Password'  value={this.state.pwd} onChange={this.updatePwd} />
                            </div>
                            <button type="button" className="btn btn-default center-block btn-log" onClick={this.alertLogin}>登录</button>
                        </form>
                    </div>
                    <div className='log-area1'/>
                    <div className='log-area2'/>
                </div>
            </div>
        )
    }
}
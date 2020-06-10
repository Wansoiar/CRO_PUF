import React, {Component} from 'react';
import {createBrowserHistory} from 'history';

import './register.css';

export default class Register extends Component{

    state = {
        regName: '',
        regPwd: ''
    };

    componentDidMount() {
        let reg = document.getElementsByClassName('btn-reg')[0];
        reg.disabled = true;
    }

    alertSuccess = () => {
        let history = createBrowserHistory();
        //提示框
        let alert = document.getElementsByClassName('alert-success');
        let claName = alert[0].className.split(' ');
        alert[0].className = claName[0] + ' ' + claName[1] + ' ' + claName[2] + ' in';
        setTimeout(function () {
            alert[0].className = claName[0] + ' ' + claName[1] + ' ' + claName[2] + ' ' + claName[3];
            //跳转到登录页面
            history.push('/login');
            history.go();
        },3000);
    };

    regNameChange = (event) => {
        const regName = event.target.value;
        this.setState({regName});
    };

    regPwdChange = (event) => {
        const regPwd = event.target.value;
        this.setState({regPwd});
    };

    pwdCheck = (event) => {
        let check = this.checkInput.value;
        let checkLogo = document.getElementsByClassName('reg-check-logo')[0];
        let reg = document.getElementsByClassName('btn-reg')[0];
        if(check === this.state.regPwd){
            checkLogo.style.color = '#32CD32';
            reg.disabled = false;
        }else{
            checkLogo.style.color = '#333333';
            reg.disabled = true;
        }
    };

    render(){
        return(
            <div className='register'>
                <div className="alert alert-success alert-success1 hide" role="alert">
                    <strong>注册成功！3秒后将跳转登陆页面...</strong>
                </div>
                <div className='container register-reg'>
                    <h3 className='reg'>注册</h3>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="userName">设置用户名：</label>
                            <input type='text' className='form-control' id='userName' placeholder='New Name' value={this.state.regName} onChange={this.regNameChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="userPwd">设置密码：</label>
                            <input type='password' className='form-control' id='userPwd' placeholder='New Password' value={this.state.regPwd} onChange={this.regPwdChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="userPwd">再次输入密码：</label>
                            <input type='password' className='form-control reg-check' id='userPwd' placeholder='New Password' ref={input => this.checkInput = input} onKeyUp={this.pwdCheck}/>
                            <span className='glyphicon glyphicon-ok-circle reg-check-logo'/>
                        </div>
                        <button type="button" className="btn btn-default center-block btn-reg" onClick={this.alertSuccess}>注册</button>
                    </form>
                </div>
                <div className='reg-area1'/>
                <div className='reg-area2'/>
            </div>
        )
    }
}
import React, {Component} from 'react';

import './register.css';

export default class Register extends Component{

    render(){
        return(
            <div className='register'>
                <div className='container register-reg'>
                    <h3 className='reg'>注册</h3>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="userName">设置用户名：</label>
                            <input type='text' className='form-control' id='userName' placeholder='Name'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="userPwd">设置密码：</label>
                            <input type='text' className='form-control' id='userPwd' placeholder='New Password'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="userPwd">再次输入密码：</label>
                            <input type='text' className='form-control reg-check' id='userPwd' placeholder='New Password'/>
                            <span className='glyphicon glyphicon-ok'/>
                        </div>
                        <button type="submit" className="btn btn-default center-block">注册</button>
                    </form>
                </div>
            </div>
        )
    }
}
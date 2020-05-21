import React, {Component} from 'react';

import './login.css';

export default class Login extends Component{

    render(){
        return(
            <div className='login'>
                <div className='container login-log'>
                    <h3 className='log'>登录</h3>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="userName">用户名：</label>
                            <input type='text' className='form-control' id='userName' placeholder='Name'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="userPwd">密码：</label>
                            <input type='text' className='form-control' id='userPwd' placeholder='Password'/>
                        </div>
                        <button type="submit" className="btn btn-default center-block">登录</button>
                    </form>
                </div>
            </div>
        )
    }
}
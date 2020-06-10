import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Welcome from '../../view/welcome/welcome';
import Operation from '../../view/operation/operation';
import Login from '../../view/login/login';
import Register from '../../view/register/register';
import Nav from '../../view/nav/nav';

import './app.css';

export default class App extends Component{


    render(){
        return(
            <div style={{height: '100%'}} className='myContainer'>
                <Nav/>
                <Switch>
                    <Route path='/welcome'  component={Welcome} />
                    <Route path='/operation' component={Operation}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Redirect to='/welcome'/>
                </Switch>
            </div>
        )
    }
}
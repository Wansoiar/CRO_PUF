import React, {Component} from 'react';
import logo from '../logo.svg';

export default class App extends Component{

    render(){
        return(
            <div>
                <p className='head'>zheshiwodediyigeSPA</p>
                <img className='logo' src={logo} alt='logo'/>
            </div>
        )
    }
}
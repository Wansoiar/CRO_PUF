import React, {Component} from 'react';

import './welcome.css';

export default class Welcome extends Component{

    render(){
        return(
            <div className='welcome'>
                <div className='sayWelcome'>Welcome to the key sharing system!</div>
                <div className='disc'>In this system, the key sharing method based on CRO-PUF is adopted, which enables two Internet of things devices to realize key sharing through lightweight primitive PUF.</div>
                <div className='background-area'/>
            </div>
        )
    }
}
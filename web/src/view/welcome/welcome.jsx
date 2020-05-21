import React, {Component} from 'react';

import './welcome.css';

export default class Welcome extends Component{

    render(){
        return(
            <div className='welcome'>
                <p className='sayWelcome'>Welcome!</p>
            </div>
        )
    }
}
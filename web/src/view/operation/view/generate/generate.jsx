import React, {Component} from 'react';

import HistoryList from "./components/history-list/history-list";
import Get from "./components/get/get";
import './generate.css';

export default class Generate extends Component{

    render(){
        return(
            <div className='generate'>
                <Get/>
                <HistoryList/>
            </div>
        )
    }
}
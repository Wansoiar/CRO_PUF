import React, {Component} from 'react';

import './history-list.css';
import HistoryListItem from "./component/history-list-item";

export default class HistoryList extends Component{

    render(){
        return(
            <div className='history'>
                <p>历史生成记录：</p>
                <ul className="list-group his-list">
                    <HistoryListItem/>
                    <HistoryListItem/>
                    <HistoryListItem/>
                </ul>
            </div>
        )
    }
}
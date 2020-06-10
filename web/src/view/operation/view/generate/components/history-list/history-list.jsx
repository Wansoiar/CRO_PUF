import React, {Component} from 'react';

import './history-list.css';
import HistoryListItem from "./component/history-list-item";

export default class HistoryList extends Component{

    render(){
        return(
            <div className='history'>
                <p><span className='glyphicon glyphicon-tasks'/> 历史生成记录：</p>
                <div className='no-history' style={{display: 'none'}}><h2>暂无历史生成记录</h2></div>
                <ul className="list-group his-list">
                    <HistoryListItem/>
                    {/*<HistoryListItem/>*/}
                    {/*<HistoryListItem/>*/}
                </ul>
            </div>
        )
    }
}
import React, {Component} from 'react';

import './history-list.css';
import HistoryListItem from "./component/history-list-item";

export default class HistoryList extends Component{

    onDeleteItem = (puf, index) => {
        this.props.onDeleteList(puf, index);
    }

    render(){
        const {names} = this.props;
        console.log('puf ',this.props.puf);
        return(
            <div className='history'>
                <p><span className='glyphicon glyphicon-tasks'/> 历史生成记录：</p>
                <div className='no-history' style={{display: this.props.puf.length?'none':'flex'}}><h2>暂无历史生成记录</h2></div>
                <ul className="list-group his-list">
                    {this.props.puf.map((data, index) => {
                        return(<HistoryListItem onDelete = {this.onDeleteItem} names = {names} index = {index} key = {index} CS = {data} pufNum = {this.props.pufNum}/>)
                    })}
                </ul>
            </div> 
        )
    }
}
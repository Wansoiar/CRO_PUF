import React, {Component} from 'react';

import './history-list-item.css';

export default class HistoryListItem extends Component{

    render(){
        return(
            <li className="list-group-item">
                <div>
                    <span className='glyphicon glyphicon-remove delete'/>
                    <p>时间</p>
                    <div className='his-content'>
                        <div className='list-puf'>
                            <p>PUFA:</p>
                            <ul className='list-group'>
                                <li className="list-group-item">S:xxxxxxxxxxxxxxx</li>
                                <li className="list-group-item">C:xxxxxxxxxxxxxxx</li>
                            </ul>
                        </div>
                        <div className='list-puf'>
                            <p>PUFB:</p>
                            <ul className='list-group'>
                                <li className="list-group-item">S:xxxxxxxxxxxxxxx</li>
                                <li className="list-group-item">C:xxxxxxxxxxxxxxx</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
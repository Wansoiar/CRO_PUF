import React, {Component} from 'react';

import './history-list-item.css';
import PubSub from "pubsub-js";

export default class HistoryListItem extends Component{

    componentDidMount() {
        
    }

    deleteItem = () => {
        let index = this.props.index;
        let pufNum = this.props.pufNum;
        this.props.onDelete(pufNum, index);
    }

    

    render(){ 

        return(
            <li className="list-group-item">
                <div>
                    <span className='glyphicon glyphicon-remove delete' onClick = {this.deleteItem}/>
                    <p>{this.props.CS.time}</p>
                    <div className='his-content'>
                        <div className='list-puf'>
                            <p>{this.props.names.PUFA + ':'}</p>
                            <div>
                                <p className='txt-p'>{this.props.CS.as}</p>
                                <p className='txt-p'>{this.props.CS.ac}</p>
                            </div>
                        </div>
                        <div className='list-puf'>
                            <p>{this.props.names.PUFB + ':'}</p>
                            <div>
                                <p className='txt-p'>{this.props.CS.bs}</p>
                                <p className='txt-p'>{this.props.CS.bc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
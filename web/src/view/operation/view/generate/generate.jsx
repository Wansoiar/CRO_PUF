import React, {Component} from 'react';

import HistoryList from "./components/history-list/history-list";
import Get from "./components/get/get";
import './generate.css';

export default class Generate extends Component{
    
    
    // componentWillReceiveProps(next){
    //     console.log('gen', this.props);
    //     console.log('gen', next);
    // }

    onChange = (puf,newCS) => {
        this.props.onChangeState(puf,newCS);
    }

    onDelete = (puf,index) => {
        this.props.onDeleteState(puf,index);
    }
    

    render(){
        let {names} = this.props;
        let puf;
        if(this.props.puf === undefined){
            puf = [];
        }else{
            puf = this.props.puf;
        }
        // let names = '1', puf = [{a: 2}, {b: 4}];
        // console.log('111t',this.props, puf);
        let pufNum = this.props.pufNum;
        return(
            <div className='generate'>
                <Get onChangeState = {this.onChange} names = {names} pufNum = {pufNum}/>
                <HistoryList onDeleteList = {this.onDelete} names = {names} puf = {puf} pufNum = {pufNum}/>
            </div>
        )
    }
}
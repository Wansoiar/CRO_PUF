import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import AddPuf from './view/add-puf/add-puf';
import Generate from './view/generate/generate';
import './operation.css';
import Nav from '../nav/nav';


export default class Operation extends Component{

    state = {
        pufs: [{groupName: 'Puf1', PUFA: 'xiaoA', PUFB: 'xiaoB'}, {groupName: 'Puf2', PUFA: 'isA', PUFB: 'isB'}, {groupName: 'Puf3', PUFA: 'xiA', PUFB: 'xiB'}],
    }

    // componentWillReceiveProps(){
    //     console.log(this.props);
    // }

    componentDidMount(){
        
    }

    onInitState = (pufNum) => {
        if(this.state[pufNum] === undefined){
            this.setState({[pufNum]: []});
        }
    }


    onChangeState = (puf,newCS) => {
        const pufi = this.state[puf];
        console.log('get', puf,pufi);
        pufi.push(newCS);
        this.setState({[puf]: pufi});
        console.log(pufi);
    }

    onDeleteState = (puf,index) => {
        const pufi = this.state[puf];
        pufi.splice(index,1);
        this.setState({[puf]: pufi});
        console.log(pufi);
    }


    //点击puf出现右箭头
    chevronRight = (event) => {
        let current = event.target;
        console.log(event.target);
        let  parent = current.parentNode ;
        let  childs = parent.children ;
        for( let i = 0; i <= childs.length - 2 ; i++ ){
            let chevron = childs[i].getElementsByTagName('span')[0];
            if( childs[i] === current ){
                chevron.className += ' to-right-active';
            }else{
                chevron.className = 'glyphicon glyphicon-chevron-right to-right';
            }
        }
    };
    //点击添加puf清空所有右箭头
    clearRight = (event) => {
        let  parent = event.target.parentNode ;
        let  childs = parent.children ;
        for( let i = 0; i <= childs.length - 2 ; i++ ){
            let chevron = childs[i].getElementsByTagName('span')[0];
            chevron.className = 'glyphicon glyphicon-chevron-right to-right';
        }
    };

    render(){
        const {pufs} = this.state;
        console.log('save', this.state);
        for(let i=0;i<pufs.length;i++){
            let pufNum = 'puf' + (i + 1);
            this.onInitState(pufNum);
        }
        console.log('xin ',this.state);
        return(
            <div style={{height: '100%',width: '100%'}}>
                <Nav/>
                <div className='operation'>
                    <div className='puf-list'>
                        <ul className="list-group puf-ul">
                            {pufs.map((data, index) => {
                                    return (<NavLink className="list-group-item" to={'/operation/'+ (index+1)} onClick={this.chevronRight}>{data.groupName}<span className='glyphicon glyphicon-chevron-right to-right'/></NavLink>)
                            })}
                            {/*<NavLink className="list-group-item" to='/operation/2' onClick={this.chevronRight}>Puf2<span className='glyphicon glyphicon-chevron-right to-right'/></NavLink>*/}
                            <NavLink className="list-group-item" to='/operation/addPuf' onClick={this.clearRight}><span className='glyphicon glyphicon-plus'/>添加新的PUF</NavLink>
                        </ul>
                    </div>
                    <div className='container puf-show'>
                        <Switch>
                            {pufs.map((data, index) => {
                                let num = index + 1;
                                let pufNum = 'puf' + num.toString();
                                let names = pufs[index];
                                return (<Route path = {'/operation/'+ (index+1)} key={index} component = {() => (<Generate onChangeState = {this.onChangeState} onDeleteState = {this.onDeleteState} pufNum = {pufNum} puf = {this.state[pufNum]} names = {names} />)}/>)
                            })}
                            {/*<Route path='/operation/2' component={Generate}/>*/}
                            <Route path='/operation/addPuf' component={() => (<AddPuf onChangeState = {this.onChangeState}/>)}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
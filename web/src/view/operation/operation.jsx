import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import PUbSub from 'pubsub-js';

import AddPuf from './view/add-puf/add-puf';
import Generate from './view/generate/generate';
import './operation.css';


export default class Operation extends Component{



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
        return(
            <div className='operation'>
                <div className='puf-list'>
                    <ul className="list-group puf-ul">
                        <NavLink className="list-group-item" to='/operation/1' onClick={this.chevronRight}>Puf1<span className='glyphicon glyphicon-chevron-right to-right'/></NavLink>
                        {/*<NavLink className="list-group-item" to='/operation/2' onClick={this.chevronRight}>Puf2<span className='glyphicon glyphicon-chevron-right to-right'/></NavLink>*/}
                        <NavLink className="list-group-item" to='/operation/addPuf' onClick={this.clearRight}><span className='glyphicon glyphicon-plus'/>添加新的PUF</NavLink>
                    </ul>
                </div>
                <div className='container puf-show'>
                    <Switch>
                        <Route path='/operation/1' component={Generate}/>
                        {/*<Route path='/operation/2' component={Generate}/>*/}
                        <Route path='/operation/addPuf' component={AddPuf}/>
                    </Switch>
                </div>

            </div>
        )
    }
}
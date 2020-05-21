import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom'

import AddPuf from './view/add-puf/add-puf';
import Generate from './view/generate/generate';
import './operation.css';


export default class Operation extends Component{

    render(){
        return(
            <div className='operation'>
                <div className='puf-list'>
                    <ul className="list-group puf-ul">
                        <NavLink className="list-group-item" to='/operation/1'>Puf1<span className='glyphicon glyphicon-chevron-right'/></NavLink>
                        <NavLink className="list-group-item" to='/operation/2'>Puf2</NavLink>
                        <NavLink className="list-group-item" to='/operation/addPuf'><span className='glyphicon glyphicon-plus'/>添加新的PUF</NavLink>
                    </ul>
                </div>
                <div className='container puf-show'>
                    <Switch>
                        <Route path='/operation/1' component={Generate}/>
                        <Route path='/operation/2' component={Generate}/>
                        <Route path='/operation/addPuf' component={AddPuf}/>
                    </Switch>
                </div>

            </div>
        )
    }
}
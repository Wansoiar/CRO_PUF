import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {isPipelineBareFunction} from "@babel/types";

import MessageDetial from './message-detail';

export default class Message extends Component{

    state = {
      messages: []
    }

    componentDidMount() {
      //模拟ajax请求
      setTimeout(() => {
        const messages = [
          {id: '1', title: 'message001'},
          {id: '3', title: 'message003'},
          {id: '6', title: 'message006'}
        ];
        this.setState({messages});
      }, 1000);
    }

  render(){
        return(
            <div>
              <ul>
                {
                  this.state.messages.map((msg, index) => (
                      <li key={index}>
                        <a href={`/home/message/${msg.id}`}>{msg.title}</a>
                      </li>)
                  )
                }
              </ul>
              <div>
                <Route path='/home/message/:id' component={MessageDetial}/>
              </div>
            </div>
        )
    }
}
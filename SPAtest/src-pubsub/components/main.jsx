import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PubSub from 'pubsub-js';


export default class Main extends Component{

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMess: null
    }

    componentDidMount() {
        //订阅消息
        PubSub.subscribe('search', (msg, searchName) => {
            //更新状态
            this.setState({
                initView: false,
                loading: true
            })
            //发送ajax请求
            const url = `https://api.github.com/search/users?q=${searchName}`;
            axios.get(url).then(response => {
                //得到数据
                let result = response.data;
                console.log(result);
                const users = result.items.map(item => ({
                    name: item.login,
                    url: item.html_url,
                    avatarUrl: item.avatar_url
                }))
                //更新状态
                this.setState({
                    loading: false,
                    users
                })

            }).catch(error => {
                this.setState({loading: false, errorMess: error})
            })
        })
    }

    render(){
        const {initView, loading, users, errorMess} = this.state;
        const {searchName} = this.props;
        if(initView){
            return(
                <h2>请输入关键词搜索{searchName}</h2>
            )
        }else if(loading){
            return (
                <h2>Loading........</h2>
            )
        }else if(errorMess){
            return (
                <h2>{errorMess}</h2>
            )
        }else{
            return(
                <div className="row">
                    {
                        users.map((user, index) => (<div className="card" key={index}>
                            <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{width: 100}}/>
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>))
                    }
                </div>
            )
        }

    }
}
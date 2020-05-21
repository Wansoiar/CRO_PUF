import React, {Component} from 'react';

import './get.css';

export default class Get extends Component{

    render(){
        return(
            <div className='get'>
                <div className='port'>
                    <a href='https://www.baidu.com' target='_blank'>打开串口助手</a>
                </div>
                <button className='btn btn-default center-block'>生成配置位S与Challenge对序列</button>
                <div className='result-list'>
                    <div className='result'>
                        <div>
                            <p>PUFA:</p>
                            <p>S:xxxxxxxxxxxxxxxxx</p>
                            <p>C:xxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                    <div className='result'>
                        <div>
                            <p>PUFB:</p>
                            <p>S:xxxxxxxxxxxxxxxxx</p>
                            <p>C:xxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
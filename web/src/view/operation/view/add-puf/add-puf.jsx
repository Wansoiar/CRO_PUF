import React, {Component} from 'react';

import './add-puf.css';

export default class AddPuf extends Component{

    state = {
        groupName: '', 
        PUFA: '', 
        PUFB: ''
    }

    upLoad = () => {
        let newName = this.state;
        this.props.onChangeState('pufs', newName);
    };

    updateGroupName = (e) => {
        this.setState({
            groupName: e.target.value
        })
    }
    updatePUFA = (e) => {
        this.setState({
            PUFA: e.target.value
        })
    }
    updatePUFB = (e) => {
        this.setState({
            PUFB: e.target.value
        })
    }

    render(){
        return(
            <div className='add'>
                <div className='add-title'>
                    <h3>上传新的延迟矩阵</h3>
                </div>
                <div >
                    <form>
                        <div className='form-group pufsName'>
                            <div className='center-block'>
                                <label htmlFor="pufsName">新PUF组名称：</label>
                                <input type='text' className='form-control puf-input1' id='pufsName' placeholder='Pufs-Name' value={this.state.groupName} onChange={this.updateGroupName} />
                                <div className='add-area area1'/>
                            </div>
                        </div>
                        <div className='pufAB'>
                            <div>
                                <div className='form-group'>
                                    <label htmlFor="pufAName">PUFA设备名称：</label>
                                    <input type='text' className='form-control puf-input2' id='pufAName' placeholder='PufA-Name' value={this.state.PUFA} onChange={this.updatePUFA}/>
                                    <div className='add-area'/>
                                </div>
                                <div className='form-group add-fit'>
                                    <label htmlFor="pufAMatrix">PUFA延迟矩阵：</label>
                                    <input type='file' className='form-control puf-input3' id='pufAMatrix' placeholder='PufA-Matrix'/>
                                    <div className='add-area'/>
                                </div>
                            </div>
                            <div>
                                <div className='form-group'>
                                    <label htmlFor="pufBName">PUFB设备名称：</label>
                                    <input type='text' className='form-control puf-input2' id='pufBName' placeholder='PufB-Name' value={this.state.PUFB} onChange={this.updatePUFB}/>
                                    <div className='add-area'/>
                                </div>
                                <div className='form-group  add-fit'>
                                    <label htmlFor="pufBMatrix">PUFB延迟矩阵：</label>
                                    <input type='file' className='form-control puf-input3' id='pufBMatrix' placeholder='PufB-Matrix'/>
                                    <div className='add-area'/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-default center-block btn-add" onClick={this.upLoad}>上传新PUF组信息</button>
                    </form>
                </div>
            </div>
        )
    }
}
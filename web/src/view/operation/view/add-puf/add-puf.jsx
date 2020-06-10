import React, {Component} from 'react';

import './add-puf.css';

export default class AddPuf extends Component{

    alertAdd = () => {
        let alert = document.getElementsByClassName('alert-success');
        let claName = alert[0].className.split(' ');
        alert[0].className = claName[0] + ' ' + claName[1] + ' in';
        setTimeout(function () {
            alert[0].className = claName[0] + ' ' + claName[1] + ' ' + claName[2];
        },3000);
    };

    render(){
        return(
            <div className='add'>
                <div className="alert alert-success alert-success2 hide" role="alert">
                    <strong>PUF组信息上传成功！</strong>
                </div>
                <div className='add-title'>
                    <h3>上传新的延迟矩阵</h3>
                </div>
                <div >
                    <form>
                        <div className='form-group pufsName'>
                            <div className='center-block'>
                                <label htmlFor="pufsName">新PUF组名称：</label>
                                <input type='text' className='form-control puf-input1' id='pufsName' placeholder='Pufs-Name'/>
                                <div className='add-area area1'/>
                            </div>
                        </div>
                        <div className='pufAB'>
                            <div>
                                <div className='form-group'>
                                    <label htmlFor="pufAName">PUFA设备名称：</label>
                                    <input type='text' className='form-control puf-input2' id='pufAName' placeholder='PufA-Name'/>
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
                                    <input type='text' className='form-control puf-input2' id='pufBName' placeholder='PufB-Name'/>
                                    <div className='add-area'/>
                                </div>
                                <div className='form-group  add-fit'>
                                    <label htmlFor="pufBMatrix">PUFB延迟矩阵：</label>
                                    <input type='file' className='form-control puf-input3' id='pufBMatrix' placeholder='PufB-Matrix'/>
                                    <div className='add-area'/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-default center-block btn-add" onClick={this.alertAdd}>上传新PUF组信息</button>
                    </form>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

import './get.css';

const as = [
    's:1234',
    's:cdfb',
    's:by5t'
]
const ac = [
    'c:12324354634',
    'c:56787765b',
    'c:bfb53vby5t'
]
const bs = [
    's:vrhy5h6',
    's:r3f65htb',
    's:ffe4refrf'
]
const bc = [
    'c:65j7h',
    'c:vreh644n',
    'c:t4533fff'
]
let countShow = 0;
export default class Get extends Component{

    addList = (puf,newSC) => {
        this.props.onChangeState(puf,newSC);
        // console.log(this.props.puf); 
    }

    dateContorl = (x, y) => {
        var z ={y:x.getFullYear(),M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
        return y.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v) {
            return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-(v.length>2?v.length:2))
        });
    }

    getChallenge = () => {
        //点击生成新的challenge和配置位
        // let aS = 'S:010100110011001000111101101010111011001100000110111010000110011101100001100000001111110101011010';
        // let aC = 'C:001101001100000110000001001110011110101101111110101100010011110010111000111110001111110001000011001011011100111110100100011010001110001100110010011011100110000010100100101100101010101111111101000101110110011100100000101111100100000001110001011010010100111101000010100010010011001000101010101011111011000001100101000001101110000010111111010110100011110001101110000010001110110100000011101000110001000101111011001110100011100100100111010101001010110001110010001000001011110011000100101101000010101011011101010001000110100110011101001000100001011111100001010000000000111011011001101001000001011101011011011011010110001101010010010101011000000010010011100000001000101001010000110000000001011110011011001100101010101011000000011111000100111101010110010100110110011000011111';
        // let bS = 'S:111010000110011101100001101010111011001100000110100000001111110101011010010100110011001000111101';
        // let bC = 'C:010010001010001111001011110111011011010101100100101010111011010000101111111001010011010001011001001001110110001111100100000001001100000001100000010110011101010111101110110010101010101100001001011111001101000001110011001110010011010001000001101001001110000011111010100110011001010110100101100101101000100001101011000100001101111110000010100010000101110000011001011001011000110001101101110100001100110111000100001110110110110000101101001001011111100000001010101100101001011100001001110011100110110001100110001001100001110011000110010101011001101001111111001001100101100010101000000010011001001100100000111110111111000100011001001100000010111100001111011111000011011100010001001000011010101111100000100011100100000110000110111010101010011000011001100000101001100101010111';
        let aS='',aC='',bS='',bC='';
        countShow++;
        const index = countShow % 3;
        aS = as[index];
        aC = ac[index];
        bS = bs[index];
        bC = bc[index];
        
        let timer = new Date();
        let time = this.dateContorl(timer, 'yyyy-MM-dd hh:mm:ss');        
        this.addList(this.props.pufNum, {time: time, as: aS, ac: aC, bs: bS, bc: bC});
        this.addList(this.props.showCSNum, {as: aS, ac: aC, bs: bS, bc: bC});
    }


    render(){
        const { showCS } = this.props;
        const index = showCS.length - 1;
        const showObject = showCS[index] || {};
        return(
            <div className='get'>
                <div className='port'>
                    <a href='port.html' target='_blank'>打开串口助手</a>
                </div>
                <div className='btn-div'>
                <button className='btn btn-default btn-get' onClick={this.getChallenge}>生成配置位S与Challenge对序列</button>
                </div>
                <div className='result-list'>
                    <div className='result'>
                        <p> {this.props.names.PUFA + ':'} </p>
                        <div>
                            <p ref={(pufas) => { this.pufas = pufas}}>{showObject.as}</p>
                            <p ref={(pufac) => { this.pufac = pufac}}>{showObject.ac}</p>
                        </div>
                    </div>
                    <div className='result'>
                        <p>{this.props.names.PUFB + ':'}</p>
                        <div>
                            <p ref={(pufbs) => { this.pufbs = pufbs}}>{showObject.bs}</p>
                            <p ref={(pufbc) => { this.pufbc = pufbc}}>{showObject.bc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
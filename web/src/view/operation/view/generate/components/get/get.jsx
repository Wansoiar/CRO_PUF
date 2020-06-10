import React, {Component} from 'react';

import './get.css';

export default class Get extends Component{

    render(){
        return(
            <div className='get'>
                <div className='port'>
                    <a href='https://www.baidu.com' target='_blank'>打开串口助手</a>
                </div>
                <div className='btn-div'>
                <button className='btn btn-default btn-get'>生成配置位S与Challenge对序列</button>
                </div>
                <div className='result-list'>
                    <div className='result'>
                        <p>PUFA:</p>
                        <div>
                            <p>S:010100110011001000111101101010111011001100000110111010000110011101100001100000001111110101011010</p>
                            <p>C:001101001100000110000001001110011110101101111110101100010011110010111000111110001111110001000011001011011100111110100100011010001110001100110010011011100110000010100100101100101010101111111101000101110110011100100000101111100100000001110001011010010100111101000010100010010011001000101010101011111011000001100101000001101110000010111111010110100011110001101110000010001110110100000011101000110001000101111011001110100011100100100111010101001010110001110010001000001011110011000100101101000010101011011101010001000110100110011101001000100001011111100001010000000000111011011001101001000001011101011011011011010110001101010010010101011000000010010011100000001000101001010000110000000001011110011011001100101010101011000000011111000100111101010110010100110110011000011111</p>
                        </div>
                    </div>
                    <div className='result'>
                        <p>PUFB:</p>
                        <div>
                            <p>S:111010000110011101100001101010111011001100000110100000001111110101011010010100110011001000111101</p>
                            <p>C:010010001010001111001011110111011011010101100100101010111011010000101111111001010011010001011001001001110110001111100100000001001100000001100000010110011101010111101110110010101010101100001001011111001101000001110011001110010011010001000001101001001110000011111010100110011001010110100101100101101000100001101011000100001101111110000010100010000101110000011001011001011000110001101101110100001100110111000100001110110110110000101101001001011111100000001010101100101001011100001001110011100110110001100110001001100001110011000110010101011001101001111111001001100101100010101000000010011001001100100000111110111111000100011001001100000010111100001111011111000011011100010001001000011010101111100000100011100100000110000110111010101010011000011001100000101001100101010111</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
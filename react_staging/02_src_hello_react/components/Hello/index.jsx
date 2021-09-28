import React,{Component} from 'react'

// 样式的模块化
// import './index.css'
import hello from './index.module.css'

export default class Hello extends Component{
    render(){
        return <h2 className={hello.title}>Hello,React!</h2>
    }
}
import React, { Component } from "react";
import './index.css'

export default class Item extends Component {
  state={mouse:false} //标识鼠标移入、移出

  // 鼠标移入、移出的回调
  handleMouse=(flag)=>{
    // 返回一个函数
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  // 更新一个todo的回调
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }
  // 删除一个todo的回调
  handleDelete=(id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  
  }

  
  render() {
    const {id,name,done}=this.props
    const {mouse}=this.state
    return (
      // 指定事件写小括号时返回值得是个函数
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox"  checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display:mouse?'block':'none'}}>
          删除
        </button>
      </li>
    );
  }
}

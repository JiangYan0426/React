import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search=()=>{
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyWord}}=this
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                this.props.saveUsers(response.data.items)
            },
            error=>{console.log('失败了',error);}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    {/* ref回调 */}
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

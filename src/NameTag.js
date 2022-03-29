import React from 'react'

class NameTag extends React.Component{
    state = {
        count: 0,
    }
    increase = () => {
        const {count}=this.state 
        console.log(`before updating state: ${this.state.count}`) // 업데이트 전
        this.state.count = this.state.count + 1
        console.log(`after updating state: ${this.state.count}`) // 업데이트 후
    }
   
    render(){
        console.log('child')
        const {count} = this.state
        const {name}=this.props
        console.log(`state in render function ${count}`) 
        return (
            <>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button type="button" onClick={this.increase}>카운트 증가</button>
            </>
        )
    }
}
export default NameTag 
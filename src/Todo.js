import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    render(){
        const {friends}=this.props
        console.log(friends)
        return <>
            {friends.map(friend => {
                return (
                    <h2>{friend.name}</h2>
                )
            })}
        </>
    }
}
export default Todo 
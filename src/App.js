import React, { Component } from 'react'
import NameTag from './NameTag'

export default class App extends Component {
  state = {
    name: 'parent',
    childName: 'child',
    abc: 'abc'
  }
  changeName = () => {
    this.setState({name: 'parent changed', childName: 'child change'})
  }
  render(){
    console.log('parent')
    const {name, childName}=this.state 
    return (
      <>
      <h1>{name}</h1>
      <button type="button" onClick={this.changeName}>change name</button>
      <NameTag name={childName}></NameTag>
      </>
    )
  }
}


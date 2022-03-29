import React from 'react' // 라이브러리 호출

class Person extends React.Component {
  state = {
    name: 'sunrise',
    age: 23,
    friends: [
      "victoria",
      "danniel",
      "hanna"
    ]
  }
  
  // 이벤트 핸들러 함수
  displayInfo = () => {
    const { name, age, friends } = this.state 
    alert(`
      * 신상정보 *
    ---------------------
    이름 : ${name}
    나이: ${age}
    친구: ${friends.join(' ')}
    `)
  }
  render(){
    return (
      <>
        <button onClick={this.displayInfo}>신상정보 확인</button>
      </>
    )
  }
}
export default Person 

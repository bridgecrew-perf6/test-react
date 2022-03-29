import React from 'react'

// props 객체 => { type, name, size, sound, appearence})

function Animal(props){
        return (
            <>
                <h1>동물 정보</h1>
                <h3>종류 - {props.type}</h3>
                <h3>크기 - {props.size}</h3>
                <h3>소리 - {props.sound}</h3>
                <h3>생김새 - {props.appearence}</h3>
            </>
        )
    
} 
export default Animal
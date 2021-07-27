import React from 'react'
import styled from 'styled-components'
import Button from '@atlaskit/button'
const bb = {
    width:'100%',
    display:'flex',
     
    justifyContent:'center',  
}
const h3e ={
    width:'100%',
    color:'blue', 
}
const h3 ={
    width:'100%',
    color:'green',
}
const h3r ={
    width:'100%',
    color:'gray',
}
const tt={
    width:'100%',
    float:'left',
}
const Buttonstyle = styled(Button)`
    float:right;
    margin:20px;
    color:red;
`
const dnone ={
    display:'flex',
}
const count = (lst) =>{
    const total = lst.filter((todo)=> {return  todo.isCompleted === false } ) 
    return total.length
}
export default function title({Refesh,Reset,todoList}) {
    return (
        // <> là kí hiệu của fragment
        <>
            <div style={bb}>
                { todoList.length !== 0 ?
                <div style={tt}>

             { count(todoList) !== 0 && todoList.length !== 0 ? <h3 style={h3e} >Bạn còn {count(todoList)}  nhiệm vụ </h3> :  <h3 style={h3} >Chúc mừng bạn đã hoàn thành tất cả các nhiệm vụ !</h3>}
                </div>
                :  <div style={tt}> <h3 style={h3r} >Danh sách đang trống!</h3></div>
            }
            {
                todoList.length !== 0 ? <div style={dnone}> 
            <Buttonstyle isDisabled={todoList.length===0} onClick={ Refesh} appearance="danger" > Xoá hết </Buttonstyle>
            <Buttonstyle isDisabled={todoList.length===0} onClick={ Reset} appearance="warning"> Làm mới </Buttonstyle>
            </div> : ''
            }
            </div>
        </> 
    )
}

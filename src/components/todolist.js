import React from 'react'
import Todo from './todo'
import Title from './title'
export default function Todolist({todoList,onCheckBtn,Refesh,Reset,onCheckDel}) {
    return (
        <>
            <Title todoList={todoList} Refesh={Refesh} Reset={Reset} />
            {
                todoList.map((todo) => {
                return <Todo key={todo.id} todo={todo} onCheckDel={onCheckDel}  onCheckBtn={onCheckBtn}/>
                })
            }
        </>
    )
}

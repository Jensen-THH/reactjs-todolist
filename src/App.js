import Todolist from "./components/todolist";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button"
import React,{ useState, useCallback,useEffect } from 'react'
import { v4 } from 'uuid'
// import styled from 'styled-components'
import { useAlert } from 'react-alert'
function App() {
  const h3 ={
    textAlign:'center',
    color:'blue',
  }
  const alert = useAlert();
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const TODOAPP_STORAGE_KEY = 'TODO_APP';
  const onTextinputChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, []);
  const onAdd = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList
      ]);
      alert.success("successfully added!");
      setTextInput("")
    },
    [textInput,todoList]
  )
  const onCheckBtn = useCallback(
    (id) => {
      console.log(id)
      setTodoList(prevState=> prevState.map((todo) =>  todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo  ))
    },
    [],
  )

  useEffect(() => {
    const storaged = localStorage.getItem(TODOAPP_STORAGE_KEY)
   if(storaged){
     setTodoList(JSON.parse(storaged))
   }
  }, [])
  useEffect(()=>{
      localStorage.setItem(TODOAPP_STORAGE_KEY, JSON.stringify(todoList))
  },[todoList])
  const Refesh = useCallback(
    () => {
      setTodoList([])
      alert.success("successfully clear!");
    },
    [],
  );
  const Reset = useCallback(
    () => {
      const reset = todoList.map ( (todo)=> { return {...todo,isCompleted: false} })
      setTodoList(reset)
      alert.success("successfully reset!");

    },
    [todoList],
  )
  const onCheckDel = useCallback(
    (id) => {
      const newlist = todoList.filter((item)=> item.id !== id )
      setTodoList(newlist);
      alert.success("successfully deleted!");

    },
    [todoList],
  )
  return (
    <>
      <h1 style={h3}>DANH SÁCH VIỆC LÀM</h1>
      <Textfield name="add to do" placeholder="Thêm việc cần làm"
        elemAfterInput={
          <Button isDisabled={!textInput} appearance="primary" onClick={onAdd}>Thêm</Button>
        }
        value={textInput}
        onChange={onTextinputChange}
        css={{ padding: "2px 4px 2px" }}
      ></Textfield>
    
      <Todolist todoList={todoList} onCheckBtn = {onCheckBtn} Refesh= {Refesh} onCheckDel={onCheckDel} Reset={Reset}/>
    </>
  )
}

export { App };

import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from "axios";
import FilterData from './FilterData';

const FormData = () => {

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);
  const [refresh,setRefresh]=useState(true);

  useEffect(()=>{
    if(refresh==true){
      getData();
    }
  },[refresh])

  useEffect(()=>{
    //console.log("Testing");
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  const filterHandler = () =>{
    switch(status){
      case 'completed': setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break;
      case 'uncompleted': setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break;
      default: setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  //https://fake-api-coba.herokuapp.com/todos
  //https://632d97252cfd5ccc2af21187.mockapi.io/todos

  const getData = ()=>{
    axios.get('https://fake-api-coba.herokuapp.com/todos').then(response=>{
      setFilteredTodos(response.data);
      setRefresh(false);
    });
  }

  const handleDeleteAll = () => {
    Promise.all(
      filteredTodos.map((todo) =>
        axios.delete(`https://fake-api-coba.herokuapp.com/todos/${todo.id}`)
          .then((data) => data.status)
      )
    ).then((res) => {
      if (res.every((code) => code === 200)) setRefresh(true);
    });
  };

  const handleDeleteCompleted = () => {
    Promise.all(
      filteredTodos.filter(todo=>todo.complete==true).map((todo) =>
        axios.delete(`https://fake-api-coba.herokuapp.com/todos/${todo.id}`)
          .then((data) => data.status)
      )
    ).then((res) => {
      if (res.every((code) => code === 200)) setRefresh(true);
    });
  };

  return (
    <section className='section'>
      <div className='todosearch-container'>
      <header>
        <h1>ToDoSearch</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        setRefresh={setRefresh}
        setFilteredTodos={setFilteredTodos}
      />
      </div>

      <div className='todosearch-container'>
        <header>
          <h1>ToDoList</h1>
        </header>
        <FilterData setFilteredTodos={setFilteredTodos}/>
        <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} setRefresh={setRefresh}/>
        <table>
        <tr>
          <td>
            <button className="btn-delete" type="submit" onClick={handleDeleteAll}>Delete All Tasks</button>
          </td>
          <td>
            <button className="btn-delete" type="submit" onClick={handleDeleteCompleted}>Delete All Completed Tasks</button>
          </td>
        </tr>
        <tr>
        <button className="todo-button" type="submit"><Link to="/" className='btn'>Return to Main Page</Link></button>
        </tr>
        </table>
      </div>
    </section>
  );
};
export default FormData;
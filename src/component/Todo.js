import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = ({text,todo,todos,setTodos,setRefresh}) =>{
    
    const navigate = useNavigate();

    const deleteHandler = () =>{
        axios.delete(`https://fake-api-coba.herokuapp.com/todos/${todo.id}`).then(()=>setRefresh(true));
    }
   const completeHandler = () =>{
        console.log(todo);
        axios.patch(`https://fake-api-coba.herokuapp.com/todos/${todo.id}`,{
          complete: !todo.complete,
        }).then(()=>setRefresh(true));
      }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.complete ? "completed":""}`}>{todo.task}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={()=>navigate(`/Edit/${todo.id}`)} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
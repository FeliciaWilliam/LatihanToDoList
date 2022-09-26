import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, { useState } from "react";

const Form=({inputText,setInputText,todos,setTodos,setStatus,setSearchTodos,setFilteredTodos})=>{
  
  const [saveInput,setSaveInput] = useState("");
  const [searchInput,setSearchInput] = useState("");

  const navigate = useNavigate();
  
  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}])
    setInputText("");
  }
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }

  const searchDataHandler = () =>{
    axios.get(`https://fake-api-coba.herokuapp.com/todos?q=${searchInput}`).then(response=>{
      setFilteredTodos(response.data);
    });
  }

  const addDataHandler = () =>{
    axios.post('https://fake-api-coba.herokuapp.com/todos',{
      task: saveInput,
    }).then((response)=>console.log(response).setRefresh(true));
  }

    return(
    <form onSubmit={(e)=>e.preventDefault()}>
      <table>
        <tr>
          <td><input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" className="todo-input" /></td>
          <td><button onClick={searchDataHandler} className="todo-button" type="submit">Search</button></td>
        </tr>
        <tr>
          <td><button onClick={()=>navigate(`/AddPage`)} className="todo-button" type="submit">Add</button></td>
        </tr>
      </table>
    </form>
    );
}

export default Form;
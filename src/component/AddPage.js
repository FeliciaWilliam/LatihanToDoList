import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPage = () =>{
  const [saveInput,setSaveInput] = useState("");
  const navigate = useNavigate();

  const addDataHandler = () =>{
    axios.post('https://fake-api-coba.herokuapp.com/todos',{
      task: saveInput,
    }).then((response)=>navigate("/FormData"));
  }

    return(
    <>
    <div className='todosearch-container'>
      <header>
        <h1>ToDoInput</h1>
      </header>
      <form onSubmit={(e)=>e.preventDefault()}>
        <table>
          <tr>
            <td colspan="3"><input value={saveInput} onChange={(e)=>setSaveInput(e.target.value)} type="text" className="todo-input" /></td>
          </tr>
        <tr>
          <td colspan="3">
            <button onClick={addDataHandler} className="todo-button" type="submit">Add</button>
          </td>
        </tr>
        </table>
      </form>
      </div>
    </>
    );

}

export default AddPage;
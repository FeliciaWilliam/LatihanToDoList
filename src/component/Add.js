import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Add = () =>{

  const navigate = useNavigate();

    return(
    <form onSubmit={(e)=>e.preventDefault()}>
      <table>
       <tr>
        <td colspan="3">
        <button className="todo-button" onClick={()=>navigate(`/AddPage`)}>Add Task</button>
        </td>
       </tr>
      </table>
    </form>
    );

}

export default Add;
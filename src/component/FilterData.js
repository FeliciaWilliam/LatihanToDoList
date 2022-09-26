import React from "react";
import axios from "axios";

const FilterData = ({setFilteredTodos}) =>{
    
    const getDataAll = ()=>{
        axios.get('https://fake-api-coba.herokuapp.com/todos').then(response=>{
          setFilteredTodos(response.data);
        });
      }
      const getDataCompleted = ()=>{
        axios.get('https://fake-api-coba.herokuapp.com/todos?complete=true').then(response=>{
          setFilteredTodos(response.data);
        });
      }
      const getDataUncompleted = ()=>{
        axios.get('https://fake-api-coba.herokuapp.com/todos?complete=false').then(response=>{
          setFilteredTodos(response.data);
        });
      }
   
    return(
        <>
          <table>
            <tr>
              <td><button onClick={getDataAll} className="todo-button">All</button></td>
              <td><button onClick={getDataCompleted} className="todo-button">Completed</button></td>
              <td><button onClick={getDataUncompleted} className="todo-button">Uncompleted</button></td>
            </tr>
          </table>
        </>
    );
}
export default FilterData;
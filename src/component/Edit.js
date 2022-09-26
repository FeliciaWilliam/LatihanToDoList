import react,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () =>{
    //utk semacam setter getter :v
    const [editInput,setEditInput] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    console.log(editInput);
  
    const editDataHandler = () =>{
      axios.patch(`https://fake-api-coba.herokuapp.com/todos/${params.id}`,{
        task: editInput,
      }).then((response)=>navigate("/FormData"));
    }

    const getDataHandler = () =>{
        axios.get(`https://fake-api-coba.herokuapp.com/todos/${params.id}`).then(response=>setEditInput(response.data.task));
    }
  
    useEffect(()=>{
        getDataHandler();
      },[]) //tanda [] utk nentuin useEffect jln brp kali, kalau kosong berarti cm 1x
    
      return(
      <form onSubmit={(e)=>e.preventDefault()}>
        <table>
          <tr>
            <td colspan="3"><input value={editInput} onChange={(e)=>setEditInput(e.target.value)} type="text" className="todo-input" /></td>
          </tr>
         <tr>
          <td colspan="3">
            <button onClick={editDataHandler} className="todo-button" type="submit">Edit</button>
          </td>
         </tr>
        </table>
      </form>
      );
  
  }
  
  export default Edit;
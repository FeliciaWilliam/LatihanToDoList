import {Link} from 'react-router-dom';

const Home=()=>{

    return(
        <>
            <div className='todosearch-container'>
                <header>
                    <h1>ToDoList</h1>
                </header>
                <form>
                    <table>
                        <tr>
                            <button className="todo-button"><Link to="FormData" className='btn'>Add New Tasks!</Link></button>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    );
}

export default Home;
import { useState } from "react"
import Todo from "./todo"
import TodoForm from "./todo-form"
import './todo-wrapper.css'
import { v4 as uuidv4} from "uuid";

const TodoWrapper = () => {
    const [todos , setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos , {id: uuidv4() , task:todo , completed: false , isEditing: false}])

        console.log(todo)



    }
    return (

        <div className="todo-wrapper">

                <h2>Todo list</h2>


            <TodoForm  addTodo ={addTodo}/>


            {
                todos.map((todo, index) => (
                    <Todo key={index} task={todo} />

                ))

               
            }



        </div>
    )
}

export default TodoWrapper
import React from 'react'
import "./todo.css"

function Todo({task}) {
  return (
    <div className='todo'>
        
        <p>{task.task}</p>

        <div className='todos-btn'>

            <button className='edit-btn'>Edit</button>
            <button className='del-btn'>Delete</button>

        </div>
    </div>
  )
}

export default Todo
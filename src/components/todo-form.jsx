import React, { useState } from 'react'

import "./todo-form.css"

function TodoForm({addTodo}) {

    const [ value, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        console.log(value)
        
        setInput("")

    }


  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        
        <input 
        type="text" 
        value={value}
        onChange={(e) => setInput(e.target.value)}

        placeholder='What is your todo ?'
        
        
        />

        <button className='todo-btn' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
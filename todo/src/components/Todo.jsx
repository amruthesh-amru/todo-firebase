import React from 'react'

function Todo({todo,index,toggleComplete,deleteTodo}) {

  const style = {
    todoComplete : `line-through`
  }



  return (
    <div className='mt-3'>
        <li className='w-full bg-slate-200 h-[3rem] flex gap-3 items-center justify-between mb-2 p-2'>
            <div className='flex gap-2 items-center justify-center'>
            <input type="checkbox" checked ={todo.completed ? 'checked' : "" } name="" id="" onChange={() => toggleComplete(todo)} />
            <p className={todo.completed ? style.todoComplete : ""} onClick={() => toggleComplete(todo)}>{todo.text} </p>
            </div>
           <div className="">
            <button className='' onClick={() => deleteTodo(todo.id)}>
           <i className="fa-solid fa-trash"></i>
           </button>
           </div>
        </li>
    </div>
  )
}

export default Todo
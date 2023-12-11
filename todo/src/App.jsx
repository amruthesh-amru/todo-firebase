import './App.css'
import { useState,useEffect } from 'react'
import Todo from './components/Todo'


import {db} from './firebase'
import {query,collection, onSnapshot, updateDoc,doc, addDoc,deleteDoc} from 'firebase/firestore'

function App() {

const [todos,setTodos] = useState([])
const [input,setInput] = useState('')

//create todo
const createTodo = async (e) => {
  e.preventDefault()
  if(input === ""){
    alert('Please Enter a Valid Todo')
    return
  }
  await addDoc(collection(db, 'todos'),{
    text:input,
    completed:false,
  })
  setInput("")
}



//read from firebase 

//spread vs rest operator

useEffect(() => {
  const q = query(collection(db,'todos'))
  const unsubscribe = onSnapshot(q,(QuerySnapshot) => {
    let todosArr = []
    QuerySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    })
    setTodos(todosArr)
  })
  return() => unsubscribe()
},[])
//update todo in firebase

const toggleComplete =async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id),{
    completed : !todo.completed
  })
}

//delete todo

const deleteTodo = async (id) =>  {
  await deleteDoc(doc(db,'todos',id))
}
  


  return (
    <>
        <div className="w-screen h-screen bg-blue-400 flex flex-col justify-start items-center p-5">
    <div className="w-[500px]  bg-slate-100 rounded p-3">
      <h1 className='text-center mb-3 text-2xl font-bold w-full'>Todo App</h1>

        <div className="flex gap-3 items-center justify-center w-[100%] h-[3rem]">
        <form onSubmit={createTodo} className=' flex justify-center items-center w-[90%] h-[40px] gap-2'>
          <input type="text" placeholder='Add Todo' className='w-[90%] p-2 h-full' onChange={(e) => setInput(e.target.value)} value={input} />
           <button onClick={() => createTodo} className='bg-purple-400 text-white w-[10%] items-center flex justify-center h-full'>
           <i className="fa-solid fa-plus"/>
           </button>
          </form>
        </div>
          <ul> 
          {todos.map((todo,index) => (
            <Todo key={index} todo ={todo} toggleComplete ={toggleComplete} deleteTodo ={deleteTodo} />
          ))}
          </ul>
          {todos.length <1 ? null : <p className='text-center mt-5'>{`You Have ${todos.length} todos`}</p>}
            
            </div>
        </div>
    </>
  )
}

export default App

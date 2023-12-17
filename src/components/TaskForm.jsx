import React, { useState, useContext } from 'react'

import { TaskContext} from '../context/TaskContext'

function TaskForm() {

const [title, setTitle]=useState("")
const [description, setDescription]=useState("")

const {createTask} = useContext(TaskContext)

 const handleSubmit = (e) => {
        e.preventDefault()
        const newTask={
            title: title,
            description: description
        }
        createTask(newTask)
        setTitle("")
        setDescription("")

        
    }

  return (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-10 mb-4 rounded-md text-center' onSubmit={handleSubmit}>

                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>

            <input type="text" placeholder='Escribe tu tarea'
            className='bg-slate-300 rounded-sm p-2 w-full mb-3'
            onChange={(e)=>{
                setTitle(e.target.value) 
            }} value={title} autoFocus required/>

            <textarea placeholder='Escribe la descripción de la tarea' className='bg-slate-300 rounded-sm p-2 w-full mb-3' onChange={(e)=>{
                setDescription(e.target.value)
            }} value={description} required></textarea>

            <button className='bg-indigo-500 px-3 py-1 text-white rounded-md'>
                Guardar
            </button>
        </form>
        </div>
  )
}

export default TaskForm
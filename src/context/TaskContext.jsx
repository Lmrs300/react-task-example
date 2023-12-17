import { createContext, useState, useEffect } from "react"
import { tasks as data} from "../data/tasks"

export const TaskContext=createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks]=useState([])

    useEffect(() => { 
        setTasks(data) 
      }, [])
    

    function createTask(task){

        task.id=tasks.length+1
    
        setTasks([...tasks, task])
      }
    
      function delTask(id){
        const newTasks=tasks.filter(task => task.id != id)
    
        setTasks([...newTasks])
      }
      
  return (
   <TaskContext.Provider value={
    {
        tasks,
        createTask,
        delTask
    }
   }>
    {props.children}
   </TaskContext.Provider>
  )
}


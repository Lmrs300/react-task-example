import { useContext } from "react"
import { TaskContext} from "../context/TaskContext.jsx"

function TaskCard({task}) {

const {delTask} = useContext(TaskContext)

  return (
      <div className="bg-gray-800 text-white p-4 rounded-md text-center">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>

        <button className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-700" onClick={()=>delTask(task.id)}>
          Eliminar
        </button>
    </div>
  )
}

export default TaskCard
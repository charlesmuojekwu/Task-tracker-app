import { useState, useEffect } from "react"
import AddTask from "./AddTask";
import Tasks from "./Tasks";


const Home = ({showAddTask}) => {

    const baseURL = "http://localhost:5000"

    //const [showAddTask] = useState(false)
  
    const [tasks, setTasks] = useState([])
  
    useEffect(() => {
      const getTasks = async () => {
        const taskData = await fetchTasks()
        setTasks(taskData)
      } 
  
      getTasks()
  
    }, [])
  
  /// Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${baseURL}/tasks`)
    const data = await res.json()
  
    return data
  }
  
  /// Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${baseURL}/tasks/${id}`)
    const data = await res.json()
  
    return data
  }
  
  /// Add task
  const addTask = async (task) =>{
    const res = await fetch(`${baseURL}/tasks`, { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  
    const data = await res.json()
  
    setTasks([...tasks, data])
  
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask]);
  }
  
  /// Delete task function
  const deleteTask = async (id) => {
  
    await fetch(`${baseURL}/tasks/${id}`, {
       method : 'DELETE'
      })
  
    setTasks(tasks.filter((task) => task.id !== id ))
  }
  
  /// Toggle reminder
  const toggleReminder = async (id) =>{
  
    //const tastToUpdate = tasks.filter((task) => task.id === id )
  
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
  
    //console.log(taskToToggle)
  
    const res = await fetch(`${baseURL}/tasks/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
  
    const data = await res.json()
  
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }
  

  

  return (
    <div>
        <>
          
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={toggleReminder} /> : 'No Task Added' }

        </>
    </div>
  )
}

export default Home
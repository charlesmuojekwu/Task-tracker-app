import { useState } from "react"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'doctors appointment',
        day: 'feb 5th at 2: 00am',
        reminder: true
    },
    {
        id:2,
        text: 'meeting appointment',
        day: 'feb 5th at 2: 00am',
        reminder: true
    },
    {
        id:3,
        text: 'school appointment',
        day: 'feb 5th at 2: 00am',
        reminder: true
    }
])


/// Delete task function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id != id ))
}

/// Toggle reminder
const toggleReminder = (id) =>{

}

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={toggleReminder} /> : 'No Task Added' }
    </div>
  );
}

export default App;

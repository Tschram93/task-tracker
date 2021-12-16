import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import './App.css';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Schedule vaccination appointment',
        day: 'Dec. 16 12:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Get ready to go to appointment',
        day: 'Dec. 16 1:00PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Arrive at clinic',
        day: 'Dec. 16 2:00PM',
        reminder: true,
    }
])

// Add Task
const addTask = (task) => {
  console.log(task);
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id));
}

// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?  { ...task, reminder: !task.reminder } : task
    )
  )
}

	return (
		<div className="container">
			<Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Current Tasks')}
		</div>
	);
}


export default App;

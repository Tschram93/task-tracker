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

// Delete Task
const deleteTask = (id) => {
  console.log('Delete:', id);
}

	return (
		<div className="container">
			<Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
		</div>
	);
}


export default App;

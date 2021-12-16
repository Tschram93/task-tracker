import { useState } from "react";

const Tasks = () => {
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
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks

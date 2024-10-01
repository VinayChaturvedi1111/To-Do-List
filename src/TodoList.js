import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');


    const handleAddTask = () => {
        if (taskInput.trim()) {
          setTasks([...tasks, taskInput]);
          setTaskInput(''); // Reset input field
        }
      };
    
      const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        console.log("Tasks Before Updation", tasks)
        setTasks(updatedTasks);
        console.log("log for updated task when delete", updatedTasks, tasks);
      }    
  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList
// import React from 'react';
import './App.css';
import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {

	const [showAddTask, setShowAddTask] = useState(false);


	const [tasks, setTask] = useState([])

	//ADD TASK
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		setTask([...tasks, newTask])
	}

	// DELETE TASK

	const deleteTask = (id) => {
		setTask(tasks.filter((tasks) => tasks.id !== id))
	}

	// TOGGLE REMINDER
	const toggleRemainder = (id) => {
		setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
	}

	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} /> : 'NO TASKS TO SHOW'}
		</div>
	);
}



export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditingTask(index);
    setEditingText(tasks[index].text);
  };

  const handleSaveEdit = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(newTasks);
    setEditingTask(null);
    setEditingText('');
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter(task => !task.completed);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="App">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="form">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add a new task..." 
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <div className="filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
          <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        </div>
        <ul className="task-list">
          {filteredTasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              {editingTask === index ? (
                <>
                  <input 
                    type="text" 
                    value={editingText} 
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  <span onClick={() => handleToggleComplete(index)}>
                    {task.text}
                  </span>
                  <div className="buttons">
                    <button onClick={() => handleEditTask(index)}>Edit</button>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear Completed Tasks
        </button>
      </div>
    </div>
  );
}

export default App;


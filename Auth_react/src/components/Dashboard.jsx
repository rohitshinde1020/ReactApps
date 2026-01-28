
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentuser"));

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  
  const addTask = () => {
    if (!taskInput) return;
    const newTasks = [...tasks, { text: taskInput, completed: false }];
    setTasks(newTasks);
    setTaskInput("");
  };

  
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  
  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="dashboard-container w-3/5 mx-auto">

      
      <div className="navbar">
        <h2>My Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>

     
      <div className="user-card">
        <h3>Welcome 👋</h3>
        <p>{user?.email}</p>
      </div>

      
      <div className="stats">
        <div className="stat-card">
          <h3>{tasks.length}</h3>
          <p>Total Tasks</p>
        </div>
        <div className="stat-card">
          <h3>{tasks.filter(t => t.completed).length}</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card">
          <h3>{tasks.filter(t => !t.completed).length}</h3>
          <p>Pending</p>
        </div>
      </div>

      
      <div className="task-section">
        <h3>Add Task</h3>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              {task.text}
              <div className="flex flex-row gap-5">
                <button onClick={() => toggleTask(index)}>✔</button>
                <button onClick={() => deleteTask(index)}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;


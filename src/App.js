import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [task, setTask] = useState([]);
  let randomtask = ['task1', 'task2', 'task3', 'task4'];

  const addtask = () => {
    let n = parseInt(Math.random() * randomtask.length);
    setTask([...task, randomtask[n]]);
  };

  const del = index => {
    task.splice(index, 1);
    setTask([...task]);
  };

  return (
    <div className="container">
      <section className="addtodo">
        <h3>Add a Todo </h3>
        <button onClick={addtask}>+</button>
      </section>
      {task.length > 0 ? (
        task.map((item, index) => {
          return (
            <div key={index + 1} className="taskcon">
              <p className="text">{item}</p>
              <div className="butcon">
                <button id="red" onClick={() => del(index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="noevent">No Events</div>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import './App.css';
import Form from "./Form";
import Task from "./Task";

function App() {
  const[tasks,setTasks]=useState([]);

  useEffect(()=>{
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  useEffect(()=> {
    const tasks=JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks)
  }, []);

  function addTask(name){
      setTasks(prev =>{
        return [...prev, {name:name,done:false}];
      });
    }

    function removeTask(numberToRemove){
      setTasks(prev => {
        return prev.filter((taskObject,number)=> number !== numberToRemove);
      });
    }

function updateTask(taskNumber,NewDone){
setTasks(prev => {
  const newTasks =[...prev]
  newTasks[taskNumber].done=NewDone
  return newTasks;
}) ;
}

const numberComplete=tasks.filter(t=>t.done).length;
const numberTotal= tasks.length;
  return (
    <main>
      <h1>🌟{numberComplete}/{numberTotal}🌟 Выполнено!</h1>
      <p>✨Поставь перед собой цель,✨ и не останавливайся,пока ее не достигнешь!</p>
     <Form onAdd={addTask}/>
      {tasks.map((task, number) =>(
        <Task {...task} 
               onDelete={()=>removeTask(number)}
               onToggle={done =>updateTask(number,done)} />
      ))}
    </main>  
    );
}

export default App;

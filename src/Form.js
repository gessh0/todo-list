import { useState } from "react";

export default function Form({onAdd}) {
    const [TaskName,setTaskName] = useState('');
    function handleSubmit(ev){
     ev.preventDefault();
     onAdd(TaskName) ;
     setTaskName('')
    }
    return (
        <form onSubmit={handleSubmit}>
        <button>+</button>
      <input type="text" 
             value={TaskName} 
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Твоя задача... "/>
      </form>
    );
}
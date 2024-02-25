"use client"
import React, { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
export default function AddTask (){


  const [parent] = useAutoAnimate()
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");


  useEffect(()=> {
    fetchTask();
    const intervalId = setInterval(fetchTask, 100); // Polling every 5 seconds
    return () => clearInterval(intervalId); // Cleanup function
    
  },[]);

  const fetchTask = async () => {
    try{
      const res = await fetch("http://localhost:4000/api/tasks");
      if(!res.ok){
        throw new Error('Could not fetch tasks');
      }
      const todo = await res.json();
      setTodos(todo);
      
    }
    catch(error){
      console.log(error);
    }
  }


  // 
  const handleAddTask = async () => {
    // e.preventDefault();
    try{
      const response = await fetch("http://localhost:4000/api/tasks", {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id:  31, text: inputText})
      });
      if(!response.ok){
        throw new Error('Failed to add task');
      }
      setInputText('');
      
      
    }catch(error) {
      console.log(error);
    }
  }


  const deleteTask = async (id: number) => {
    try{
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: 'DELETE'
      });
      if(!response.ok){
        throw new Error('Failed to add task');
      }

    }
    catch(error) {
      console.log(error);
    }
  }

  const updateTask = (taskId:number, updatedValue : string) =>{
    try{
      const response = fetch(`http://localhost:4000/api/tasks/${taskId}`,{
        method: 'PUT',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({text:updatedValue})
      });
      setEditMode(null);
      setInputText('');
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
         <h2 className="text-2xl font-bold mb-4">ToDo List</h2>
        <div className='flex mb-4'>
            <input type="text" name="" id="" 
            placeholder='Add a task'
            onChange={(e)=> setInputText(e.target.value)}
            value={inputText}
            className='border-gray-400 border rounded-l px-4 py-2'
            />
            <button className='bg-blue-600 text-white px-4 py-2 rounded-r'
            onClick={()=> {
              if(inputText === ''){return ;}
              handleAddTask();
            }}>ADD</button>
        </div>
        <div>
          <ul ref={parent}>
            {todos.map((todos) =>(

              <li key={todos['id']} className='flex items-center justify-between border-b py-2'>
                {editMode === todos['id'] ? (
              <>
                <input 
                type="text" 
                onChange={(e) => setEditedText(e.target.value)}
                value={editedText}
                className='border-gray-400 border rounded-l px-4 py-2'/>
                <button onClick={()=> updateTask(todos['id'], editedText)} className='bg-green-500 text-white rounded-r px-4 py-2'>Save</button>
              </>
             
              ) : (
              <>
              <span>{todos['text']}</span>
              <div className=''>
                <button onClick={() => (
                  setEditMode(todos['id']),
                  setEditedText(todos['text']
                  )
                  )
                  } className='text-blue-500 mr-2' >Edit</button>
                <button onClick={() => deleteTask(todos['id'])} className='text-red-500 ' >Delete</button>
              </div>
              </>
              )
            } 

            </li>
            ))}
          </ul>
        </div>
    </div>
  )
}


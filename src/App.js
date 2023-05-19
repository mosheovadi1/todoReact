import {useState} from 'react';
import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



function App() {
// Tasks (todo list) State
  const [toDo, setToDo] = useState([
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //add task
  const addTask = () => {
    //
    if (newTask){
      let num = toDo.length + 1;
      console.log(num)
      let tmp = toDo.filter(task=> task.id===num )
      while (tmp.length>0){
        
        num = num + 1;
        tmp = toDo.filter((task)=> task.id===num)
        console.log(tmp)
      }

      
      let newEntry = {id:num, title: newTask, status:false}
      setToDo([...toDo, newEntry])
      setNewTask("")
    }
  }
  //delete
  const deleteTask = (id) => {
    //
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks)
  }
  //mark done
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if (task.id === id){
        return ({...task, status: !task.status})
      }
      return task; 
      })
      setToDo(newTask)
  }

  //cancel updete
  const cancelUpdate = () => {
    //
    setUpdateData('')
  }
  //change task
  const changeTask = (e) => {
    //
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status
    }
    setUpdateData(newEntry);
  }
  //update task
  const updateTask = (e) => {
    console.log(updateData.id)
    if (updateData.id===undefined){
      return
    }
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id)
    setToDo([...filterRecords, updateData])
    setUpdateData('')
  }


  return (
    <div className="container App">
    <br/><br/>
    <h2> To Do List </h2>
    <br/><br/>
    {/*Update Task */}
    {updateData &&updateData ? (
  <UpdateForm
  updateData={updateData}
  changeTask={changeTask}
  updateTask={updateTask}
  cancelUpdate={cancelUpdate}
  />
      
      
    ): (
     <AddTaskForm 
     newTask={newTask}
      setNewTask={setNewTask}
       addTask={addTask}/>
    )}
  <br />  
      {/*add task */}
    
      {toDo && toDo.length ? '' : 'No Tasks...'}
     <ToDo
      toDo={toDo}
      markDone={markDone}
       setUpdateData={setUpdateData}
       deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;


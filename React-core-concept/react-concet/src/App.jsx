import { useState } from 'react'
import './App.css'
import TodoList from './todo'
import UseHook from './useSateHook'
import Joy from './userProfile'


function App() {
 
  const programingName = [`Angular`, `Next.js`, `Jqurry`,]
  return (
    <>
      <Joy name='joy hasan' age={26} address={`Dhaka`}></Joy>
      <h2 className=' text-2xl font-bold py-2 my-3 bg-cyan-700 rounded-lg '>ToDo List</h2>
      <Body></Body>
      <div className=' grid grid-cols-3 gap-4 max-w-xl my-3'>
        <TodoList task={"React"}></TodoList>
        <TodoList task={"Vue js"}></TodoList>
        <TodoList task={"Typescript"}></TodoList>
        {programingName.map(p => <TodoList task={p} ></TodoList>)}
        
      </div>
      <div>
        <UseHook></UseHook>
      </div>


    </>
  )
}

const initialState = {
  name: '',
  password: '',
  email: ''
}
function Body() {
  const [formData,setFormData] = useState(initialState)
  const handelClick = () =>{
    const {name} = formData;
    console.log(name);
   
    return (<>
     <TodoList task={name} ></TodoList>
    </>)
  }
  const handleChange = (e) => {
     const { value, name } = e.target;
     console.log(value,name);
     setFormData((prev)=>{
        return  {
          ...prev,
          [name]:value
        }
     });
  }
  return (<>
    <div className=' flex flex-col gap-4'>
      <input className=' p-2 rounded-lg ' type="text" name="name" placeholder='type here' value={formData.name} onChange={handleChange}/>
      <input className=' p-2 rounded-lg '  type="password" name='password' placeholder='password' value={formData.password} onChange={handleChange}/>
      <input className=' p-2 rounded-lg '  type="email" name='email' placeholder='Email'  value={formData.email} onChange={handleChange}/>
      <button onClick={handelClick} >Add Task</button>
      
    </div>
  </>)
}

export default App

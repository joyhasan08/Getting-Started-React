import './App.css'
import TodoList from './todo'
import UseHook from './useSateHook'
import Joy from './userProfile'


function App() {

  return (
    <>
      <Joy name='joy hasan' age={26} address={`Dhaka`}></Joy>
      <h2 className=' text-2xl font-bold py-2 my-3 bg-cyan-700 rounded-lg '>ToDo List</h2>
      <Body></Body>
      <div className=' grid grid-cols-3 gap-4 max-w-xl my-3'>
        <TodoList task={"React"}></TodoList>
        <TodoList task={"Vue js"}></TodoList>
        <TodoList task={"Typescript"}></TodoList>
      </div>
      <div>
        <UseHook></UseHook>
      </div>


    </>
  )
}


function Body() {
  const handelClick = () => alert('btn clicked')
  return (<>
    <div className=' flex flex-col gap-4'>
      <input className=' p-2 rounded-lg ' type="text" placeholder='type here' />
      <button onClick={handelClick} >Add Task</button>
    </div>
  </>)
}

export default App

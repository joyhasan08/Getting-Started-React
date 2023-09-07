import './App.css'
import Joy from './User'


function cardDesing () {
  const handelClick =()=>{
    alert(`clicked`)
  }
  const user = {name:`efty`, age: 21, address: `sirajgonj `} ;

  return(<>
  <div className='py-10 rounded-2xl '>
    <img className='max-w-[500px] rounded-2xl'  src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
  </div>
  <div className='flex gap-4  '>
  <Joy 
  name ="efty"
  age={`19`}
  address={`Asuliya, Dhaka`}
  ></Joy>
  <Joy  
  name ="joy"
  age={`29`}
  address={`Mirpur, Dhaka`}
  ></Joy>
  <button onClick={handelClick}>Click Me</button>
  </div>
    
  
    </>)
}



export default cardDesing

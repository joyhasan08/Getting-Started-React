function Joy ({name=`empty`, age, address}){
    // const name = `JOy Hasan`
    // const age = 26;
    // const address = {current: `Asuliya Savar Dhaka`, parmanent: `Sirajgonj Town Rajshahi`}
    return( <>
        <div className=" space-y-3 bg-purple-800 rounded-lg p-3">
        <h1>Im {name} </h1>
        <h2>Im {age} Years Old</h2>
        <h3>From {address}</h3>
        </div>
      </>)
  }

  export default Joy
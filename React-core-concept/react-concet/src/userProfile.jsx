function Joy ({name=`empty`, age, address}){

    return( <>
        <div className=" space-y-3 bg-purple-800 rounded-lg p-3">
        <h1>I`m {name} </h1>
        <h2>I`m {age} Years Old</h2>
        <h3>From {address}</h3>
        </div>
      </>)
  }

  export default Joy
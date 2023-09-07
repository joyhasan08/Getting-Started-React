function Joy({ name = `empty`, age, address }) {
    const imgSrc = `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80`
    return (<>
        <div className=" space-y-3 bg-purple-800 rounded-lg p-3">
            <div className=" flex gap-4 w-fit p-1 mx-auto">
            <img className="   w-16 h-16 rounded-full" src={imgSrc} />
            <h1>I`m {name} </h1>
            </div>
            <h2>I`m {age} Years Old</h2>
            <h3>From {address}</h3>
        </div>
    </>)
}

export default Joy
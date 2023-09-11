import { useEffect, useState } from "react"

export default function UseHook() {

    const [Count, setCount] = useState(0);
    function handelAddBtn() {

        setCount(prev => prev + 1)
    }
    const handelReduceBtn = () => setCount(Count - 1);
    useEffect(() => {
        console.log('clicked');
    }, [Count])




    return (<>
        <div className=" bg-slate-500 p-5 rounded-lg my-3  space-y-3 ">
            <h2 className="text-xl">গননা
                Count: {Count}</h2>
            <button onClick={handelAddBtn} className="mr-2">Add</button>
            <button onClick={handelReduceBtn}>Reduce</button>
        </div>
    </>)
}
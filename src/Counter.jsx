import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduse = ()=>{
        const newReduse = count - 1;
        setCount(newReduse);
    }

    return(
        <div style={{border: '2px solid red'}}>
            <h2>Counter: {count}</h2>
            <button style={{backgroundColor: "green", color: 'white', margin: '20px'}} onClick={handleAdd}>Add</button>
            <button style={{backgroundColor: 'tomato'}} onClick={handleReduse}>Reduse</button>
        </div>
    )
}
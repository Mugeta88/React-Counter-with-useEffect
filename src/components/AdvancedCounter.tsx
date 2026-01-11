import { useState, useEffect } from "react";

function AdvancedCounter() {
    const [count, setCount] = useState<number>(0)

    const [history, setHistory] = useState<number[]>([0])

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, count]);
    }, [count]);


  return (
    <div>
      <h1>Advanced Counter</h1>

      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

      
    </div>
  );
}

export default AdvancedCounter;
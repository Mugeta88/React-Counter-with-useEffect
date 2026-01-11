import { useState, useEffect } from "react";

function AdvancedCounter() {
    const [count, setCount] = useState<number>(0)
    const [history, setHistory] = useState<number[]>([0])
    const [step, setStep] = useState<number>(1);

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, count]);
    }, [count]);


  return (
    <div>
      <h1>Advanced Counter</h1>
      <h2>Current Count: {count}</h2>

      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>


    <h3>Count History:</h3>
    <ul>
    {history.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ul>


    
      
    </div>
  );
}

export default AdvancedCounter;
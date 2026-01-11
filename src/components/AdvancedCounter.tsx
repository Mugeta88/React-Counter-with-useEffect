import { useState, useEffect } from "react";

function AdvancedCounter() {
    const [count, setCount] = useState<number>(0)
    const [history, setHistory] = useState<number[]>([0])
    const [step, setStep] = useState<number>(1);


    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, count]);
    }, [count]);


    const handleReset = (): void => {
        setCount(0);
        setHistory([0]);
    };


  return (
    <div>
      <h1>Advanced Counter</h1>
      <h2>Current Count: {count}</h2>

    <button onClick={() => setCount(prev => prev - step)}>
        Decrement
    </button>

    <button onClick={() => setCount(prev => prev + step)}>
        Increment
    </button>

    <button onClick={handleReset}>Reset</button>




    <label>
        Step Value:
        <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
        />
    </label>




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
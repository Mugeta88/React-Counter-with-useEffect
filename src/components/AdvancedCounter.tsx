import { useState, useEffect } from "react";

function AdvancedCounter() {
    const [count, setCount] = useState<number>(0)
    const [history, setHistory] = useState<number[]>([0])
    const [step, setStep] = useState<number>(1);
    const [saveMessage, setSaveMessage] = useState<string>("")

    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, count]);
    }, [count]);


    const handleReset = (): void => {
        setCount(0);
        setHistory([0]);
    };


    useEffect(() => {
        const savedCount = localStorage.getItem("counter");
        if (savedCount !== null) {
            const parsed = Number(savedCount);
            setCount(parsed);
            setHistory([parsed]);
        }
    }, []);


    useEffect(() => {
        setSaveMessage("Saving...")

        const timeoutId = setTimeout(() => {
            localStorage.setItem("counter", count.toString())
            setSaveMessage("Changes saved.")
        }, 300);

        return () => {
            clearTimeout(timeoutId)
        };
    }, [count])


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowUp") {
            setCount(prev => prev + step);
            }
            if (event.key === "ArrowDown") {
            setCount(prev => prev - step);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [step])


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


    <p>{saveMessage}</p>



    <p>
        Use ArrowUp to increment and ArrowDown to decrement.
    </p>
    
      
    </div>
  );
}

export default AdvancedCounter;
import { useState } from "react";

function AdvancedCounter() {
    const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Advanced Counter</h1>

      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}

export default AdvancedCounter;
import { useState } from 'react'
import AdvancedCounter from './components/AdvancedCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdvancedCounter />
    </>
  )
}

export default App

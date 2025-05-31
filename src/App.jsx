import { useState } from 'react'

import Navbar from './components/Navbar'
import ProgressTracker from './components/ProgressTracker'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(1)
  const totalSteps = 10

  return (
    <>
      <Navbar />
      <ProgressTracker current={currentProgress} total={totalSteps} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Anton + Vika</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          // This is just for demonstration - you can update progress based on your actual logic
          setCurrentProgress((prev) => prev < totalSteps ? prev + 1 : 1);
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

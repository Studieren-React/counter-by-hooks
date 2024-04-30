import { useState } from 'react'
import './App.css'
import { Clicker } from './components/Clicker'

export default function App() {
  const [busy, handleBusy] = useState(false);

  return (
    <div className="App">
      <h3>React Life Cycle && Hooks</h3>
      <button onClick={() => handleBusy(!busy)}>toggle clicker</button>
      {busy && <Clicker />}
    </div>
  )
}
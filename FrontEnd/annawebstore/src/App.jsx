import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// MATERIAL US IMPORTS
import Button from '@mui/material/Button'

// END MATERIAL US IMPORTS

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Button variant="contained">Hello World</Button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

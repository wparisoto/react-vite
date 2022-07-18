import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Navbar/>

      <h2>Movies Lib</h2>

      <Outlet></Outlet>
    </div>
  )
}

export default App

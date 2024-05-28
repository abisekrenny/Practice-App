import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import {todos} from "./data.json"
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <h1> Home Page </h1>
      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            <Link to={x.Slug}>{x.todo}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

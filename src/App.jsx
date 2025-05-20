import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSlider from './CardSlider'
import HomePage from './HomePage'
import Home from './Home'
import UsersPage from './UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      <Home/>
      <UsersPage/>
    </>
  )
}

export default App

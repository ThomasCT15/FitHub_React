import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HoomePage'
import AcercaDe from './pages/AcercaDe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HoomePage />
      <AcercaDe />
    </>

  )
}

export default App

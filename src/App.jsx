import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatpage from './components/Chatpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Chatpage/>
    </>
  )
}

export default App

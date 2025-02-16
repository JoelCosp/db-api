import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav'
import Gallery from './components/Gallery'
import Characters from './components/Characters'
import Planets from './components/Planets'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

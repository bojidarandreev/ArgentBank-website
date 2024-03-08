import { useState } from 'react'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navigation />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

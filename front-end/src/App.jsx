import { useEffect, useState } from 'react'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0);
  const element = <FontAwesomeIcon icon={['fak', 'my-icon']} />
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

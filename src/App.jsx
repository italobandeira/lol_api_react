import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Footer from './assets/components/Footer'
import Champion from './assets/modules/Champion'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champion/:id' element={<Champion />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

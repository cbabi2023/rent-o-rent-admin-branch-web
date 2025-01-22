import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Sidenavbar from './Components/Navbar/Sidenavbar'
import Topnavbar from './Components/Navbar/Topnavbar'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
      <Topnavbar/>
      <Sidenavbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App




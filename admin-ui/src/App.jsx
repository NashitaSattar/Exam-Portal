import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { Registration } from './Pages/Registration/Registration'
import { Success } from './Pages/Success/Success'
import { Dashboard } from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

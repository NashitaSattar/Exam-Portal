import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sign_up } from './Pages/Sign_up/Sign_up'
import { Camera } from './Pages/Camera/Camera'
import { Success } from './Pages/Success/Success'
import { Examination } from './Pages/Examination/Examination'
import { Submit } from './Pages/Submit/Submit'
import {Login} from './Pages/Login/Login'
import { Dashboard } from './Pages/Dashboard/Dashboard'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sign_up/>}/>
          <Route path="/camera" element={<Camera/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/examination" element={<Examination/>}/>
          <Route path="/submit" element={<Submit/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

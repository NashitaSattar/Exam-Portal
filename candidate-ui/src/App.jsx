import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Sign_up } from './Pages/Sign_up/Sign_up'
import { Camera } from './Pages/Camera/Camera'
import { Success } from './Pages/Success/Success'
import { Examination } from './Pages/Examination/Examination'
import { Submit } from './Pages/Submit/Submit'
import {Login} from './Pages/Login/Login'


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
        </Routes>
      </Router>
    </>
  )
}

export default App

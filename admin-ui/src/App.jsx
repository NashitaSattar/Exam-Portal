import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { Registration } from './Pages/Registration/Registration'
import { Success } from './Pages/Success/Success'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

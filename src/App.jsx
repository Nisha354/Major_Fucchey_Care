
import './App.css'
import Login from './components/authentication/login'
import SignUp from './components/authentication/SignUp'
import HomePage from './components/homepage/HomePage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
